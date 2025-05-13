import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";

export default function Services() {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">What I Offer</h4>

      <h2 className="text-center text-5xl">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I am a front end developer with over 10 years of experience. I have
        worked with companies like Microsoft, Tesla, and Apple.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />

            <h3 className="text-md font-semibold text-gray-600 leading-5 mt-5">
              {title}
            </h3>

            <p className="text-sm text-gray-600 leading-5 mt-5">
              {description}
            </p>

            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image src={assets.right_arrow} className="w-4" alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
