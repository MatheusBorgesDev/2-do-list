import { Check, Trash } from 'lucide-react';

interface ToDoItemProps {
	index: number;
	task: string;
	isChecked: boolean;
	onDeleteTask: (task: string) => void;
	onCheckTask: (index: number, isChecked: boolean) => void;
}

export function ToDoItem({
	index,
	task,
	isChecked,
	onDeleteTask: onDeleteTask,
	onCheckTask,
}: ToDoItemProps) {
	function handleCheckBox() {
		onCheckTask(index, !isChecked);
	}

	function handleRemoveTask() {
		onDeleteTask(task);
	}

	return (
		<div className="flex items-center p-4 rounded-md gap-3 bg-slate-700">
			<label
				className={`flex items-center h-5 w-5 border-2 text-transparent border-blue-500 checked:bg-green-500 rounded-full ${
					isChecked && 'bg-blue-500 text-white'
				}`}
			>
				<Check />
				<input onClick={handleCheckBox} type="checkbox" className="hidden" />
			</label>

			<p className={`w-full ${isChecked && 'line-through opacity-60'}`}>
				{task}
			</p>

			<button
				onClick={handleRemoveTask}
				className="opacity-60 hover:text-red-500 hover:opacity-100"
			>
				<Trash size={20} />
			</button>
		</div>
	);
}
