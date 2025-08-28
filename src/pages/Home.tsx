import { Landing } from '../components/sections/Landing';
import { LandingOverview } from '../components/sections/LandingOverview';
import { Reviews } from '../components/sections/Reviews';
import '../styles/pages/home.scss'

const Home = () => {
  return (
    <div>
      <Landing/>
      <LandingOverview/>
      <Reviews/>
    </div>
  );
};

export default Home;
