import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import navLogo from "../../assets/navLogo.svg";

const Navbar = () => {
  return (
    <div className=" absolute top-3 left-0 w-full z-10">
      <div className="navbar shadow-lg pr-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow flex flex-col gap-2"
            >
              <li className="dropdown bg-none dropdown-hover">
                <p tabIndex={0} role="button">
                  Solutions
                </p>
                <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 shadow-sm flex flex-col gap-1">
                  <li>
                    <a>AnyCaaS</a>
                  </li>
                  <li>
                    <a>AnyBaaS</a>
                  </li>
                  <li>
                    <a>AnyPaaS</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <button>
            <img src={navLogo} alt="" />
          </button>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 items-center">
            <li className="dropdown bg-none dropdown-hover">
              <p tabIndex={0} role="button" className="">
                Solutions <FaAngleDown />
              </p>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 pt-2 shadow-sm flex flex-col gap-1">
                <li>
                  <a>AnyCaaS</a>
                </li>
                <li>
                  <a>AnyBaaS</a>
                </li>
                <li>
                  <a>AnyPaaS</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="border flex justify-center items-center gap-3 border-white hover:bg-white hover:text-blue-500 rounded-sm py-3 px-8 font-bold">
            Contact Us <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
