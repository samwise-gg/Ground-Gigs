import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import Contact from "./Contact";

import { useEffect, useState, useRef } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pageTop, setPageTop] = useState(true);

  const [isPinned, setIsPinned] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Final visibility logic
  const isContactVisible = isPinned || isHovering;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    // Slight delay allows cursor to enter panel before hiding
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 150);
  };

  useEffect(() => {
    window.scrollY > 0 ? setPageTop(false) : setPageTop(true);
    clearTimeout(timeoutRef.current);
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setIsVisible(false); // scroll down → hide
      } else {
        setIsVisible(true); // scroll up → show
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isPinned &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsPinned(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPinned]);

  return (
    <header
      className={` fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        ${
          isVisible
            ? "bg-[#0a103d] border-b border-blue-600 opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6"
        }
        ${
          pageTop
            ? "bg-[#ffffff00] translate-y-0 border-none"
            : "bg-[#000946] border-b border-blue-600 -translate-y-6"
        }
        bg-background text-white shadow-md`}
    >
      <div className=' p-4 container mx-auto flex justify-between items-center'>
      <div className=' p-4 container m-auto flex justify-start items-stretch'>
        <Link to='/'>
          <img src={logo} alt='Ground Gigs' className='h-[4rem]' />
        </Link>
        <Link to='/services'>
          <div className='h-[4rem] ml-[15px] pt-[30%] text-[#0563ba] font-bold'>Services</div>
        </Link>
        <Link to='/about'>
          <div className='h-[4rem] ml-[15px] pt-[40%] text-[#0563ba] font-bold'>About</div>
        </Link>
        </div>
        <nav className='space-x-4 text-sm'>
          <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='relative'
          >
            <button
              onClick={() => setIsPinned((prev) => !prev)}
              className='hover:text-accent transition flex items-baseline'
            >
              Contact &nbsp; &nbsp;
              <p className='text-lg'>
                <i class='fa fa-envelope-o' aria-hidden='true'></i>
              </p>
            </button>

            {isContactVisible && (
              <div className='absolute right-0 mt-3 w-[350px] bg-background bg-[#0b0f19] border border-zinc-700 p-4 rounded-xl shadow-xl z-50'>
                <Contact />
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
