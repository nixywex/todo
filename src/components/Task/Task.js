import React from "react";

import styles from "./Task.module.scss";

function Task({ task, methods }) {
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
						onChange={() => methods.handleDoneClick(task.id)}
						type='checkbox'
					/>
					<p className='taskName'>{task.task}</p>
				</div>
				<div className={styles.taskRightBlock}>
					<p
						onClick={() => {
							methods.handlePopupClick(task.id);
						}}
					>
						🔍
					</p>
					<p onClick={() => methods.handleDeleteClick(task.id)}>❌</p>
					<p
						data-type='important'
						onClick={() => methods.handleImportantClick(task.id)}
					>
						⭐️
					</p>
				</div>
			</div>
			<div className={styles.moreInfo}>
				<p onClick={() => methods.handleFolderClick(task.id, task.folder)}>
					{task.folder || "Активные"}
				</p>
			</div>
		</div>
	);
}

export default Task;
