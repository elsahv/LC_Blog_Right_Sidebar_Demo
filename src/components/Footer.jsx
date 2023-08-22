const today = new Date();

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 w-full border-t-2 border-black">
      <div className="flex justify-center">
        <span className="text-black py-3">
          Copyright &copy; {today.getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
