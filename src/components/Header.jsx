import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const Header = () => {
  return (
    <header className="flex md:items-end items-center bg-teal md:w-72 w-full md:h-full md:fixed relative md:left-0 top-0 border-black md:border-r-2 border-b-2">
      <div className="pl-2 md:pb-[100px] cursor-pointer">
        <h1 className="md:text-4xl text-2xl">The Running Quail</h1>
        <div className="md:text-2xl text-lg pl-1 md:py-3 justify-between">
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="flex items justify-between w-1/3 md:text-3xl text-lg pb-1 py-1">
          <div className="hover:text-coral">
            <FiFacebook />
          </div>
          <div className="mx-1 hover:text-coral">
            <FiInstagram />
          </div>
          <div className="hover:text-coral">
            <FiTwitter />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
