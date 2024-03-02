import React from "react";
import "./CSS/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
  
    <footer class="text-center text-lg-start bg-dark text-muted">
  
 
 
  <section class="footer">
    <div class="container text-center text-md-start mt-5">
   
      <div class="row mt-2 footer">
        
        <div class="col-md-6 col-lg-3 col-xl-3 mx-auto  mt-2 mb-4 footer text-center">
          
          <h5  >Giri's Tech Hub</h5>
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.92131169358!2d73.80261296699753!3d18.48111615495248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfeb853d4691%3A0x56f1a2e46627167!2sGiri&#39;s%20TECH%20HUB%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1708956746428!5m2!1sen!2sin"
                 width="250"
                 height="200"
                 style={{border:0}}
                 allowfullscreen=""
                 loading="lazy"
                 referrerpolicy="no-referrer-when-downgrade"
               ></iframe>
        </div>
       
        <div class=" footer col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
          
        <h5 className="mt-2 mb-4">Useful links</h5>
              <Link className="nav-link" to="/">
                Home
             </Link>
             <Link className="nav-link" to="/AboutUs">
               About Us
             </Link>
              <Link className="nav-link" to="/">
                Services
              </Link>
              <Link className="nav-link" to="Batches/">
               Batches
              </Link>
               <Link className="nav-link" to="/Payment">
                 Payment
             </Link>
            </div>
       
        <div class=" footer col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h5 class="  mb-4 mt-2">
            Services
          </h5>
          <p>
          Project Consulting
          </p>
          <p>
          On Job Training

          </p>
          <p>
          Internship
          </p>
          <p>
          Placement Cell
            </p>
        
        </div>
       
        <div class="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h5 class=" mb-3 mt-2 ">Contact</h5>
          <p><i class="fas fa-home me-3"></i>  Giri's Tech Hub, 102, Dangat Park, Mumbai-Banglore Highway, Warje, Pune, Maharashtra, 411058.</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            hr.techhubindia@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> +91 9175 444 433</p>
          <p><i class="fas fa-print me-3"></i>  +91 9049 361 265</p>
        </div>
        
      </div>
      
    </div>
  </section>
  
  <div class="footer text-center p-4">
    © Copyright 2023 Giri's Tech Hub, All Rights Reserved. | Designed & Maintained by G-soft Solution Pvt Ltd.
    
  </div>
  
</footer>

  );
}

export default Footer;
