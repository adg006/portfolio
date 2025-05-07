import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-5 lg:px-8 xl:px-[8%] py-4 fixed z-50">
      <a href="#top">
        <Image
          src={assets.logo}
          className="w-28 cursor-pointer mr-14"
          alt="logo"
        />
      </a>

      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
        <li>
          <a href="#top" className="font-Ovo">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="font-Ovo">
            About
          </a>
        </li>

        <li>
          <a href="#services" className="font-Ovo">
            Services
          </a>
        </li>

        <li>
          <a href="#work" className="font-Ovo">
            Work
          </a>
        </li>

        <li>
          <a href="#contact" className="font-Ovo">
            Contact
          </a>
        </li>
      </ul>

      <div>
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray rounded-full ml-4"
        >
          Contact{" "}
          <Image src={assets.arrow_icon} className="w-3" alt="Arrow icon" />
        </a>
      </div>
    </nav>
  );
}
