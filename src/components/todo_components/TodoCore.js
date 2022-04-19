import React from "react";

const TodoCore = () => {
	const [tasks, setTasks] = React.useState([]);

	const stringChecker = (string) => {
		return string != null && !string.trim() == "";
	};

	const todoCore = {
		addTask: (task, folder) => {
			if (!stringChecker(task)) {
				return;
			}

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
		},
		deleteTask: (id) => {
			setTasks((prev) => prev.filter((task) => task.id != id));
		},
		changeIsImportant: (id) => {
			setTasks((prev) =>
				prev.map((task) => {
					if (task.id == id) {
						task.isImportant = !task.isImportant;
					}
					return task;
				})
			);
		},
		changeIsDone: (id) => {
			setTasks((prev) =>
				prev.map((task) => {
					if (task.id == id) {
						task.isComplete = !task.isComplete;
					}
					return task;
				})
			);
		},
		changeFolder: (name, id) => {
			let newFolder = name;

			if (!stringChecker(newFolder)) {
				return;
			}
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

			// newFolder =
			// 	newFolder.toLocaleLowerCase() == "выполненные" ? "" : newFolder;
			// if (
			// 	newFolder &&
			// 	newFolder.toLowerCase() != "активные" &&
			// 	newFolder.toLocaleLowerCase() != "выполненные"
			// ) {
			// 	let index = folders.findIndex((element) => {
			// 		return element.toLowerCase() === newFolder.toLowerCase();
			// 	});
			// 	if (index < 0) {
			// 		setFolders((prev) => [...prev, newFolder]);
			// 		console.log(folders);
			// 	}
			// }
			// const copy = [...tasks];
			// const current = copy.find((task) => task.id === id);
			// current.folder = newFolder;
			// setTasks(copy);
		},
		getTasks: () => {
			return tasks;
		},
		sort: () => {
			tasks.sort((prev, next) => {
				if (prev.isImportant && next.isImportant) {
					return 0;
				} else if (prev.isImportant && !next.isImportant) {
					return -1;
				} else if (!prev.isImportant && next.isImportant) {
					return 1;
				}
			});
		},
	};

	return todoCore;
};

export default TodoCore;
