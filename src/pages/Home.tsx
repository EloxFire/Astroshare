import { Landing } from '../components/sections/Landing';
import { LandingOverview } from '../components/sections/LandingOverview';
import '../styles/pages/home.scss'

const Home = () => {
  return (
    <div>
      <Landing/>
      <LandingOverview/>
    </div>
  );
};

export default Home;
