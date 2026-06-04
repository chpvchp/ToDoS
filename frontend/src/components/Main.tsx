import { useEffect, useState } from "react";
import { useTodos } from "../hook/useTodo";
import CardTodo from "./CardTodo";
import CardInput from "./CardInput";

export default function Main() {
  const { todos, getListTodo, createTodo, removeTodo, changeTodo } = useTodos();
  const [title, setTitle] = useState("");

  useEffect(() => {
    getListTodo();
  }, []);

  return (
    <main className="flex-1 bg-gray-100 p-8 flex flex-col gap-4 items-center">
      <CardInput
        label="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onClick={() => createTodo(title)}
      />

      <p className="italic">---- List Todo ----</p>

      <div className="flex gap-2">
        {todos.map((todo) => (
          <CardTodo
            key={todo.id}
            title={todo.title}
            onDelete={() => removeTodo(todo.id)}
          />
        ))}
      </div>
    </main>
  );
}
