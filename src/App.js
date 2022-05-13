import "./App.css";
import Navbar from "./pages/Home/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer";
import Appointment from "./pages/MakeApointment/Appointment";
import SignUp from "./pages/Login/SignUp";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
