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


  useEffect(() => {
    // SCRIPT BREVO POUR POP-UP NEWSLETTER
    const script = document.createElement("script");
    script.src = "https://cdn.brevo.com/js/sdk-loader.js";
    script.async = true;
    document.head.appendChild(script);

    // Initialiser Brevo une fois le SDK chargé
    const initScript = document.createElement("script");
    initScript.innerHTML = `
      window.Brevo = window.Brevo || [];
      Brevo.push([
          "init",
          {
              client_key: "87zrwgglz6gnvar1um5auqux"
          }
      ]);
    `;
    document.head.appendChild(initScript);

    // Nettoyage : retirer les scripts si on quitte la page
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(initScript);
    };
  }, []);

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
