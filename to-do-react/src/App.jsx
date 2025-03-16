import { useState } from "react"; // Hook do react pra atualizar componente em tempo real
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";

import "./App.css";

// Função principal chamada no main.jsx
function App() {
  const [toDos, setToDos] = useState([
    // mocks
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newToDo = [
      ...toDos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setToDos(newToDo);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="to-do-list">
        {toDos.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </div>
      <ToDoForm addTodo={addTodo} />
    </div>
  );
}
// exporta a função App
export default App;
