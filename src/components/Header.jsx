import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-11/12 mx-auto max-w-6xl gap-6">
      <img src={logo} alt="logo" className="w-36" />

      <nav className="flex items-center gap-10 [&_a]:text-2xl">
        <div className="hidden sm:block sm:w-[206px] md:w-[306px] lg:w-[406px] h-12 border-2 border-primary rounded-full relative ">
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent w-full h-full absolute rounded-full pl-4 focus-within:outline-none placeholder:text-primary placeholder:font-medium"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center text-2xl">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>

        <a href="#" className="grid place-items-center sm:hidden">
          <ion-icon name="search-outline"></ion-icon>
        </a>
        <a href="#" className="grid place-items-center">
          <ion-icon name="person-outline"></ion-icon>
        </a>
        <a href="#" className="grid place-items-center">
          <ion-icon name="cart-outline"></ion-icon>
        </a>
      </nav>
    </header>
  );
};

export default Header;
