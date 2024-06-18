/* eslint-disable @typescript-eslint/no-unused-vars */
import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

import Clipboard from "./assets/Clipboard.svg";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task, TaskType } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [taskCount, setTaskCount] = useState(tasks.length);
  const [taskCountFinished, setTaskCountFinished] = useState(
    tasks.filter((value) => {
      return value.concluida === true;
    }).length
  );
  const [newTaskText, setNewTaskText] = useState("");

  const textFinished =
    taskCount > 0 ? `${taskCountFinished} de ${taskCount}` : taskCountFinished;


  function handleNewTaskForm(event: FormEvent) {
    event.preventDefault();

    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;

    const taskForm: TaskType = {
      id: lastId + 1,
      tarefa: newTaskText,
      concluida: false,
    };

    setTasks([...tasks, taskForm]);
    setNewTaskText("");

    setTaskCount((state) => {
      return state + 1;
    });
  }

  function CheckTask(id: number) {
    setTasks(
      tasks.filter((value) => {
        if (value.id === id) {
          value.concluida = !value.concluida;
        }
        return value;
      })
    );

    setTaskCountFinished(
      tasks.filter((value) => {
        return value.concluida === true;
      }).length
    );
  }

  function DeleteTask(id: number) {
    setTasks(
      tasks.filter((value) => {
        return value.id !== id;
      })
    );

    setTaskCount(tasks.length - 1);

    setTaskCountFinished(
      tasks.filter((value) => {
        return value.concluida === true && value.id !== id
      }).length
    );
  }

  function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskTextInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  return (
    <div>
      <Header />

      <div className={styles.content}>
        <form className={styles.taskInfoContainer} onSubmit={handleNewTaskForm}>
          <Input
            type="text"
            id="newTask"
            name="newTask"
            value={newTaskText}
            placeholder="Adicione uma nova tarefa"
            onInvalid={handleNewTaskTextInvalid}
            onChange={handleNewTaskText}
            required
          />
          <Button
            nameButton="Criar"
            iconButton={<PlusCircle size={20} />}
            type="submit"
          />
        </form>
        <div className={styles.taskProgress}>
          <p>
            Tarefas criadas <span>{taskCount}</span>
          </p>
          <p>
            Concluídas <span>{textFinished}</span>
          </p>
        </div>

        <div className={styles.tasksList}>
          {taskCount == 0 ? (
            <>
              <div className={styles.taskEmpty}>
                <img src={Clipboard} />

                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </>
          ) : (
            <>
              {tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onCheckTask={CheckTask}
                    onDeleteTask={DeleteTask}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
