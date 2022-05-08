import { useContext } from "react";
import { Context } from "../../context";

import styles from "./Task.module.scss";

function Task({ task }) {
  const {
    changeIsDone,
    deleteTask,
    changeIsImportant,
    handleChangeFolder,
    openPopup,
  } = useContext(Context);

  return (
    <div
      className={styles.task}
      data-important={task.isImportant}
      data-complete={task.isComplete}
    >
      <div className={styles.taskMain}>
        <div className={styles.taskLeftBlock}>
          <input
            checked={task.isComplete}
            onChange={() => changeIsDone(task.id)}
            type="checkbox"
          />
          <p className="taskName">{task.task}</p>
        </div>
        <div className={styles.taskRightBlock}>
          <p onClick={() => openPopup("info", task)}>ℹ️</p>
          <p
            onClick={() =>
              openPopup("bool", {
                text: "Удалить задачу?",
                trueButton: () => deleteTask(task.id),
              })
            }
          >
            ❌
          </p>
          <p data-type="important" onClick={() => changeIsImportant(task.id)}>
            ⭐️
          </p>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <p
          onClick={() => {
            openPopup("input", {
              text: "Изменить папку",
              placeholder: "Введите название папки",
              trueButton: handleChangeFolder,
              args: [task.id],
            });
          }}
        >
          {task.folder || "Активные"}
        </p>
      </div>
    </div>
  );
}

export default Task;
