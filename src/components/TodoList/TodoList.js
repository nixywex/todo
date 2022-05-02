import React, { useContext } from "react";
import Task from "../Task/Task";
import { Context } from "../../context";

import styles from "./TodoList.module.scss";

function TodoList({ activeFolder, tasks }) {
	const { addTask, changeFolder, addFolder } = useContext(Context);

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
	const handleAddTaskClick = (defaultValue) => {
		addTask(prompt("Введите задачу"), activeFolder);
	};

	return (
		<div className={styles.wrapper}>
			{/* {generateAddTaskPopup()} */}
			{/* {isPopupActive && popupTaskID ? generatePopup() : ""} */}
			{tasks.map((item) => {
				return (
					<Task
						// handlePopupClick={handlePopupClick}
						changeFolder={() => {
							const newFolder = prompt("Введите новую папку:", item.folder);
							changeFolder(newFolder, item.id);
							addFolder(newFolder);
						}}
						task={item}
						key={item.id}
					/>
				);
			})}
			<button className={styles.addButton} onClick={handleAddTaskClick}>
				+
			</button>
		</div>
	);
}

export default TodoList;
