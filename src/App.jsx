import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(['Go to the gym', 'Lunch with Mike']);
  const [todoValue, setTodoValue] = useState('');

  function handleTodo(newTodo) {
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoValue('');  // Clear input after adding a new todo
  }

  function handleDelete(index) {
    const newTodos = todos.filter((__, todoIndex) => {
      return todoIndex !== index;  // Strict comparison
    });
    setTodos(newTodos);
  }

  function handleEdit(index) {
    const editTodo = todos[index];
    setTodoValue(editTodo);  // Set the actual todo value, not the index
    handleDelete(index);     // Delete the todo before editing
  }

  return (
    <main>
      <Todoinput handleTodo={handleTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
      <Todolist handleDelete={handleDelete} handleEdit={handleEdit} todos={todos} />
    </main>
  );
}

export default App;
