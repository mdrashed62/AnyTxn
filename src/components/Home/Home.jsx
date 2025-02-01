import CounterSection from "../Counter/CounterSection";
import Future from "../Features/Future";
import Finance from "../Finance/Finance";
import Philosophy from "../Philosophy/Philosophy";

const Home = () => {
  return (
    <div>
      <Finance />
      <Philosophy />
      <Future />
      <CounterSection />
    </div>
  );
};

export default Home;
