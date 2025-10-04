import { useEffect } from 'react';
import { Features } from '../components/sections/home/Features';
import { Landing } from '../components/sections/home/Landing';
import { LandingOverview } from '../components/sections/home/LandingOverview';
import { Reviews } from '../components/sections/home/Reviews';
import { useLocation } from 'react-router';
import '../styles/pages/home.scss'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

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
