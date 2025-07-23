import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import {routes} from "./helpers/routes.ts";
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} path={routes.home.path} />
      </Routes>
    </>
  )
}

export default App
