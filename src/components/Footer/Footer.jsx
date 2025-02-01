import { FaArrowRight } from "react-icons/fa";
import footerImg from "../../assets/WaveLinesDesktop3.svg";
import footerImg2 from "../../assets/WaveLinesDesktop2.svg";
import footerImg3 from "../../assets/WaveLinesMobile2.svg";
import footerImg4 from "../../assets/2.svg"
import footerImg5 from "../../assets/3.svg"
import footerLogo from "../../assets/navLogo.svg";

export default function Footer() {
  return (
    <div className="relative w-full">
      {/* Angled White Section */}
      <div className="w-1/2  h-28 bg-white absolute top-2 right-0 z-50 transform skew-y-8 origin-bottom-left"></div>
      <div className="w-1/4  h-38 bg-white absolute top-0 right-0 z-50 transform skew-y-8 origin-bottom-left"></div>
      <div className="w-full h-[102px] bg-white absolute top-0 left-0 transform z-10 skew-y-8 origin-bottom-left"></div>
      <div className="w-full h-24 bg-white absolute top-0 left-0 z-10"></div>
      <div className="w-3/4 h-[120px]  bg-white absolute top-0  right-0 transform z-10 skew-y-8 origin-bottom-left"></div>

      {/* Angled Top Section */}
      <div className="relative bg-[#0663CD] text-white h-[550px] px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-80"></div>
          <img
            src={footerImg4}
            alt="pattern"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          />
          <img
            src={footerImg5}
            alt="pattern"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          />
          <img
            src={footerImg}
            alt="pattern"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          />
          <img
            src={footerImg2}
            alt="pattern"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          />
          <img
            src={footerImg3}
            alt="pattern"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          />
          
        </div>
        <div className="absolute max-w-6xl mx-auto bottom-28 space-y-6 left-16">
          <h2 className="text-5xl font-bold">Legacy no longer</h2>
          <p className="mt-2 text-lg">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <button className="mt-6 px-10 py-4 bg-[#FE8B53] text-white font-bold text-lg flex items-center gap-2 rounded-md shadow-xl">
            Contact Us <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#002045] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className=""><img src={footerLogo} alt="" /></div>
          <div className="flex space-x-6 text-[#00E9EA] font-semibold text-xl">
            <a href="#" className="hover:text-white">
              Our Solutions
            </a>
            <a href="#" className="hover:text-white">
              AnyCaaS
            </a>
            <a href="#" className="hover:text-white">
              AnyBaaS
            </a>
            <a href="#" className="hover:text-white">
              AnyPaaS
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#00152D]">
        <div className=" text-[#1F80F0] font-bold text-sm text-center py-8 max-w-6xl mx-auto flex items-center justify-between">
          <div>&copy; 2023 All rights reserved. Any Technology Pte Ltd.</div>
          <div>
            <a href="#" className=" hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
