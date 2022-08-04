import PopupHeader from "./PopupHeader";
import React from "react";
import Button from "./UI/Button/Button";

const PopupInfo = ({
  task,
  changeDescription,
  falseButton,
  trueButton,
  changeTask,
  changeFolder,
}) => {
  return (
    <div>
      <PopupHeader
        onClick={() => changeTask(task.task, task.id)}
        text={task.task}
      />
      <div className="icons">
        {task.isComplete ? <p data-type="icons">✅</p> : null}
        {task.isImportant ? <p data-type="icons">⭐️</p> : null}
      </div>
      <p onClick={changeFolder} data-type="folder">
        {task.folder}
      </p>
      <textarea
        onChange={(event) => {
          changeDescription(task.id, event.target.value);
        }}
        defaultValue={task.description}
        placeholder="Описание задачи"
        name=""
        id=""
        cols="10"
        rows="10"
      />
      <div data-type="buttons">
        <Button onClick={falseButton.click}>{falseButton.text}</Button>
        <Button onClick={() => trueButton.click(task.id)}>
          {trueButton.text}
        </Button>
      </div>
    </div>
  );
};

export default PopupInfo;
