import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Privacy from "./pages/Privacy";
import Hub from "./pages/Hub";
import Category from "./pages/Category";
import RessourceDetails from "./pages/ressources/RessourceDetails";
import RessourcePage from "./pages/ressources/Ressource";
import Dashboard from "./pages/dashboard/Dashboard";
import AddRessource from "./pages/dashboard/AddRessource";

function App() {
  return (
    <Router>
      <Routes>
        {/* App main routes */}
        <Route path={routes.home.path} element={<Layout component={<Home />} />} />
        <Route path={routes.about.path} element={<Layout component={<About />} />} />
        <Route path={routes.contact.path} element={<Layout component={<Contact />} />} />
        <Route path={routes.gallery.path} element={<Layout component={<Gallery />} />} />
        <Route path={routes.hub.path} element={<Layout component={<Hub />} />} />
        <Route path={routes.ressources_category.path} element={<Layout component={<Category />} />} />
        {/* Ressources routes */}
        <Route path={routes.ressource_details.path} element={<Layout component={<RessourceDetails />} />} />
        <Route path={routes.ressource.path} element={<Layout component={<RessourcePage />} />} />
        {/* Other routes */}
        <Route path={routes.privacy.path} element={<Layout component={<Privacy />} />} />
        <Route path={routes.notFound.path} element={<NotFound />} />
        {/* Admin routes */}
        <Route path={routes.dashboard.path} element={<Layout component={<Dashboard />} />} />
        <Route path={routes.dashboard_add_ressource.path} element={<Layout component={<AddRessource />} />} />
      </Routes>
    </Router>
  );
}

export default App;
