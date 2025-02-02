import { FaAngleRight } from "react-icons/fa";
import bannerImg from "../../assets/bannerImg.jpg";
import photo3 from "../../assets/WaveLinesDesktop2.svg";
import photo4 from "../../assets/WaveLinesDesktop3.svg";
import photo5 from "../../assets/WaveLinesMobile2.svg";
import '../Home/style.css'


const Banner = () => {
  return (
    <div className="relative w-full h-[580px] overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={bannerImg}
        alt="Banner"
      />

      {/* Overlay Content */}
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
          <button className="py-4 flex justify-center items-center gap-4 px-8 font-bold rounded shadow-lg bg-[#FE8B53]">
            Reach Out to Us <FaAngleRight />
          </button>
        </div>
      </div>

      <img
        className="absolute top-0 left-0"
        src={photo4}
        alt=""
      />

      <img
        className="absolute top-0 left-0"
        src={photo5}
        alt=""
      />

      <img
        className="absolute top-0 right-0"
        src={photo3}
        alt=""
      />
    </div>
  );
};

export default Banner;
