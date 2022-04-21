import React from "react";
import Task from "../Task/Task";

function Tasks({ tasks, activeFolder, methods }) {
	return tasks.map((item) => {
		if (activeFolder == "Активные") {
			if (!item.isComplete) {
				return <Task methods={methods} task={item} key={item.id} />;
			}
		} else if (activeFolder == "Выполненные") {
			if (item.isComplete) {
				return <Task methods={methods} task={item} key={item.id} />;
			}
		} else {
			if (
				item.folder.toLowerCase() == activeFolder.toLowerCase() &&
				!item.isComplete
			) {
				return <Task methods={methods} task={item} key={item.id} />;
			}
		}
	});
}

export default Tasks;
