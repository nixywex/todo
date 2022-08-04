import { useContext } from "react";
import { Context } from "../../context";

import Task from "../Task/Task";

import styles from "./TodoList.module.scss";

function TodoList({ tasks }) {
  const { handleAddTaskClick, openPopup, deleteTask } = useContext(Context);

  return (
    <div className={styles.wrapper}>
      {tasks.map((item) => {
        return <Task task={item} key={item.id} />;
      })}
      {tasks.length !== 0 ? (
        <div className={styles.messageDiv}>
          <p className={styles.messageInfo}>Всего задач: {tasks.length}</p>
          <p
            className={styles.delete}
            onClick={() =>
              openPopup("bool", {
                text: "Удалить все задачи в папке?",
                trueButton: () => tasks.forEach((item) => deleteTask(item.id)),
                args: [],
              })
            }
          >
            Удалить все в папке
          </p>
        </div>
      ) : null}
      <button
        className={styles.addButton}
        onClick={() =>
          openPopup("input", {
            text: "Добавить задачу",
            placeholder: "Введите задачу",
            trueButton: handleAddTaskClick,
            args: [],
          })
        }
      >
        +
      </button>
    </div>
  );
}

export default TodoList;
