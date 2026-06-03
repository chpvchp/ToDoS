import Button from "./Button";

export default function Main() {
  return (
    <main className="flex-1 bg-gray-100 p-8">

      <div className="max-w-md mx-auto p-4 border border-gray-400 rounded-md bg-white flex gap-2">
        <input className="p-2 flex-1 border border-gray-600 rounded transition duration-200 hover:border-black" type="text" placeholder="Input title todo..." />
        <Button label="Add Todo" onClick={() => console.log("Addtodo..")}/>
      </div>
      
      <div>

      </div>

    </main>
  );
}
