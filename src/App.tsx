import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import {routes} from "./helpers/routes.ts";
import Navbar from "./components/Navbar.tsx";
import About from "./pages/About.tsx";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} path={routes.home.path} />
        <Route element={<About/>} path={routes.about.path} />
      </Routes>
    </>
  )
}

export default App
