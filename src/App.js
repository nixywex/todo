import React from "react";
import { Context } from "./context";

import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

import useTasks from "./components/hooks/useTasks";
import useFolders from "./components/hooks/useFolders";

import styles from "./index.module.scss";

function App() {
	const [searchValue, setSearchValue] = React.useState("");
	const [activeFolder, setActiveFolder] = React.useState("Активные");

	const {
		prepareTasks,
		tasks,
		addTask,
		deleteTask,
		changeIsDone,
		changeIsImportant,
		changeFolder,
		changeTask,
		changeDiscription,
	} = useTasks(activeFolder, searchValue);

	const { folders, addFolder } = useFolders();

	const preparedTasks = prepareTasks(tasks);

	const handleAddTaskClick = () => {
		addTask(prompt("Введите задачу"), activeFolder);
	};

	return (
		<Context.Provider
			value={{
				handleAddTaskClick,
				deleteTask,
				changeIsImportant,
				changeIsDone,
				changeDiscription,
				changeTask,
				changeFolder,
				addFolder,
				setActiveFolder,
				searchValue,
				setSearchValue,
			}}
		>
			<div className={styles.wrapper}>
				<Header folders={folders} activeFolder={activeFolder} />
				<TodoList tasks={preparedTasks} activeFolder={activeFolder} />
			</div>
		</Context.Provider>
	);
}

export default App;
