import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/b.jpg";
import img2 from "../../assets/eventBG.jpeg";
// import img3 from "../../assets/fixedImg.jpg";


const tabs = [
  "Customer focused",
  "Agile and adaptable",
  "Compliance ready",
  "Secure and safe",
];

const content = {
  "Customer focused": {
    title: "AGILE AND ADAPTABLE",
    subtitle: "Agile and adaptable for growth",
    description1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: img1,
  },
  "Agile and adaptable": {
    title: "AGILE AND",
    subtitle: "Agile and adaptable for growth",
    description1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: img2,
  },
  "Compliance ready": {
    title: "AND ADAPTABLE",
    subtitle: "Agile and adaptable for growth",
    description1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: img1,
  },
  "Secure and safe": {
    title: "ADAPTABLE",
    subtitle: "Agile and adaptable for growth",
    description1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image: img2,
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
    <div className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-4 p-6">
        <h1 className="text-[#1F80F0] font-bold text-sm">TECHNOLOGY BUILT FOR YOU</h1>
        <h1 className="text-4xl font-bold text-black">The future of finance</h1>

        {/* Tabs */}
        <div className="flex gap-10 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-3 rounded-4xl transition-all ${
                activeTab === tab ? "bg-[#B9D9FF] text-[#1F80F0] font-bold" : "text-[#1F80F0] font-bold"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content + Image with Animation */}
        <div className="relative mt-6 p-6 bg-white shadow-lg rounded-lg flex items-center gap-6 overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Text Section */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-left w-2/3"
            >
              <h2 className="text-xl font-semibold text-blue-800">{content[activeTab].title}</h2>
              <h3 className="text-lg font-bold text-black mt-2">{content[activeTab].subtitle}</h3>
              <p className="text-gray-700 mt-2">{content[activeTab].description1}</p>
              <p className="text-gray-700 mt-2">{content[activeTab].description2}</p>
            </motion.div>

            {/* Image Section */}
            <motion.img
              key={`img-${activeTab}`}
              src={content[activeTab].image}
              alt={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-1/2 rounded-lg"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Future;
