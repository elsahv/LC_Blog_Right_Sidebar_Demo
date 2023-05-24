const today = new Date();

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="flex justify-center">
        <span className="text-black">
          Copyright &copy; {today.getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
