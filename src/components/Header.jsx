import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const Header = () => {
  return (
    <header className="flex md:items-end items-center bg-teal fixed right-0 h-screen w-1/4 border-l-2 border-black">
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
