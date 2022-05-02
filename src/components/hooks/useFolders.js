import React from "react";

function useFolders() {
	const [folders, setFolders] = React.useState([]);

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

	return { folders, addFolder };
}

export default useFolders;
