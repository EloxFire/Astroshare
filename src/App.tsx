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
import Category from "./pages/Category";
import Dashboard from "./pages/dashboard/Dashboard";
import AddRessource from "./pages/dashboard/AddRessource";
import AddImage from "./pages/dashboard/AddImage";
import Guard from "./components/auth/Guard";
import RessourceCommutator from "./pages/ressources/RessourceCommutator";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/auth/Profile";
import UpdateRessource from "./pages/dashboard/UpdateRessource";
import RessourcesList from "./pages/dashboard/RessourcesList";
import WeatherApp from "./pages/planner/WeatherApp";
import Ressources from "./pages/Ressources";
import Hub from "./pages/Hub";
import MobileApp from "./pages/mobileApp/MobileApp";
import AppPrivacy from "./pages/mobileApp/Privacy";
import AddCategory from "./pages/dashboard/categories/AddCategory";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Auth routes */}
          <Route path={routes.login.path} element={<Login />} />
          <Route path={routes.register.path} element={<Register />} />
          <Route path={routes.profile.path} element={<Layout asCopyright component={<Profile />} />} />
          {/* App main routes */}
          <Route path={routes.home.path} element={<Layout asCopyright component={<Home />} />} />
          <Route path={routes.about.path} element={<Layout asCopyright component={<About />} />} />
          <Route path={routes.contact.path} element={<Layout asCopyright component={<Contact />} />} />
          <Route path={routes.gallery.path} element={<Layout asCopyright component={<Gallery />} />} />
          <Route path={routes.ressources.path} element={<Layout asCopyright component={<Ressources />} />} />
          <Route path={routes.hub.path} element={<Layout asCopyright component={<Hub />} />} />
          <Route path={routes.ressources_category.path} element={<Layout asCopyright component={<Category />} />} />
          <Route path={routes.weather.path} element={<Layout asCopyright component={<WeatherApp />} />} />
          {/* MOBILE APP RELATED ROUTES */}
          <Route path={routes.mobile_app.about.path} element={<Layout component={<MobileApp />} />} />
          <Route path={routes.mobile_app.privacy.path} element={<Layout component={<AppPrivacy />} />} />
          {/* Ressources routes */}
          {/* <Route path={routes.ressource_details.path} element={<Layout asCopyright component={<RessourceDetails />} />} /> */}
          <Route path={routes.ressource.path} element={<Layout asCopyright component={<RessourceCommutator />} />} />
          {/* Other routes */}
          <Route path={routes.privacy.path} element={<Layout asCopyright component={<Privacy />} />} />
          <Route path={routes.notFound.path} element={<NotFound />} />
          {/* Admin routes */}
          <Route path={routes.dashboard.main.path} element={<Guard children={<Layout asCopyright component={<Dashboard />} />} />} />
          <Route path={routes.dashboard.ressources.add.path} element={<Guard children={<Layout asCopyright component={<AddRessource />} />} />} />
          <Route path={routes.dashboard.ressources.update.path} element={<Guard children={<Layout asCopyright component={<UpdateRessource />} />} />} />
          <Route path={routes.dashboard.ressources.list.path} element={<Guard children={<Layout asCopyright component={<RessourcesList />} />} />} />
          <Route path={routes.dashboard.images.add.path} element={<Guard children={<Layout asCopyright component={<AddImage />} />} />} />
          <Route path={routes.dashboard.categories.add.path} element={<Guard children={<Layout asCopyright component={<AddCategory />} />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
