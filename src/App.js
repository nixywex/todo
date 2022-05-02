import React from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { Context } from "./context";

import styles from "./index.module.scss";

function App() {
	const [tasks, setTasks] = React.useState([]);
	const [activeFolder, setActiveFolder] = React.useState("Активные");
	const [folders, setFolders] = React.useState([]);

	const addTask = (task, folder) => {
		setTasks((prev) => [
			...prev,
			{
				task,
				isImportant: false,
				isComplete: false,
				folder: folder === "Выполненные" ? "Активные" : folder || "Активные",
				discription: "",
				id: Date.now(),
			},
		]);
	};

	const deleteTask = (id) => {
		setTasks((prev) => prev.filter((task) => task.id != id));
	};

	const changeIsImportant = (id) => {
		setTasks((prev) =>
			prev.map((task) => {
				if (task.id == id) {
					task.isImportant = !task.isImportant;
				}
				return task;
			})
		);
	};

	const changeIsDone = (id) => {
		setTasks((prev) =>
			prev.map((task) => {
				if (task.id == id) {
					task.isComplete = !task.isComplete;
				}
				return task;
			})
		);
	};

	const changeDiscription = (id, text) => {
		tasks.forEach((task) => {
			if (task.id == id) {
				task.discription = text;
			}
		});
	};

	const changeTask = (id, newTask) => {
		tasks.forEach((task) => {
			if (task.id == id) {
				task.task = newTask;
			}
		});
	};

	const changeFolder = (name, id) => {
		let newFolder = name;

		if (newFolder.toLowerCase() == "выполненные") {
			newFolder = "";
		}

		setTasks((prev) =>
			prev.map((task) => {
				if (task.id == id) {
					task.folder = newFolder;
				}
				return task;
			})
		);

		return newFolder;
	};

	const sortTasks = () => {
		tasks.sort((prev, next) => {
			if (prev.isImportant && next.isImportant) {
				return 0;
			} else if (prev.isImportant && !next.isImportant) {
				return -1;
			} else if (!prev.isImportant && next.isImportant) {
				return 1;
			}
		});
	};

	const setActiveFolderHandle = (name) => {
		setActiveFolder(name);
	};

	const addFolder = (name) => {
		if (
			name.toLowerCase() == "активные" ||
			name.toLowerCase() == "выполненные"
		) {
			return;
		}
		setFolders((prev) => [...prev, name]);
	};

	return (
		<Context.Provider
			value={{
				addTask,
				deleteTask,
				changeIsImportant,
				changeIsDone,
				changeDiscription,
				changeTask,
				changeFolder,
				sortTasks,
				setActiveFolderHandle,
				addFolder,
			}}
		>
			<div className={styles.wrapper}>
				<Header folders={folders} activeFolder={activeFolder} />
				<TodoList tasks={tasks} activeFolder={activeFolder} />
			</div>
		</Context.Provider>
	);
}

export default App;
