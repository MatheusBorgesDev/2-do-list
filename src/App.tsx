import { ChangeEvent, useState } from "react";

import { Header } from "./components/header";
import { ToDoItem } from "./components/to-do-item";

import { PlusCircleIcon, ListX } from "lucide-react";

interface TaskItem {
  task: string;
  isChecked: boolean;
}

export function App() {
  const [toDoList, setToDoList] = useState<TaskItem[]>([
    { task: "Fazer compras no mercado", isChecked: false },
    { task: "Levar os cachorros para passear", isChecked: false },
    { task: "Lavar o carro", isChecked: false },
    { task: "Estudar programação", isChecked: true },
    { task: "Pintar telas", isChecked: true },
  ]);

  const [task, setTask] = useState("");

  const [totalTasks, setTotalTasks] = useState(toDoList.length);

  const [checkedTasks, setCheckedTasks] = useState(() => {
    const filteredCheckToDoList = toDoList.filter(
      (task) => task.isChecked
    ).length;

    return filteredCheckToDoList;
  });

  function handleAddTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleNewTask() {
    if (task !== "") {
      setToDoList((prevState) => [
        ...prevState,
        { task: task, isChecked: false },
      ]);
      setTask("");
      setTotalTasks(totalTasks + 1);
    }
  }

  function onDeleteTask(taskToDelete: string) {
    const filteredTasks = toDoList.filter((task) => task.task !== taskToDelete);

    setToDoList(filteredTasks);

    setTotalTasks(filteredTasks.length);

    const checkedCount = filteredTasks.filter((task) => task.isChecked).length;

    setCheckedTasks(checkedCount);
  }

  function onCheckTask(index: number, isChecked: boolean) {
    setToDoList((prevState) => {
      const updatedToDoList = [...prevState];

      updatedToDoList[index].isChecked = isChecked;

      const checkedCount = updatedToDoList.filter(
        (task) => task.isChecked
      ).length;

      setCheckedTasks(checkedCount);

      return updatedToDoList;
    });
  }

  return (
    <div>
      <Header />
      <main className="flex gap-16 flex-col w-[46rem] mx-auto -m-7">
        <div className="flex justify-between gap-2 h-14">
          <input
            type="text"
            value={task}
            onChange={handleAddTask}
            placeholder="Adicione uma nova tarefa"
            className="bg-slate-700 w-full px-4 rounded-lg"
          />
          <button
            onClick={handleNewTask}
            className="flex items-center gap-2 bg-blue-800 text-sm font-bold px-4 rounded-lg hover:bg-blue-900"
          >
            Criar <PlusCircleIcon size={17} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center border-b-[1px] border-slate-500/50 pb-6 text-blue-400 font-semibold ">
            <p>
              Tarefas criadas{" "}
              <span className="bg-slate-900 py-1 px-3 rounded-full">
                {totalTasks}
              </span>
            </p>

            <p>
              Concluídas{" "}
              <span className="bg-slate-900 py-1 px-3 rounded-full">
                {checkedTasks}
              </span>
            </p>
          </div>

          {toDoList.length !== 0 ? (
            <div className="flex flex-col gap-3">
              {toDoList.map((task, index) => (
                <ToDoItem
                  key={index}
                  index={index}
                  task={task.task}
                  onDeleteTask={onDeleteTask}
                  onCheckTask={onCheckTask}
                  isChecked={task.isChecked}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 opacity-50">
              <ListX size={70} />
              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
