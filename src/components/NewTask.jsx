import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
    
  }

  function handleClick() {
    if(enteredTask.trim() === ''){
      return;
    }
    setEnteredTask("");
    onAdd(enteredTask);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handleChange}
      />

      <button
        className="text-stone-700 hover:text-stone-950 hover:bg-stone-700 rounded-sm"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
