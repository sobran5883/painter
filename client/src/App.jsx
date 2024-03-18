import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from './layout/Layout'
import Home from './pages/Home';
import Location from './pages/Location';
import Notification from './pages/Notification';
import Language from './pages/Language';
import Services from './pages/Services';
import SingIn from './pages/SignIn';
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/language" element={<Language />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signin" element={<SingIn />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
