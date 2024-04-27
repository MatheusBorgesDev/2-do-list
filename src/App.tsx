import { ChangeEvent, useState } from "react";
import { Header } from "./components/header";
import { ToDoItem } from "./components/to-do-item";
import { PlusCircleIcon, ListX } from "lucide-react";

const haveList = true;

function App() {
  const [toDoList, setToDoList] = useState<string[]>([
    "Fazer compras no mercado",
    "Levar os cachorros para passear",
    "Lavar o carro",
    "Estudar programação",
    "Pintar telas",
  ]);

  const [task, setTask] = useState("");

  function handleAddTask(event: ChangeEvent<HTMLInputElement>) {
    const newTask = event.target.value;
    setTask(newTask);
  }

  function handleNewTask() {
    setToDoList([...toDoList, task]);
    setTask("");
  }

  return (
    <div>
      <Header />
      <main className="flex gap-16 flex-col w-[46rem] mx-auto -m-7 ">
        <div className="flex justify-between gap-2 h-14">
          <input
            type="text"
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

        <div className="flex justify-between items-center border-b-[1px] border-slate-500/50 pb-6 text-blue-400 font-semibold ">
          <p>
            Tarefas criadas{" "}
            <span className="bg-slate-900 py-1 px-3 rounded-full">0</span>
          </p>

          <p>
            Concluídas{" "}
            <span className="bg-slate-900 py-1 px-3 rounded-full">0</span>
          </p>
        </div>

        {haveList ? (
          <div className="flex flex-col gap-3">
            {toDoList.map((task) => (
              <ToDoItem task={task} />
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
      </main>
    </div>
  );
}

export default App;
