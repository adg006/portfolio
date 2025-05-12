import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenyRef = useRef();

  const openMenu = () => {
    sideMenyRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenyRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="Background image"
          className="w-full"
        />
      </div>

      <nav
        className={`flex items-center justify-between w-full px-5 lg:px-8 xl:px-[8%] py-4 fixed z-50 ${
          isScroll && "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll || "bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li>
            <a href="#top">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#work">Work</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="Mode changer"
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="Arrow icon" />
          </a>

          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt="Menu icon" className="w-6" />
          </button>
        </div>

        {/* Mobile menu */}

        <ul
          ref={sideMenyRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>

          <li>
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
