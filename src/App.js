import React from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { Context } from "./context";

import styles from "./index.module.scss";

function App() {
	const [tasks, setTasks] = React.useState([]);
	const [activeFolder, setActiveFolder] = React.useState("Активные");
	const [folders, setFolders] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState("");

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

	const handleAddTaskClick = () => {
		addTask(prompt("Введите задачу"), activeFolder);
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

	const changeActiveFolder = (name) => {
		setActiveFolder(name);
	};

	const sortTasks = (tasksArray) => {
		return tasksArray.sort((prev, next) => {
			if (prev.isImportant && next.isImportant) {
				return 0;
			} else if (prev.isImportant && !next.isImportant) {
				return -1;
			} else if (!prev.isImportant && next.isImportant) {
				return 1;
			}
		});
	};

	const addFolder = (name) => {
		const lowerName = name.toLowerCase();

		let result = false;
		folders.forEach((folder) => {
			if (folder.toLowerCase() == lowerName) result = true;
		});

		if (lowerName == "активные" || lowerName == "выполненные" || result) {
			return;
		}

		setFolders((prev) => [...prev, name]);
	};

	const filterTasks = (tasksArray) => {
		return tasksArray.filter((task) => {
			if (activeFolder.toLowerCase() == "активные") {
				return !task.isComplete;
			} else if (activeFolder.toLowerCase() == "выполненные") {
				return task.isComplete;
			} else if (activeFolder.toLowerCase() == task.folder.toLowerCase()) {
				return !task.isComplete;
			}
		});
	};

	const filterBySearch = (tasksArray, value) => {
		return tasksArray.filter((task) =>
			task.task.toLowerCase().includes(value.toLowerCase())
		);
	};

	const prepareTasks = (tasksArray) => {
		if (searchValue) {
			tasksArray = filterBySearch(tasksArray, searchValue);
		}
		const filteredArray = filterTasks(tasksArray);
		const prepearedArray = sortTasks(filteredArray);
		return prepearedArray;
	};

	const preparedTasks = prepareTasks(tasks);

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
				sortTasks,
				addFolder,
				changeActiveFolder,
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
