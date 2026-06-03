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
}