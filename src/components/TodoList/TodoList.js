import { useContext } from "react";
import { Context } from "../../context";

import Task from "../Task/Task";

import styles from "./TodoList.module.scss";

function TodoList({ tasks }) {
	const { handleAddTaskClick, openPopup } =
		useContext(Context);

	return (
		<div className={styles.wrapper}>
			{tasks.map((item) => {
				return <Task task={item} key={item.id} />;
			})}
			<button
				className={styles.addButton}
				onClick={() =>
					openPopup("input", {
						text: "Добавить задачу",
						placeholder: "Введите задачу",
						trueButton: handleAddTaskClick,
						args: [],
					})
				}
			>
				+
			</button>
		</div>
	);
}

export default TodoList;
