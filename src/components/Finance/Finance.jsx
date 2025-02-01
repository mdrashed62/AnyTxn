import financeSectionImg from "../../assets/FinanceSectionImg.png";
import logo1 from "../../assets/logoC.svg";
import logo2 from "../../assets/logoM.svg";
import logo3 from "../../assets/homeLogo.svg";


const Finance = () => {
  return (
   <div className="bg-white">
     <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      <div className="md:w-1/2 text-left space-y-6">
        <p className="text-blue-600 font-semibold uppercase">
          Powering the Future of Finance
        </p>
        <h2 style={{ lineHeight: '4rem' }} className="text-3xl md:text-6xl font-bold text-gray-900 mt-6">
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

      <div className="relative md:w-1/2 md:mt-0 flex justify-center">
        <img
          src={financeSectionImg}
          alt="Finance Section"
          className="w-4/5 md:w-3/4 shadow-lg pt-4"
        />

        <img
          src={logo1}
          alt="Logo 1"
          className="absolute top-[150px] left-9 w-20 h-20 bg-white p-2 rounded-full shadow-md"
        />
        <img
          src={logo2}
          alt="Logo 2"
          className="absolute top-[250px] left-[150px] w-24 h-24 bg-white p-2 rounded-full shadow-md"
        />
        <img
          src={logo3}
          alt="Logo 3"
          className="absolute top-16 right-5 w-28 h-28 bg-white p-2 rounded-full shadow-md"
        />
      </div>
    </div>
   </div>
  );
};

export default Finance;
