import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home.path} element={<Layout component={<Home />} />} />
        <Route path={routes.about.path} element={<Layout component={<About />} />} />
        <Route path={routes.contact.path} element={<Layout component={<Contact />} />} />
      </Routes>
    </Router>
  );
}

export default App;
