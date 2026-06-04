const BASE_URL = "http://localhost:8000";

export const getTodos = async () => {
  const res = await fetch(`${BASE_URL}/todos`);
  const data = await res.json();
  return data
};

export const addTodo = async (title: string) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  return await res.json();
};

export const deleteTodo = async (id: number) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};

export const editTodo = async (id: number, new_title: string) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: new_title}),
  });
  return await res.json();
}