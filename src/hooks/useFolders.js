import React from "react";

function useFolders() {
  const [folders, setFolders] = React.useState([]);
  // setFolders(
  //   localStorage.tolders ? JSON.parse(localStorage.getItem("folders")) : []
  // );

  const addFolder = (name) => {
    const lowerName = name.toLowerCase();

    let result = false;

    folders.forEach((folder) => {
      if (folder.toLowerCase() === lowerName) result = true;
    });

    if (lowerName === "активные" || lowerName === "выполненные" || result) {
      return;
    }

    setFolders((prev) => [...prev, name]);
  };

  const deleteFolder = (name) => {
    setFolders((prev) => prev.filter((item) => item !== name));
  };

  return { folders, addFolder, deleteFolder };
}

export default useFolders;
