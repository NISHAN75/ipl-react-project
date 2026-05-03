import headerlogo from '../../assets/image/header-logo.png';

const Navbar = () => {
  const navOptions = (
    <>
      {/* Home Link with active style */}
      <li>
        <a className="relative group text-[var(--primary-color)] font-bold pb-1 font-roboto">
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[var(--secondary-color)]"></span>
        </a>
      </li>

      {/* Other Links with sliding hover effect */}
      <li>
        <a className="relative group text-gray-500 hover:text-[var(--primary-color)] transition-colors duration-300 pb-1 font-roboto">
          Gallery
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>

      <li>
        <a className="relative group text-gray-500 hover:text-[var(--primary-color)] transition-colors duration-300 pb-1 font-roboto">
          Leadership
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[var(--primary-color)] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[var(--white)] shadow-lg sticky top-0 z-50">
      <div className="container px-5 py-0 mx-auto">
        <div className="flex items-center justify-between w-full">
          
          {/* Navbar Start: Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden hover:bg-red-50 p-0 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-[var(--primary-color)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-base-100 rounded-xl w-52 gap-2"
              >
                {navOptions}
              </ul>
            </div>
            
            <a className="cursor-pointer rounded-full border-4 border-[#FF9800]">
              <img 
                src={headerlogo} 
                alt="MSES Logo" 
                className="h-[80px] w-[80px] md:h-[100px] md:w-[100px]" 
              />
            </a>
          </div>

          {/* Navbar Center: Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal px-1 gap-8">
              {navOptions}
            </ul>
          </div>

          {/* Navbar End: Join Button (Optional matching style) */}
          <div className="hidden md:block">
            <button className="btn bg-[var(--primary-color)] hover:bg-[var(--neutral-color)] text-white border-none px-6 rounded-full font-roboto capitalize transition-all">
              Join Community
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;