import line4 from "../../assets/Line4.svg";
import line1 from "../../assets/Line1.svg";
import line2 from "../../assets/arrow_only.png";
import line3 from "../../assets/line3_transparent.png";
import sm1 from "../../assets/smLogo1.png";
import sm2 from "../../assets/smLogo2.svg";
import sm3 from "../../assets/smLogo3.svg";

const Philosophy = () => {
  return (
    <div className="bg-white">
      <div className="py-12 lg:px-8 px-2 text-center max-w-7xl mx-auto">
        {/* Header */}
        <h4 className="text-blue-600 text-lg font-semibold">OUR PHILOSOPHY</h4>
        <h2 className="text-4xl font-bold text-[#0D1C3D] mt-2">
          Human-centred innovation
        </h2>

        {/* Main Diagram */}
        <div className="lg:mt-12 mt-6 flex flex-col md:flex-row items-center justify-center">
          {/* Left Box: AI */}
          <div className="lg:w-250px w-full bg-[#E6F4FF] lg:py-[125px] py-4 rounded-xl px-10">
            <div className="bg-white shadow-lg rounded-xl py-5 space-y-2">
              <h5 className="text-blue-900 font-bold text-[10px]">CORE TECH</h5>
              <h3 className="lg:text-2xl lg:w-[230px] mx-auto font-bold text-[#0D1C3D]">
                Artificial Intelligence
              </h3>
            </div>
            <p className="text-gray-500 mt-2 text-[12px]">
              Using AI/ML to upgrade legacy processes, reduce cost, and improve
              efficiency.
            </p>
          </div>
          <div className="lg:w-40">
            <img className="lg:w-40" src={line4} alt="" />
          </div>

          <div className="lg:w-3/4 relative py-12 rounded-xl flex flex-col lg:flex-row justify-between items-center bg-[#F0F9FF]">
            {/* Center: Blockchain with Arrows */}
            <div className=" flex flex-col items-center">
              <div className="absolute top-24 lg:left-[220px]">
                <img src={line2} alt="Arrow Right" className="w-24" />
              </div>
              <div className="absolute lg:top-[160px] left-[50px] lg:w-[200px]">
                <div className="bg-white shadow-xl rounded-xl py-6">
                  <h5 className="text-orange-500 font-bold text-[12px]">
                    MECHANISM
                  </h5>
                  <h3 className="text-xl font-bold text-[#0D1C3D]">
                    Blockchain
                  </h3>
                </div>

                <p className="text-gray-500 text-start text-[12px] mt-2">
                  Enhanced security by <br /> eliminating intermediaries.
                </p>
              </div>
              {/* Arrows */}
              <div className="absolute bottom-[80px] left-[220px]">
                <img src={line3} alt="Arrow Right" className="w-24" />
              </div>
            </div>

            {/* Right: Cloud & Data Boxes */}
            <div className="flex flex-col gap-6 pr-9">
              {/* Cloud */}
              <div className="flex items-center gap-6">
                <div className="bg-white shadow-xl rounded-xl lg:w-[200px] p-6 text-center">
                  <h5 className="text-green-500 font-semibold text-[12px]">
                    INFRASTRUCTURE
                  </h5>
                  <h3 className="text-xl font-bold text-[#0D1C3D]">Cloud</h3>
                </div>
                <p className="text-gray-500 text-[12px] text-start">
                  Scale resources <br /> easily on-demand.
                </p>
              </div>

              {/* Line between Cloud & Data */}
              <div className="flex justify-center lg:w-[200px]">
                <img src={line1} alt="Arrow Down" />
              </div>

              {/* Data */}
              <div className="flex items-center gap-6">
                <div className="bg-white shadow-xl rounded-xl p-6 lg:w-[200px] text-center">
                  <h5 className="text-blue-400 font-semibold text-[12px]">
                    RESOURCE
                  </h5>
                  <h3 className="text-xl font-bold text-[#0D1C3D]">Data</h3>
                </div>
                <p className="text-gray-500 text-[12px] text-start">
                  Valuable, actionable <br /> insights from mass <br /> data
                  sources.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Full-suite solutions */}
          <div className="bg-[#F8FCFF] shadow-lg rounded-xl p-6 flex flex-col items-start text-start">
            <div>
              <img src={sm3} alt="" />
            </div>
            <h3 className="text-2xl font-bold mt-4 text-[#0B305B]">
              Full-suite solutions
            </h3>
            <p className="mt-2 text-[#0B305B]">
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </div>

          {/* Simplify the complex */}
          <div className="bg-[#F8FCFF] shadow-lg rounded-xl p-6 flex flex-col items-start text-start">
            <img src={sm1} alt="" />
            <h3 className="text-2xl font-bold mt-4 text-[#0B305B]">
              Simplify the complex
            </h3>
            <p className=" mt-2 text-[#0B305B]">
              Simplify complex processes and optimize your financial operations
              by leveraging AI, Blockchain, Cloud Computing, and Big Data.
            </p>
          </div>

          {/* Cutting-edge tech */}
          <div className="bg-[#F8FCFF] shadow-lg rounded-xl p-6 flex flex-col items-start text-start">
            <img src={sm2} alt="" />
            <h3 className="text-2xl font-bold mt-4 text-[#0B305B]">
              Cutting-edge tech
            </h3>
            <p className="mt-2 text-[#0B305B]">
              We seamlessly combine cutting-edge technologies, resulting in an
              unparalleled fintech experience for financial institutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
