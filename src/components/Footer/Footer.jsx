import { FaArrowRight } from "react-icons/fa";
import footerImg2 from "../../assets/WaveLinesDesktop2.svg";
import footerImg3 from "../../assets/WaveLinesMobile2.svg";
import footerImg4 from "../../assets/2.svg";
import footerImg5 from "../../assets/3.svg";
import footerLogo from "../../assets/navLogo.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../Home/variants";

export default function Footer() {
  return (
    <div className="relative w-full">
      <div className="w-1/2  h-24 bg-white absolute top-2 right-0 z-50 transform skew-y-8 origin-bottom-left"></div>
      <div className="w-1/4  h-34 bg-white absolute top-0 right-0 z-50 transform skew-y-6 origin-bottom-left"></div>
      <div className="w-full h-[102px] bg-white absolute top-0 left-0 transform z-10 skew-y-8 origin-bottom-left"></div>
      <div className="w-full h-24 bg-white absolute top-0 left-0 z-10"></div>
      <div className="w-3/4 h-[120px]  bg-white absolute top-0  right-0 transform z-10 skew-y-8 origin-bottom-left"></div>
      <div className="w-full h-[120px]  bg-white absolute top-0  right-0 transform z-10 skew-y-8 origin-bottom-left"></div>

      <div className="relative bg-[#0663CD] text-white h-[600px] px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0663CD] to-blue-500 opacity-80"></div>
          <img
            src={footerImg4}
            alt="pattern"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          />
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src={footerImg5}
              alt="pattern"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
            />
          </motion.div>
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
        <div className="absolute bottom-28 space-y-6 lg:left-16">
          <h2 className="lg:text-5xl text-3xl font-bold">Legacy no longer</h2>
          <p className="mt-2 text-lg font-semibold">
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <button className="mt-4 sm:mt-6 px-6 sm:px-10 py-2 sm:py-3 lg:py-4 lg:w-2/5 md:w-2/5 w-2/3 bg-[#FE8B53] text-white font-bold text-lg flex justify-center items-center gap-2 rounded-md shadow-xl group">
            <span className="group-hover:-translate-x-1 transition-transform duration-300 ease-in-out">
              Contact Us
            </span>
            <FaArrowRight className="group-hover:translate-x-1 pt-1 transition-transform duration-300 ease-in-out" />
          </button>
        </div>
      </div>
      <div className="bg-[#002045] text-white py-12 px-6 sm:py-16 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <img src={footerLogo} alt="Footer Logo" className="w-32 sm:w-40" />
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-[#00E9EA] font-semibold text-lg sm:text-xl">
            {["Our Solutions", "AnyCaaS", "AnyBaaS", "AnyPaaS"].map(
              (item, index) => (
                <a key={index} href="#" className="hover:text-white">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#00152D] py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-[#1F80F0] font-bold text-sm">
          <div>&copy; 2023 All rights reserved. Any Technology Pte Ltd.</div>
          <a href="#" className="hover:text-white mt-2 sm:mt-0">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
