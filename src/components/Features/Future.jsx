import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/futureImg1.jpg";
import img2 from "../../assets/futureImg2.jpg";
import img3 from "../../assets/futureImg3.png";
import img4 from "../../assets/futureImg4.jpg";

const tabs = [
  "Customer focused",
  "Agile and adaptable",
  "Compliance ready",
  "Secure and safe",
];

const content = {
  "Customer focused": {
    title: "CUSTOMER FOCUSED",
    subtitle: "Purpose-built financial services",
    description1:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image: img1,
  },
  "Agile and adaptable": {
    title: "AGILE AND ADAPTABLE",
    subtitle: "Agile and adaptable for growth",
    description1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: img2,
  },
  "Compliance ready": {
    title: "COMPLIANCE READY",
    subtitle: "Manage compliance with ease",
    description1:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management-through real-time risk monitoring solutions powered by AI and machine learning.",
    description2:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image: img3,
  },
  "Secure and safe": {
    title: "SECURE AND SAFE",
    subtitle: "Highly secure and safe",
    description1:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    description2:
      "Join over 40 esteemed FIs, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image: img4,
  },
};

const Future = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4 py-6">
        <h1 className="text-[#1F80F0] font-bold text-xs sm:text-sm">TECHNOLOGY BUILT FOR YOU</h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-black">The future of finance</h1>

        {/* Tabs */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full transition-all ${
                activeTab === tab
                  ? "bg-[#B9D9FF] text-[#1F80F0] font-bold"
                  : "text-[#1F80F0] font-bold"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="relative mt-6 p-4 sm:p-6 bg-white rounded-lg flex flex-col md:flex-row items-center gap-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 h-auto md:h-[400px] text-left space-y-4"
            >
              <h2 className="text-lg sm:text-xl text-[#1F80F0] font-bold">{content[activeTab].title}</h2>
              <h3
                className="text-3xl sm:text-5xl font-bold text-[#071F3B] mt-2 leading-tight sm:leading-[4rem]"
              >
                {content[activeTab].subtitle}
              </h3>
              <p className="text-[#154071] font-bold mt-2 leading-relaxed">{content[activeTab].description1}</p>
              <p className="text-gray-700 mt-2 leading-relaxed">{content[activeTab].description2}</p>
            </motion.div>

            <motion.img
              key={`img-${activeTab}`}
              src={content[activeTab].image}
              alt={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 rounded-lg h-auto md:h-[400px] object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Future;
