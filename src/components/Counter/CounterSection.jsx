import CountUp from 'react-countup';
import { useEffect, useState } from 'react';


const CounterSection = () => {
  const [key, setKey] = useState(0);

  // Reset counter on reload
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, []);

  return (
    <div className='bg-white'>
        <div className="text-center max-w-7xl mx-auto py-10">
      <h3 className="text-sm font-semibold text-blue-500 uppercase mb-4">Trusted by the Best</h3>
      <div className="flex justify-center gap-20 space-x-10 text-4xl font-bold text-blue-600">
        <div className="text-center text-8xl">
          <span className="text-blue-700">&gt;</span>
          <CountUp key={key} start={0} end={20} duration={2} />
          <p className="text-sm font-normal text-gray-600">Years of Experience</p>
        </div>
        <div className="text-center text-8xl">
          <CountUp key={key} start={0} end={40} duration={2} />+
          <p className="text-sm font-normal text-gray-600">Financial Institutions</p>
        </div>
        <div className="text-center text-8xl">
          <span className="text-blue-700">&gt;</span>
          <CountUp key={key} start={0} end={200} duration={2} />m
          <p className="text-sm font-normal text-gray-600">Customers Each</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CounterSection;