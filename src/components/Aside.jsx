// import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
// import { JakeImg } from "../assets/jake.jpg";
const Aside = () => {
  return (
    <aside className="w-1/4 border-l-2 border-black">
      <div className="flex flex-col pt-5 pl-3">
        <h2 className="mt-5 font-bold text-3xl">Welcome to the demo!</h2>
        <div className="p-1 mr-3 mt-[20px]">
          content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magni iste fugit sit rerum voluptatem quisquam tempore mollitia earum
          nobis et, voluptatibus numquam quas officia accusamus aut voluptas!
          Voluptas, deleniti culpa.
        </div>
        <div>
          {/* <img src={JakeImg} alt="" className="w-[100px] h-[200px]" /> */}
        </div>
        <div className="mt-[150px]">
          <h2 className="underline text-2xl font-bold">Categories</h2>
          <ul>
            <li>cat 1</li>
            <li>cat 2</li>
            <li>cat 3</li>
            <li>cat 4</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
