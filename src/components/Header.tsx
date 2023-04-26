import "../styles/global.css";

export function Header() {
  return (
    <div className="flex  justify-center sm:justify-end p-3 pr-10 space-x-3 border-2 border-b-neutral-800 text-stone-800 text-xl text-">
      <h1>About</h1>
      <h1>Skils</h1>
      <h1>Projects</h1>
      <h1>Contact</h1>
    </div>
  );
}
