import "./index.css";

const Header = ({ label }) => {
  return (
    <div className="h-100 bg-white pt-2 font-jost text-black md:text-2xl">
      {label}
    </div>
  );
};

export default Header;
