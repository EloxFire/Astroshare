import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { routes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home.path} element={<Layout component={<Home />} />} />
      </Routes>
    </Router>
  );
}

export default App;
