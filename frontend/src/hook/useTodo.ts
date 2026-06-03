import { useState } from "react";
import { addTodo, deleteTodo, getTodos } from "../api/todo.api";

type ToDoS = {
  id: number;
  title: string;
};

export const useTodos = () => {
  const [todos, setTodos] = useState<ToDoS[]>([])

  const getListTodo = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const createTodo = async (title: string) => {
    if (!title.trim()) return;
    await addTodo(title);
    await getListTodo();
  };

  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    await getListTodo();
  };

  return {
    todos,
    getListTodo,
    createTodo,
    removeTodo,
  };
};