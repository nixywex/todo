import React from "react";
import Task from "../Task/Task";
import TodoCore from "../todo_components/TodoCore";
import Popup from "../Popup/Popup";

import styles from "./TodoList.module.scss";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

function TodoList({ controller }) {
	const core = TodoCore();
	const activeFolder = controller.activeFolder;
	const [isPopupActive, setIsPopupActive] = React.useState(false);
	const [popupTaskID, setPopupTaskID] = React.useState(null);

	const handleDeleteClick = (id) => {
		core.deleteTask(id);
	};

	const handleImportantClick = (id) => {
		core.changeIsImportant(id);
	};

	const handleDoneClick = (id) => {
		core.changeIsDone(id);
	};

	const handleFolderClick = (id, defaultValue) => {
		const newFolder = prompt("Введите название папки: ", defaultValue);
		core.changeFolder(newFolder, id);
		controller.addFolder(newFolder);
	};

	const handleAddTaskClick = (defaultValue) => {
		core.addTask(prompt("Введите задачу"), activeFolder);
	};

	const handlePopupClick = (id = null) => {
		setIsPopupActive(!isPopupActive);
		setPopupTaskID(id);
	};

	const handleTaskChangeClick = (id, defaultValue) => {
		const newTask = prompt("Введите задачу", defaultValue);
		core.changeTask(id, newTask);
	};

	const handleDiscriptionChange = (id, text) => {
		core.changeDiscription(id, text);
	};

	const generateTask = (item) => {
		return (
			<Task
				handlePopupClick={handlePopupClick}
				changeFolder={handleFolderClick}
				changeIsDone={handleDoneClick}
				changeIsImportant={handleImportantClick}
				deleteClick={handleDeleteClick}
				task={item}
				key={item.id}
			/>
		);
	};

	const generatePopup = () => {
		let task = core
			.getTasks()
			.filter((activeTask) => activeTask.id == popupTaskID)[0];
		console.log(task.discription);
		console.log(task);

		return (
			<Popup trigger={isPopupActive}>
				<div className={styles.popupBody}>
					<div className={styles.header}>
						<h1
							onClick={() => {
								handleTaskChangeClick(task.id, task.task);
								setIsPopupActive(false);
							}}
							className={styles.popupTask}
						>
							{task.task}
						</h1>
						<div className={styles.info}>
							<p className={styles.popupIsImportant}>
								{task.isImportant ? "⭐️" : ""}
							</p>
							<p className={styles.popupIsDone}>
								{task.isComplete ? "✅" : ""}
							</p>
						</div>
					</div>
					<h3
						onClick={() => handleFolderClick(task.id, task.folder)}
						className={styles.popupFolder}
					>
						{task.folder}
					</h3>
					<textarea
						onChange={(event) => {
							handleDiscriptionChange(task.id, event.target.value);
						}}
						className={styles.popupDiscription}
						cols='30'
						rows='10'
						defaultValue={task.discription}
						placeholder={"Описание"}
					></textarea>

					<div className={styles.buttons}>
						<button
							onClick={() => handlePopupClick()}
							className={styles.popupCloseButton}
						>
							Закрыть
						</button>
					</div>
				</div>
			</Popup>
		);
	};

	// const generateAddTaskPopup = () => {
	// 	return (
	// 		<div>
	// 			<Popup trigger={true}>
	// 				<div className={styles.popupBody}>
	// 					<h1 className={styles.popupHeader}>Добавить задачу</h1>
	// 					<Input placeholder={"Добавить задачу"} />
	// 					<div className={styles.buttons}>
	// 						<Button onClick={core.addTask}>Добавить</Button>
	// 						<Button>Отменить</Button>
	// 					</div>
	// 				</div>
	// 			</Popup>
	// 		</div>
	// 	);
	// };
	core.sort();

	return (
		<div className={styles.wrapper}>
			{/* {generateAddTaskPopup()} */}
			{isPopupActive && popupTaskID ? generatePopup() : ""}
			{core.getTasks().map((item) => {
				if (activeFolder == "Активные") {
					if (!item.isComplete) {
						return generateTask(item, handlePopupClick);
					}
				} else if (activeFolder == "Выполненные") {
					if (item.isComplete) {
						return generateTask(item, handlePopupClick);
					}
				} else {
					if (
						item.folder.toLowerCase() == activeFolder.toLowerCase() &&
						!item.isComplete
					) {
						return generateTask(item, handlePopupClick);
					}
				}
			})}
			<button className={styles.addButton} onClick={handleAddTaskClick}>
				+
			</button>
		</div>
	);
}

export default TodoList;
