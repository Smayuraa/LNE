import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Teaching from "./components/Teaching";
import Notes from "./components/Notes";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import ForgotPassword from "./components/Forgetpassword";
import ResetPassword from "./components/ResetPassword";
import Contactus from "./components/Contactus";
import CreatePost from "./components/CreatePost";
import AboutUs from './components/Aboutus'
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/chatbot" element={<Chatbot/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
