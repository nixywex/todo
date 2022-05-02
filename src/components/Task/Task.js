import React, { useContext } from "react";
import { Context } from "../../context";

import styles from "./Task.module.scss";

function Task({ task, changeFolder }) {
	const { changeIsDone, deleteTask, changeIsImportant } = useContext(Context);
	return (
		<div
			className={styles.task}
			data-important={task.isImportant}
			data-complete={task.isComplete}
		>
			<div className={styles.taskMain}>
				<div className={styles.taskLeftBlock}>
					<input
						checked={task.isComplete}
						onChange={() => changeIsDone(task.id)}
						type='checkbox'
					/>
					<p className='taskName'>{task.task}</p>
				</div>
				<div className={styles.taskRightBlock}>
					<p
					// onClick={() => {
					// 	handlePopupClick(task.id);
					// }}
					>
						🔍
					</p>
					<p onClick={() => deleteTask(task.id)}>❌</p>
					<p data-type='important' onClick={() => changeIsImportant(task.id)}>
						⭐️
					</p>
				</div>
			</div>
			<div className={styles.moreInfo}>
				<p onClick={() => changeFolder(task.id, task.folder)}>
					{task.folder || "Активные"}
				</p>
			</div>
		</div>
	);
}

export default Task;
