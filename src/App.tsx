import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import {routes} from "./helpers/routes.ts";
import Navbar from "./components/Navbar.tsx";
import About from "./pages/About.tsx";
import Pricing from "./pages/Pricing.tsx";
import Footer from "./components/Footer.tsx";
import { Cgv } from "./pages/statics/Cgv.tsx";
import PrivacyPolicy from "./pages/statics/PrivacyPolicy.tsx";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} path={routes.home.path} />
        <Route element={<About/>} path={routes.about.path} />
        <Route element={<Pricing/>} path={routes.pricing.path} />

        {/* Static pages */}
        <Route element={<Cgv />} path={routes.cgv.path} />
        <Route element={<PrivacyPolicy />} path={routes.privacy.path} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
