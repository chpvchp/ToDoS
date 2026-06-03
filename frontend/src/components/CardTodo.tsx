import Button from "./Button";

type CardTodoProps = {
  title: string;
  onDelete: () => void
}

export default function CardTodo({ title, onDelete } : CardTodoProps) {
  return (
    <div className="p-2 bg-white border border-gray-400 rounded-md flex flex-col gap-2">
      <p className="p-2 border border-gray-400 rounded-md">{title}</p>
      <Button label="Edit" onClick={() => console.log("Edit Todo")}/>
      <Button label="Del" onClick={onDelete}/>
    </div>
  )
}