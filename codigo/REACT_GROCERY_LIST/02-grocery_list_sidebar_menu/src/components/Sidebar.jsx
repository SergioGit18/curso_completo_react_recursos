const Sidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-700 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Últimas Compras: </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-500 text-stone-200
        hover:bg-stone-400 hover:rounded-2xl hover:cursor-pointer
        transition-all duration-800 ease-in-out">+ Añadir Lista</button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default Sidebar;
