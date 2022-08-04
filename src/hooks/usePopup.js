import React from "react";
import PopupInfo from "../components/PopupInfo";
import PopupInput from "../PopupInput";
import PopupBool from "../components/PopupBool";
import PopupFolders from "../components/PopupFolders";

function usePopup(
  addTask,
  activeFolder,
  deleteTask,
  changeDescription,
  changeFolder,
  addFolder,
  deleteFolder,
  changeFolders,
  changeTask
) {
  const [isPopupActive, setIsPopupActive] = React.useState(false);
  const [popupType, setPopupType] = React.useState(null);
  const [popupData, setPopupData] = React.useState(null);
  const [popupInput, setPopupInput] = React.useState("");

  const openPopup = (type, data, defaultValue = "") => {
    setPopupInput(defaultValue);
    setPopupType(type);
    setPopupData(data);
    setIsPopupActive(true);
  };

  const handlePopupClose = () => {
    setIsPopupActive(false);
    setPopupInput("");
  };

  const handleAddTaskClick = (name) => {
    addTask(name, activeFolder);
    setIsPopupActive(false);
    setPopupInput("");
  };

  const handleChangeFolder = (name, id) => {
    changeFolder(id, name);
    setIsPopupActive(false);
    setPopupInput("");
    addFolder(name);
  };

  const handleChangeTask = (task, id) => {
    changeTask(id, task);
    setIsPopupActive(false);
    setPopupInput("");
  };

  const generatePopup = () => {
    if (!isPopupActive) {
      return null;
    }

    switch (popupType) {
      case "info":
        return (
          <PopupInfo
            task={popupData}
            changeDescription={changeDescription}
            changeTask={() => {
              openPopup(
                "input",
                {
                  text: "Изменить задачу",
                  placeholder: "Введите задачу",
                  trueButton: handleChangeTask,
                  args: [popupData.id],
                },
                popupData.task
              );
            }}
            changeFolder={() => {
              openPopup(
                "input",
                {
                  text: "Изменить папку",
                  placeholder: "Введите название папки",
                  trueButton: handleChangeFolder,
                  args: [popupData.id],
                },
                popupData.folder
              );
            }}
            falseButton={{ text: "Закрыть", click: handlePopupClose }}
            trueButton={{
              text: "Удалить",
              click: (id) => {
                deleteTask(id);
                handlePopupClose();
              },
            }}
          />
        );
      case "bool":
        return (
          <PopupBool
            title={popupData.text}
            falseButton={{ text: "Нет", click: handlePopupClose }}
            trueButton={{
              text: "Да",
              click: () => {
                popupData.trueButton(popupInput, [...popupData.args]);
                setIsPopupActive(false);
              },
            }}
          />
        );
      case "input":
        return (
          <PopupInput
            title={popupData.text}
            input={{
              value: popupInput,
              setValue: setPopupInput,
              placeholder: popupData.placeholder,
            }}
            falseButton={{ text: "Закрыть", click: handlePopupClose }}
            trueButton={{
              text: "ОК",
              click: () =>
                popupData.trueButton(popupInput, [...popupData.args]),
            }}
          />
        );
      case "folders":
        return (
          <PopupFolders
            title={popupData.text}
            folders={popupData.folders}
            deleteFolder={(item) => {
              openPopup("bool", {
                text: "Удалить папку?",
                trueButton: () => {
                  changeFolders(item);
                  deleteFolder(item);
                },
                args: [item],
              });
            }}
            falseButton={{ text: "OK", click: handlePopupClose }}
            trueButton={{
              text: "Создать папку",
              click: () =>
                popupData.trueButton(popupInput, [...popupData.args]),
            }}
          />
        );
      default:
        setIsPopupActive(false);
    }
  };

  return {
    isPopupActive,
    popupType,
    popupData,
    popupInput,
    handleAddTaskClick,
    generatePopup,
    setIsPopupActive,
    handleChangeFolder,
    openPopup,
  };
}

export default usePopup;
