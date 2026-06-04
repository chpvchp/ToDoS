import Button from "./Button";

type CardInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;

}

export default function CardInput ({label, value, onChange, onClick}: CardInputProps) {
  return(
    <div className="p-4 border border-gray-400 rounded-md bg-white flex gap-2">
      <input
        className="p-2 flex-1 border border-gray-600 rounded transition duration-200 hover:border-black"
        type="text"
        placeholder="Input title todo..."
        value={value}
        onChange={onChange}
      />
      <Button 
        label={label}
        onClick={onClick} />
    </div>
  )
}