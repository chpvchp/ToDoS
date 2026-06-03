import Button from "./Button";
import CardTodo from "./CardTodo";

export default function Main() {
  return (
    <main className="flex-1 bg-gray-100 p-8 flex flex-col gap-4 items-center">

      <div className="p-4 border border-gray-400 rounded-md bg-white flex gap-2">
        <input className="p-2 flex-1 border border-gray-600 rounded transition duration-200 hover:border-black" type="text" placeholder="Input title todo..." />
        <Button label="Add Todo" onClick={() => console.log("Addtodo..")}/>
      </div>

      <p className="italic">---- List Todo ----</p>
      
      <div className="flex gap-2">
        <CardTodo title="React" />
      </div>

    </main>
  );
}
