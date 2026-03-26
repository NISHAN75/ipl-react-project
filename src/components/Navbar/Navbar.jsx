import dollarImg from "../../assets/coin.png";
import navTag from "../../assets/logo.png";
const Navbar = ({availableBalance}) => {
    return (
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px]" src={navTag} alt="..." />
          </a>
        </div>
        <div className="flex items-center font-bold">
          <span className="mr-1">{availableBalance}</span>
          <span className="mr-1">Crore</span>
          <img className="w-[20px] h-[20px]" src={dollarImg} alt="..."/>
        </div>
      </div>
    );
};

export default Navbar;