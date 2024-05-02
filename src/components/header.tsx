import toDoIcon from "../assets/to-do-icon.png";

export function Header() {
  return (
    <header className="flex bg-slate-900 h-[200px] items-center justify-center gap-4">
      <img src={toDoIcon} alt="To Do Icon" className="size-9" />
      <h1 className="text-blue-500 font-extrabold text-5xl">
        2<span className="text-blue-700">do</span>
      </h1>
    </header>
  );
}
