const Header = () => {
  return (
    <header className="border-b-2 border-black bg-white relative top-0 z-10 w-[100%] h-[100px]">
      <nav className="h-[100%] grid grid-cols-2">
        <section className="flex justify-start items-end py-3 pl-1">
          <div id="logo" className="text-4xl font-bold ">
            Blog-Right-Sidebar-Demo
          </div>
        </section>
        <section className="flex justify-end items-end text-3xl py-3">
          <div className="mx-5">about</div>
          <div className="mx-5">contact</div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
