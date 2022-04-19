import React from "react";

function TodoController() {
	const [activeFolder, setActiveFolder] = React.useState("Активные");
	const [folders, setFolders] = React.useState([]);

	const controller = {
		folders,
		activeFolder,
		setActiveFolderHandle: (name) => {
			setActiveFolder(name);
		},
		addFolder: (name) => {
			if (
				name.toLowerCase() == "активные" ||
				name.toLowerCase() == "выполненные"
			) {
				return;
			}
			setFolders((prev) => [...prev, name]);
		},
	};

	return controller;
}

export default TodoController;
