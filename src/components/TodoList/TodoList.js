import React, { useContext } from "react";
import Task from "../Task/Task";
import { Context } from "../../context";

import styles from "./TodoList.module.scss";

function TodoList({ activeFolder, tasks }) {
	const {
		addTask,
		changeIsDone,
		deleteTask,
		changeIsImportant,
		changeFolder,
		addFolder,
		sortTasks,
	} = useContext(Context);

	// const [isPopupActive, setIsPopupActive] = React.useState(false);
	// const [popupTaskID, setPopupTaskID] = React.useState(null);

	// const handlePopupClick = (id = null) => {
	// 	setIsPopupActive(!isPopupActive);
	// 	setPopupTaskID(id);
	// };

	// const handleTaskChangeClick = (id, defaultValue) => {
	// 	const newTask = prompt("Введите задачу", defaultValue);
	// 	core.changeTask(id, newTask);
	// };

	// const handleDiscriptionChange = (id, text) => {
	// 	core.changeDiscription(id, text);
	// };

	// const generatePopup = () => {
	// 	let task = core
	// 		.getTasks()
	// 		.filter((activeTask) => activeTask.id == popupTaskID)[0];
	// 	console.log(task.discription);
	// 	console.log(task);

	// 	return (
	// 		<Popup trigger={isPopupActive}>
	// 			<div className={styles.popupBody}>
	// 				<div className={styles.header}>
	// 					<h1
	// 						onClick={() => {
	// 							handleTaskChangeClick(task.id, task.task);
	// 							setIsPopupActive(false);
	// 						}}
	// 						className={styles.popupTask}
	// 					>
	// 						{task.task}
	// 					</h1>
	// 					<div className={styles.info}>
	// 						<p className={styles.popupIsImportant}>
	// 							{task.isImportant ? "⭐️" : ""}
	// 						</p>
	// 						<p className={styles.popupIsDone}>
	// 							{task.isComplete ? "✅" : ""}
	// 						</p>
	// 					</div>
	// 				</div>
	// 				<h3
	// 					onClick={() => handleFolderClick(task.id, task.folder)}
	// 					className={styles.popupFolder}
	// 				>
	// 					{task.folder}
	// 				</h3>
	// 				<textarea
	// 					onChange={(event) => {
	// 						handleDiscriptionChange(task.id, event.target.value);
	// 					}}
	// 					className={styles.popupDiscription}
	// 					cols='30'
	// 					rows='10'
	// 					defaultValue={task.discription}
	// 					placeholder={"Описание"}
	// 				></textarea>

	// 				<div className={styles.buttons}>
	// 					<button
	// 						onClick={() => handlePopupClick()}
	// 						className={styles.popupCloseButton}
	// 					>
	// 						Закрыть
	// 					</button>
	// 				</div>
	// 			</div>
	// 		</Popup>
	// 	);
	// };

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
	// core.sort();

	const handleAddTaskClick = (defaultValue) => {
		addTask(prompt("Введите задачу"), activeFolder);
	};

	const generateTask = (item) => {
		return (
			<Task
				// handlePopupClick={handlePopupClick}
				changeFolder={() => {
					const newFolder = prompt("Введите новую папку:", item.folder);
					changeFolder(newFolder, item.id);
					addFolder(newFolder);
				}}
				changeIsDone={() => changeIsDone(item.id)}
				changeIsImportant={() => changeIsImportant(item.id)}
				deleteClick={() => deleteTask(item.id)}
				task={item}
				key={item.id}
			/>
		);
	};

	sortTasks();

	return (
		<div className={styles.wrapper}>
			{/* {generateAddTaskPopup()} */}
			{/* {isPopupActive && popupTaskID ? generatePopup() : ""} */}
			{tasks.map((item) => {
				if (activeFolder == "Активные") {
					if (!item.isComplete) {
						return generateTask(item);
					}
				} else if (activeFolder == "Выполненные") {
					if (item.isComplete) {
						return generateTask(item);
					}
				} else {
					if (
						item.folder.toLowerCase() == activeFolder.toLowerCase() &&
						!item.isComplete
					) {
						return generateTask(item);
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
