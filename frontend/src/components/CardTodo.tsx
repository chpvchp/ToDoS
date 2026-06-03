import Button from "./Button";

type CardTodoProps = {
  title: string;
}

export default function CardTodo({ title } : CardTodoProps) {
  return (
    <div className="p-2 bg-white border border-gray-400 rounded-md flex flex-col gap-2">
      <p className="p-2 border border-gray-400 rounded-md">{title}</p>
      <Button label="Edit" onClick={() => console.log("Edit Todo")}/>
      <Button label="Del" onClick={() => console.log("Delete Todo")}/>
    </div>
  )
}