import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const Header = () => {
  return (
    <header className="flex items-end bg-teal w-72 h-full fixed left-0 border-black border-r-2">
      <div className="pl-2 pb-[100px] cursor-pointer">
        <h1 className="text-4xl">The Running Quail</h1>
        <div className="text-2xl pl-1 py-3 justify-between">
          <div>About</div>
          <div>Contact</div>
        </div>
        <div className="flex items justify-between w-1/3 text-3xl">
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
