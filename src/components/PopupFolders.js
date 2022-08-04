import Button from "./UI/Button/Button";
import React from "react";

const PopupFolders = ({
  title,
  folders,
  openPopup,
  falseButton,
  trueButton,
  deleteFolder,
}) => {
  return (
    <>
      <div data-type="header">
        <h1>{title}</h1>
      </div>

      <div data-type="foldersList">
        {!folders.length ? (
          <p data-type="foldersMessage">Нет пользовательских папок 🧐</p>
        ) : null}
        {folders.map((item) => {
          return (
            <div data-type="folderItem" key={item}>
              <p data-type="folderSelect">{item}</p>
              <p
                data-type="folderDelete"
                onClick={() => {
                  deleteFolder(item);
                }}
              >
                ❌
              </p>
            </div>
          );
        })}
      </div>
      <div data-type="buttons">
        <Button onClick={falseButton.click}>{falseButton.text}</Button>
        <Button onClick={trueButton.click}>{trueButton.text}</Button>
      </div>
    </>
  );
};

export default PopupFolders;
