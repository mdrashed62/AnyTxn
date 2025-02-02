import CounterSection from "../Counter/CounterSection";
import Future from "../Features/Future";
import Finance from "../Finance/Finance";
import Philosophy from "../Philosophy/Philosophy";
import Sponsored from "../Sponsored/Sponsored";

const Home = () => {
  return (
    <div>
      {/* <Finance />*/}
      <Philosophy />
      <Future />
      <CounterSection />
      <Sponsored /> 
    </div>
  );
};

export default Home;
