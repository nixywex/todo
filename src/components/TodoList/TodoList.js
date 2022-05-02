import React, { useContext } from "react";
import { Context } from "../../context";

import Task from "../Task/Task";

import styles from "./TodoList.module.scss";

function TodoList({ tasks }) {
	const { handleAddTaskClick, changeFolder, addFolder } = useContext(Context);

	const handleChangeFolderClick = (item) => {
		const newFolder = prompt("Введите новую папку:", item.folder);
		changeFolder(newFolder, item.id);
		addFolder(newFolder);
	};
	return (
		<div className={styles.wrapper}>
			{tasks.map((item) => {
				return (
					<Task
						changeFolder={() => handleChangeFolderClick(item)}
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
