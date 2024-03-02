
import "./index.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "./Routes/Home.jsx";
import Navbar from "./Components/Navbar.jsx";

import AboutUs from "./Routes/AboutUs.jsx";
import Footer from "./Components/Footer.jsx";
import Batches from "./Routes/Batches.jsx";
import Studentlogin from "./Routes/Studentlogin.jsx"
import Services from "./Routes/Services.jsx";



import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {Route,Routes} from "react-router-dom";



function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/Batches" element={<Batches/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Studentlogin" element={<Studentlogin/>} />
    </Routes>
    <Footer/>
     
    
    </>
    
   
    
  );
}

export default App;
