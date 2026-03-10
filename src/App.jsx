import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState("light");
  return (
    <div
      className={`${isDarkMode} min-h-screen  text-slate-900 dark:bg-slate-900 dark:text-white`}
    >
      {/* Navigation */}
      <div className="flex items-center justify-between p-4">
        <div className="font-bold">Logo</div>
        {/* Navigation desktop */}
        <div className="hidden sm:flex gap-4">
          <button
            className="text-xl cursor-pointer hidden sm:block"
            onClick={() =>
              setIsDarkMode(isDarkMode === "light" ? "dark" : "light")
            }
          >
            {isDarkMode === "light" ? "🌙" : "☀️"}
          </button>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <button
          className="text-xl cursor-pointer sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>
      </div>
      {/* Navigation mobile */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 sm:hidden">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <button
            className="text-xl cursor-pointer"
            onClick={() =>
              setIsDarkMode(isDarkMode === "light" ? "dark" : "light")
            }
          >
            {isDarkMode === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 dark:bg-slate-900 text-white dark:text-white p-6 gap-6 text-center font-semibold text-3xl sm:text-2xl md:text-xl">
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all">
          Feature one
        </div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all">
          Feature two
        </div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all">
          Feature three
        </div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all">
          Feature four
        </div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all">
          Feature five
        </div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all">
          Feature six
        </div>
      </div>
    </div>
  );
}

export default App;
