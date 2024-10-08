import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Using react-icons for menu icons

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle navigation popup
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close navigation popup
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="relative">
      {/* Main Header */}
      <div className="grid grid-cols-2 items-center p-4">
        <div>
          {/* Left side logo */}
          <img src="" className="h-[80px] w-[80px] md:h-[100px] md:w-[100px]" alt="Logo" />
        </div>

        {/* Right side navigation and button */}
        <div className="hidden md:flex justify-end items-center gap-10">
          <ul className="flex gap-10">
            <Link to="/" onClick={closeNav}><li>Home</li></Link>
            <Link to="/about" onClick={closeNav}><li>About</li></Link>
            <Link to="/portfolio" onClick={closeNav}><li>Portfolio</li></Link>
            <Link to="/contact" onClick={closeNav}><li>Contact</li></Link>
          </ul>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-500 ease-in-out text-sm md:text-base hover:text-[14px]">
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex md:hidden justify-end">
          <button onClick={toggleNav}>
            <FaBars className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile Popup Navigation */}
      {isNavOpen && (
        <>
          {/* Background overlay to close the popup */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={closeNav}
          ></div>

          {/* Sliding popup navigation */}
          <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white p-6 shadow-lg z-20 transform translate-x-0 transition-transform duration-300 ease-in-out">
            <button onClick={closeNav} className="text-right">
              <FaTimes className="text-2xl" />
            </button>
            <ul className="flex flex-col gap-8 mt-10">
              <Link to="/" onClick={closeNav}><li>Home</li></Link>
              <Link to="/about" onClick={closeNav}><li>About</li></Link>
              <Link to="/portfolio" onClick={closeNav}><li>Portfolio</li></Link>
              <Link to="/contact" onClick={closeNav}><li>Contact</li></Link>
              <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-500 ease-in-out text-sm md:text-base hover:text-[14px]">
            Hire Me
          </button>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
