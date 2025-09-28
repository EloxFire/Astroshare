import { Features } from '../components/sections/home/Features';
import { Landing } from '../components/sections/home/Landing';
import { LandingOverview } from '../components/sections/home/LandingOverview';
import { Reviews } from '../components/sections/home/Reviews';
import '../styles/pages/home.scss'

const Home = () => {
  return (
    <div>
      <Landing/>
      <LandingOverview/>
      <Reviews/>
      <Features/>
    </div>
  );
};

export default Home;
