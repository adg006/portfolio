import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="" className="w-36 mx-auto mb-2" />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          test@test.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 William, ALl Rights Reserved.</p>
        <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0 ">
          <li>
            <a href="#" taget="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="#" taget="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" taget="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
