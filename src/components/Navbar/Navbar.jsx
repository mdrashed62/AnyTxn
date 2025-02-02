import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleRight, FaGlobe } from "react-icons/fa";
import { IoIosArrowDown } from 'react-icons/io';
import navLogo from "../../assets/navLogo.svg";
import newNavLogo from "../../assets/2ndNavLogo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 500) {
      setScrolled(true);
      setScrollingUp(currentScrollY < lastScrollY);
    } else {
      setScrolled(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar for scrolled view */}
      <div className={`absolute top-0 left-0 w-full z-50 ${scrolled && !scrollingUp ? "hidden" : ""}`}>
        <div className="navbar px-4 py-2 pr-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#1154C1] text-white rounded-box z-10 mt-3 w-52 p-2 shadow flex flex-col gap-2">
                <li className="dropdown dropdown-hover">
                  <p tabIndex={0} className="text-[14px]" role="button">Solutions</p>
                  <ul className="dropdown-content menu bg-white text-blue-900 rounded-box z-10 w-52 shadow-sm flex flex-col gap-1">
                    <li>AnyCaaS</li>
                    <li>AnyBaaS</li>
                    <li>AnyPaaS</li>
                  </ul>
                </li>
                <li>Services</li>
                <li>About Us</li>
                <li className="dropdown dropdown-hover border border-white rounded-3xl">
                  <p className="text-white text-lg" tabIndex={0} role="button" onClick={toggleDropdown}>
                    <FaGlobe /> EN <IoIosArrowDown />
                  </p>
                  {isOpen && (
                    <ul className="dropdown-content menu bg-white text-black space-y-2 rounded-box z-10 w-52 shadow-sm flex flex-col">
                      <li className="px-4 py-2 flex justify-between items-center">
                        EN (English)
                        <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                      </li>
                      <li className="px-4 py-2 flex justify-between items-center">
                        TH (Thai)
                        <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                      </li>
                      <li className="px-4 py-2 flex justify-between items-center">
                        ID (Bahasa Indonesia)
                        <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                      </li>
                      <li className="px-4 py-2 flex justify-between items-center">
                        TW (Traditional Chinese)
                        <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <button>
              <img src={navLogo} alt="Logo" />
            </button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-4 space-x-3 items-center">
              <li className="dropdown bg-none dropdown-hover">
                <p className="text-white text-lg" tabIndex={0} role="button">
                  Solutions <FaAngleDown />
                </p>
                <ul className="dropdown-content opacity-50 menu bg-white text-black space-y-5 text-lg rounded-box z-10 w-52 pt-2 shadow-sm flex flex-col">
                  <li>AnyCaaS</li>
                  <li>AnyBaaS</li>
                  <li>AnyPaaS</li>
                </ul>
              </li>
              <li className="text-white text-lg">Services</li>
              <li className="text-white text-lg">About Us</li>
              <li className="dropdown dropdown-hover border border-white rounded-3xl">
                <p className="text-white text-lg" tabIndex={0} role="button" onClick={toggleDropdown}>
                  <FaGlobe /> EN <IoIosArrowDown />
                </p>
                {isOpen && (
                  <ul className="dropdown-content menu bg-white text-black space-y-2 rounded-box z-10 w-52 shadow-sm flex flex-col">
                    <li className="px-4 py-2 flex justify-between items-center">
                      EN (English)
                      <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                    </li>
                    <li className="px-4 py-2 flex justify-between items-center">
                      TH (Thai)
                      <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                    </li>
                    <li className="px-4 py-2 flex justify-between items-center">
                      ID (Bahasa Indonesia)
                      <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                    </li>
                    <li className="px-4 py-2 flex justify-between items-center">
                      TW (Traditional Chinese)
                      <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button className="border hidden md:flex justify-center items-center gap-3 border-white hover:bg-white hover:text-blue-500 rounded-sm py-3 px-8 font-bold">
              Contact Us <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      {/* Navbar when scrolled up */}
      {scrolled && scrollingUp && (
        <div className="fixed px-8 hidden md:block top-0 left-0 w-full lg:py-4 z-100 bg-white shadow-lg">
          <div className="navbar pr-8">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow flex flex-col gap-2">
                  <li className="dropdown bg-none dropdown-hover">
                    <p tabIndex={0} role="button">Solutions</p>
                    <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 shadow-sm flex flex-col gap-1">
                      <li>AnyCaaS</li>
                      <li>AnyBaaS</li>
                      <li>AnyPaaS</li>
                    </ul>
                  </li>
                  <li>Services</li>
                  <li>About Us</li>
                </ul>
              </div>
              <button>
                <img src={newNavLogo} alt="New Logo" />
              </button>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal space-x-4 px-1 flex gap-4 items-center">
                <li className="dropdown bg-none dropdown-hover">
                  <p className="text-[#1F80F0] text-lg" tabIndex={0} role="button">
                    Solutions <FaAngleDown />
                  </p>
                  <ul className="dropdown-content space-y-5 menu bg-white text-black text-lg rounded-box z-10 w-60 pt-2 shadow-sm flex flex-col gap-1">
                    <li>AnyCaaS</li>
                    <li>AnyBaaS</li>
                    <li>AnyPaaS</li>
                  </ul>
                </li>
                <li className="text-[#1F80F0] text-lg">Services</li>
                <li className="text-[#1F80F0] text-lg">About Us</li>
                <li className="dropdown dropdown-hover border border-blue-600 rounded-3xl">
                  <p className="text-[#1F80F0] text-lg" tabIndex={0} role="button" onClick={toggleDropdown}>
                    <FaGlobe /> EN <IoIosArrowDown />
                  </p>
                  {isOpen && (
                    <ul className="dropdown-content menu bg-white text-blue-600 space-y-2 rounded-box z-10 w-52 shadow-sm flex flex-col">
                      <li className="px-4 py-2 flex justify-between items-center">
                        EN (English)
                        <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                      </li>
                      <li className="px-4 py-2 flex justify-between items-center">
                        TH (Thai)
                        <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                      </li>
                      <li className="px-4 py-2 flex justify-between items-center">
                        ID (Bahasa Indonesia)
                        <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                      </li>
                      <li className="px-4 py-2 flex justify-between items-center">
                        TW (Traditional Chinese)
                        <div className="border-b border-gray-300 opacity-50 w-full mt-1"></div>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <button className="border flex justify-center items-center gap-3 bg-[#FE8B53] text-white rounded-sm py-3 px-7 font-bold">
                Contact Us <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
