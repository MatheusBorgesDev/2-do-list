import { Check, Trash } from "lucide-react";
import { useState } from "react";

interface ToDoItemProps {
  task: string;
}

export function ToDoItem({ task }: ToDoItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckBox() {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  }

  return (
    <div className="flex items-center p-4 rounded-md gap-3 bg-slate-700">
      <label
        className={`flex items-center h-5 w-5 border-2 text-transparent border-blue-500 checked:bg-green-500 rounded-full ${
          isChecked && "bg-blue-500 text-current"
        }`}
      >
        <Check />
        <input onClick={handleCheckBox} type="checkbox" className="hidden" />
      </label>

      <p className={`w-full ${isChecked && "line-through opacity-60"}`}>
        {task}
      </p>

      <button className="opacity-60 hover:text-red-500 hover:opacity-100">
        <Trash size={20} />
      </button>
    </div>
  );
}
