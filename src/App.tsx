import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Privacy from "./pages/Privacy";
import Hub from "./pages/Hub";
import Category from "./pages/Category";
import Dashboard from "./pages/dashboard/Dashboard";
import AddRessource from "./pages/dashboard/AddRessource";
import AddImage from "./pages/dashboard/AddImage";
import Guard from "./components/auth/Guard";
import AddCategory from "./pages/dashboard/AddCategory";
import RessourceCommutator from "./pages/ressources/RessourceCommutator";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/auth/Profile";
import UpdateRessource from "./pages/dashboard/UpdateRessource";
import RessourcesList from "./pages/dashboard/RessourcesList";
import PlannerApp from "./pages/planner/WeatherApp";
import WeatherApp from "./pages/planner/WeatherApp";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth routes */}
          <Route path={routes.login.path} element={<Login />} />
          <Route path={routes.register.path} element={<Register />} />
          <Route path={routes.profile.path} element={<Layout component={<Profile />} />} />
          {/* App main routes */}
          <Route path={routes.home.path} element={<Layout component={<Home />} />} />
          <Route path={routes.about.path} element={<Layout component={<About />} />} />
          <Route path={routes.contact.path} element={<Layout component={<Contact />} />} />
          <Route path={routes.gallery.path} element={<Layout component={<Gallery />} />} />
          <Route path={routes.hub.path} element={<Layout component={<Hub />} />} />
          {/* <Route path={routes.planner.path} element={<Layout component={<Planner />} />} /> */}
          <Route path={routes.ressources_category.path} element={<Layout component={<Category />} />} />
          <Route path={routes.weather.path} element={<Layout component={<WeatherApp />} />} />
          {/* Ressources routes */}
          {/* <Route path={routes.ressource_details.path} element={<Layout component={<RessourceDetails />} />} /> */}
          <Route path={routes.ressource.path} element={<Layout component={<RessourceCommutator />} />} />
          {/* Other routes */}
          <Route path={routes.privacy.path} element={<Layout component={<Privacy />} />} />
          <Route path={routes.notFound.path} element={<NotFound />} />
          {/* Admin routes */}
          <Route path={routes.dashboard.path} element={<Guard children={<Layout component={<Dashboard />} />} />} />
          <Route path={routes.dashboard_add_ressource.path} element={<Guard children={<Layout component={<AddRessource />} />} />} />
          <Route path={routes.dashboard_ressources_list.path} element={<Guard children={<Layout component={<RessourcesList />} />} />} />
          <Route path={routes.dashboard_update_ressource.path} element={<Guard children={<Layout component={<UpdateRessource />} />} />} />
          <Route path={routes.dashboard_add_image.path} element={<Guard children={<Layout component={<AddImage />} />} />} />
          <Route path={routes.dahsboard_add_category.path} element={<Guard children={<Layout component={<AddCategory />} />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
