import { useState } from "react";
import Button from "./Button";
import CardInput from "./CardInput";

type CardTodoProps = {
  title: string;
  onDelete: () => void;
  onRename: (newTitle: string) => void;
}

export default function CardTodo({ title, onDelete, onRename } : CardTodoProps) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");


  return (
    <>
      {editing ? (
        <CardInput 
          label="Save"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onClick={() => {
            onRename(newTitle);
            setEditing(false);
            setNewTitle("");
          }}
        />
      ) : (
        <div className="p-2 bg-white border border-gray-400 rounded-md flex flex-col gap-2">
          <p className="p-2 border border-gray-400 rounded-md">{title}</p>
          <Button label="Edit" onClick={() => setEditing(true)}/>
          <Button label="Del" onClick={onDelete}/>
        </div>
      )}

    </>
  )
}