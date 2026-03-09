function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <div className="flex items-center justify-between bg-slate-900 text-white p-4">
        <div className="font-bold">Logo</div>
        <div className="flex gap-4">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6 text-center font-semibold text-3xl sm:text-2xl md:text-xl">
        <div className="bg-slate-500 p-4 rounded">Feature one</div>
        <div className="bg-slate-500 p-4 rounded">Feature two</div>
        <div className="bg-slate-500 p-4 rounded">Feature three</div>
        <div className="bg-slate-500 p-4 rounded">Feature four</div>
        <div className="bg-slate-500 p-4 rounded">Feature five</div>
        <div className="bg-slate-500 p-4 rounded">Feature six</div>
      </div>
    </div>
  );
}

export default App;
