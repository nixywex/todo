import React from "react";
import Task from "../Task/Task";
import TodoCore from "../todo_components/TodoCore";
import styles from "./TodoList.module.scss";

function TodoList({ controller }) {
	const core = TodoCore();
	const activeFolder = controller.activeFolder;

	const handleDeleteClick = (id) => {
		core.deleteTask(id);
	};

	const handleImportantClick = (id) => {
		core.changeIsImportant(id);
	};

	const handleDoneClick = (id) => {
		core.changeIsDone(id);
	};

	const handleFolderClick = (id) => {
		const newFolder = prompt("Введите название папки: ");
		core.changeFolder(newFolder, id);
		controller.addFolder(newFolder);
	};

	const handleAddTaskClick = () => {
		core.addTask(prompt("Введите задачу"), activeFolder);
	};

	const generateTask = (item) => {
		return (
			<Task
				changeFolder={handleFolderClick}
				changeIsDone={handleDoneClick}
				changeIsImportant={handleImportantClick}
				deleteClick={handleDeleteClick}
				task={item}
				key={item.id}
			/>
		);
	};

	core.sort();

	return (
		<div className={styles.wrapper}>
			{core.getTasks().map((item) => {
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
