import { useState } from "react";
import "./App.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
  const [animationParent] = useAutoAnimate();

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-xl mx-auto py-6">
      <form className="flex gap-x-2 mb-4" onSubmit={handleSubmit}>
        <input placeholder="Enter something here!!" className="flex-1 border rounded h-8 px-3 text-sm" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button className="h-8 flex items-center px-5 rounded bg-blue-600 text-white text-sm" disabled={!todo} type="submit">
          Add
        </button>
      </form>
      <ul ref={animationParent} className="flex flex-col gap-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="p-4 rounded bg-blue-100 text-blue-700 text-sm flex justify-between">
            {todo}
            <button onClick={() => deleteTodo(index)} className="h-7 rounded px-3 text-xs bg-red-600 text-white">
              Delete
            </button>
          </li>
        ))}
        {!todos.length && <li className="p-4 rounded bg-yellow-100 text-sm flex justify-between">No todos!</li>}
      </ul>
    </div>
  );
}

export default App;
