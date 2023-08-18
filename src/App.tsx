import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { routes } from "./routes";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home.path} element={<Layout component={<Home />} />} />
        <Route path={routes.about.path} element={<Layout component={<About />} />} />
      </Routes>
    </Router>
  );
}

export default App;
