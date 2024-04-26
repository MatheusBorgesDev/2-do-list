import { PlusCircleIcon, ListX } from "lucide-react";
import { Header } from "./components/header";

function App() {
  return (
    <main>
      <Header />

      <div>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircleIcon />{" "}
        </button>
      </div>

      <div>
        <div>
          <p>Tarefas criadas</p>
          <p>0</p>
        </div>

        <div>
          <p>Concluídas</p>
          <p>0</p>
        </div>
      </div>

      <div>
        <ListX />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </main>
  );
}

export default App;
