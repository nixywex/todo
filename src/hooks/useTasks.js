import React from "react";

function useTasks(activeFolder, searchValue, stringValidate) {
  const [tasks, setTasks] = React.useState([]);

  // localStorage.setItem("tasks", JSON.stringify(tasks));
  // setTasks(localStorage.tasks ? JSON.parse(localStorage.getItem("tasks")) : []);

  const addTask = (task, folder) => {
    if (!stringValidate(task)) return;

    setTasks((prev) => [
      ...prev,
      {
        task,
        isImportant: false,
        isComplete: false,
        folder: folder === "Выполненные" ? "Активные" : folder || "Активные",
        description: "",
        id: Date.now(),
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const changeIsDone = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.isComplete = !task.isComplete;
        }
        return task;
      })
    );
  };

  const changeIsImportant = (id) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.isImportant = !task.isImportant;
        }
        return task;
      })
    );
  };

  const changeDescription = (id, text) => {
    if (!stringValidate(text)) return;

    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.description = text;
        }
        return task;
      })
    );
  };

  const changeTask = (id, newTask) => {
    if (!stringValidate(newTask)) return;

    tasks.forEach((task) => {
      if (task.id === id) {
        task.task = newTask;
      }
    });
  };

  const changeFolder = (id, newFolder) => {
    if (!stringValidate(newFolder)) return;

    if (newFolder.toLowerCase() === "выполненные") {
      newFolder = "";
    }

    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          task.folder = newFolder;
        }
        return task;
      })
    );

    return newFolder;
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

  const filterTasks = (tasksArray) => {
    return tasksArray.filter((task) => {
      if (activeFolder.toLowerCase() === "активные") {
        return !task.isComplete;
      } else if (activeFolder.toLowerCase() === "выполненные") {
        return task.isComplete;
      } else if (activeFolder.toLowerCase() === task.folder.toLowerCase()) {
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
    return sortTasks(filteredArray);
  };

  const changeFolders = (name) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.folder === name) {
          task.folder = "Активные";
        }
        return task;
      })
    );
  };

  return {
    prepareTasks,
    tasks,
    addTask,
    deleteTask,
    changeIsDone,
    changeIsImportant,
    changeFolder,
    changeTask,
    changeDescription,
    changeFolders,
  };
}

export default useTasks;
