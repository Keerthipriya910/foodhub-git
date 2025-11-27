import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AdminLogin from './pages/AdminLogin';
import AdminRegistration from './pages/AdminRegistration';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import OurTeam from './pages/OurTeam';
import Recipes from './pages/Recipes';
import SavedRecipes from './pages/SavedRecipes';
import React from 'react'
import RecipeDetails from './pages/RecipeDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';


function App() {
  return (
    <Router>
      <ToastContainer />
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  // Define the routes where the footer should NOT be displayed
  const noFooterPages = ['/project/', '/project/adminlogin', '/project/adminregister', '/project/admin', '/project', '/project/register'];

  return (
    <>
      <Routes>
        <Route path="/project/" element={<Dashboard />} />
        <Route path="/project/register" element={<Registration />} />
        <Route path="/project/home" element={<Home />} />
        <Route path="/project/adminlogin" element={<AdminLogin />} />
        <Route path="/project/adminregister" element={<AdminRegistration />} />
        <Route path="/project/admin" element={<Admin />} />
        <Route path="/project/login" element={<Login />} />
        <Route path="/project/about" element={<AboutUs />} />
        <Route path="/project/contact" element={<Contact />} />
        <Route path="/project/team" element={<OurTeam />} />
        <Route path="/project/recipes" element={<Recipes />} />
        <Route path="/project/saved-recipes" element={<SavedRecipes />} />
        <Route path="/project/recipe/:rid" element={<RecipeDetails />} />
        <Route path="/project/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/project/terms-of-service" element={<TermsAndConditions />} />
      </Routes>

      {/* Conditionally render the Footer based on the current path */}
      {!noFooterPages.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;