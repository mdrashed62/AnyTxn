import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CounterSection = () => {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setKey((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <div className="bg-white">
      <div ref={ref} className="text-center max-w-7xl mx-auto lg:py-24">
        <h3
          style={{ wordSpacing: "4px" }}
          className="font-bold text-[#0B66CE] uppercase mb-4"
        >
          Trusted by the Best
        </h3>
        <div className="flex justify-center flex-col lg:flex-row gap-20 space-x-10 text-4xl font-bold text-[#0B66CE]">
          <div className="text-center text-6xl lg:text-8xl">
            <span className="text-[#0B66CE]">&gt;</span>
            <CountUp
              key={key}
              start={0}
              end={20}
              duration={2}
              className="text-[#0B66CE]"
            />
            <p className="text-xl font-normal text-gray-600">
              Years of Experience
            </p>
          </div>
          <div className="text-center text-6xl lg:text-8xl">
            <CountUp
              key={key}
              start={0}
              end={40}
              duration={2}
              className="text-[#0B66CE]"
            />
            +
            <p className="text-xl font-normal text-gray-600">
              Financial Institutions
            </p>
          </div>
          <div className="text-center text-6xl lg:text-8xl">
            <span className="text-[#0B66CE]">&gt;</span>
            <CountUp
              key={key}
              start={0}
              end={200}
              duration={2}
              className="text-[#0B66CE]"
            />
            m<p className="text-xl font-normal text-gray-600">Customers Each</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
