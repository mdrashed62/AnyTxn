import './style.css'; 
import financeSectionImg from "../../assets/FinanceSectionImg.png";
import logo1 from "../../assets/logoC.svg";
import logo2 from "../../assets/logoM.svg";
import logo3 from "../../assets/homeLogo.svg";

const Finance = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto lg:py-10 flex flex-col-reverse md:flex-row items-center justify-between px-4">
        <div className="md:w-1/2 text-left space-y-6">
          <p className="text-blue-600 font-semibold lg:mt-1 mt-10 uppercase">
            Powering the Future of Finance
          </p>
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mt-6">
            Uncovering new <br /> ways to delight <br /> customers
          </h2>
          <p className="text-gray-700 mt-10 font-medium">
            AnyTech is revolutionizing financial technology by introducing
            innovative and real-time transaction account processing capabilities,
            specifically designed for retail financial services.
          </p>
          <p className="text-gray-600 mt-8">
            Our modern approach surpasses traditional banking and card processing
            systems, empowering you with the most advanced technology for lasting
            success.
          </p>
        </div>

        <div className="relative md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={financeSectionImg}
            alt="Finance Section"
            className="w-11/12 md:w-4/5 shadow-lg pt-4"
          />

          <img
            src={logo1}
            alt="Logo 1"
            className="absolute lg:top-[150px] top-[80px] lg:left-5 left-1 lg:w-20 lg:h-20 w-12 h-12 bg-white p-2 rounded-full shadow-md bounceInPlace"
          />
          <img
            src={logo2}
            alt="Logo 2"
            className="absolute top-[150px] lg:top-[250px] lg:left-[150px] left-[60px] lg:w-24 lg:h-24 w-16 h-16 bg-white p-2 rounded-full shadow-md bounceInPlace"
          />
          <img
            src={logo3}
            alt="Logo 3"
            className="absolute lg:top-16 lg:right-1 top-10 right-0 lg:w-28 lg:h-28 w-20 h-20 bg-white p-2 rounded-full shadow-md bounceInPlace"
          />
        </div>
      </div>
    </div>
  );
};

export default Finance;
