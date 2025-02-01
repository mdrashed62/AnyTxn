import one from '../../assets/111.png';
import two from '../../assets/22.png';
import three from '../../assets/33.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';
import six from '../../assets/6.png';
import seven from '../../assets/7.png';
import eight from '../../assets/8.png';
import nine from '../../assets/9.png';
import ten from '../../assets/10.png';
import eleven from '../../assets/11.png';
import twelve from '../../assets/9.png';
import thirteen from '../../assets/13.png';
import fourteen from '../../assets/14.png';
import fifteen from '../../assets/15.png';

const logos = [
  one, two, three, four, five,
  six, seven, eight, nine, ten,
  eleven, twelve, thirteen, fourteen, fifteen
];

const Sponsored = () => {
  return (
    <div className='bg-white'>
        <div className=" max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">Our Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Sponsor ${index + 1}`} className="w-32 md:w-36 lg:w-40 object-contain"/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Sponsored;
