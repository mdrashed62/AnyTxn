import { FaAngleRight } from "react-icons/fa";
import bannerImg from "../../assets/bannerImg.jpg";
import photo3 from "../../assets/WaveLinesDesktop2.svg";
import photo4 from "../../assets/WaveLinesDesktop3.svg";
import photo5 from "../../assets/WaveLinesMobile2.svg";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Banner = () => {
  return (
    <div className="relative w-full h-[580px] overflow-hidden">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <img
          className="w-full h-full object-cover"
          src={bannerImg}
          alt="Banner"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F5CD8] via-transparent via-70% to-[#0F5CD8] opacity-95"></div>
      <div className="absolute inset-0 flex items-center px-10 lg:px-20">
        <div className="text-white max-w-xl space-y-6 z-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Embrace the <br /> future of finance
          </h1>
          <p className="text-lg font-semibold">
            Reimagine financial services with AnyTech’s open platform,
            distributed
            <br /> banking solution that powers transformation
          </p>
          <button className="lg:py-4 py-2 flex justify-center items-center gap-2 lg:px-8 px-4 font-bold rounded shadow-lg bg-[#FE8B53] group overflow-hidden relative">
            <span className="group-hover:-translate-x-1 transition-transform duration-300 ease-in-out">
              Reach Out to Us
            </span>
            <FaAngleRight className="group-hover:translate-x-1 pt-1 transition-transform duration-300 ease-in-out" />
          </button>
        </div>
      </div>
      <img className="absolute top-0 left-0" src={photo4} alt="" />
      <img className="absolute top-0 left-0" src={photo5} alt="" />
      <img className="absolute top-0 right-0" src={photo3} alt="" />
    </div>
  );
};

export default Banner;
