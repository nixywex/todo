import React, { useContext } from "react";
import Task from "../Task/Task";
import { Context } from "../../context";

import styles from "./TodoList.module.scss";

function TodoList({ tasks }) {
	const { handleAddTaskClick, changeFolder, addFolder } = useContext(Context);
	return (
		<div className={styles.wrapper}>
			{tasks.map((item) => {
				return (
					<Task
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
