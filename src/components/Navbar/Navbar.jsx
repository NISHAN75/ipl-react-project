import dollarImg from "../../assets/coin.png";
import navTag from "../../assets/logo.png";
const Navbar = () => {
    return (
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px]" src={navTag} alt="..." />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-1">6000000000</span>
          <span className="mr-1">Coin</span>
          <img className="w-[20px] h-[20px]" src={dollarImg} alt="..."/>
        </div>
      </div>
    );
};

export default Navbar;