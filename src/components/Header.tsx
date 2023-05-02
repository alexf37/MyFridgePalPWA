const Header = () => {
  return (
    <>
      <div className="z-100 pt-safe flex w-full shrink-0 rounded-b-xl bg-blue-400 text-white shadow-md">
        <div className="flex w-full items-center justify-between px-8 py-6">
          <div>
            <h1 className="text-4xl font-bold">Welcome,</h1>
            <h3 className="text-2xl font-semibold text-gray-100">
              Alex Foster
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
