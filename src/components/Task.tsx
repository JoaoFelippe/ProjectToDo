/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { Input } from "./Input";
import { Button } from "./Button";

{
  /* <Circle size={32} /> */
}
{
  /* <CheckCircle size={32} /> */
}

export interface TaskType {
  id: number;
  concluida: boolean;
  tarefa: string;
}

interface TaskProps {
  task: TaskType;
  onCheckTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
  function handleCheckBox() {
    onCheckTask(task.id);
  }

  function handleDelete() {
    onDeleteTask(task.id);
  }

  const taskFinished = task.concluida ? styles.paragraph_checked : "";

  return (
    <article>
      <div className={styles.container}>
        <label className={styles.label_Checkbox}>
          <input type="checkbox" onClick={handleCheckBox} checked={task.concluida}/>
          <span className={styles.checkmark}></span>
        </label>

        {/* <label className={styles.checkbox_checked}>
          <input type="checkbox" onClick={handleCheckBox} />
          <span className={styles.checkbox}>
            <Circle size={20} />
          </span>
        </label> */}

        {/* <Input customCss={`${styles.checkbox} ${styles.checkbox_unchecked}`} type="checkbox" /> */}
        {/* <input className={`${styles.checkbox} ${styles.checkbox_unchecked}`}  type="checkbox" /> */}
        <p className={`${styles.paragraph} ${taskFinished}`}>{task.tarefa}</p>

        <Button
          customCss={styles.trashButton}
          iconButton={<Trash size={20} onClick={handleDelete} />}
        />
      </div>
    </article>
  );
}
