import React from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import TodoController from "./components/todo_components/TodoController";

import styles from "./index.module.scss";

function App() {
	const controller = TodoController();

	return (
		<div className={styles.wrapper}>
			<Header controller={controller} />
			<TodoList controller={controller} />
		</div>
	);
}

export default App;
