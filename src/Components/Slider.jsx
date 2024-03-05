import React from 'react';
import "./CSS/sliderstyle.css";
import sliderr from "../Images/Slider/sliderr.jpg";
import slide2 from "../Images/Slider/slide2.jpg";
import slide3 from "../Images/Slider/slide3.jpg";

function Slider() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 offset-md-1"> 
          <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active c-item">
                <img src={sliderr} className="d-block w-100 c-image" alt="slider1" />
                <div className="carousel-caption top-0 mt-4 d-md-block">
                  <h2 className='mt-5 fs-3'> FOR COMPANIES</h2>
                  <p>"WE HELP YOU TO HIRE RIGHT TALENT."</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={slide2} className="d-block w-100 c-image" alt="slider2" />
                <div className="carousel-caption top-0 mt-4 d-md-block"> 
                  <h2 className='mt-5 fs-3 slide2'>FOR COLLEGES</h2>
                  <p>"WE HELP YOU TO INCREASE PLACEMENTS."</p>
                </div>
              </div>
              <div className="carousel-item Slide3">
                <img src={slide3} className="d-block w-100 c-image" alt="slider2" />
                <div className="carousel-caption top-0 mt-4 d-md-block"> 
                  <h2 className='mt-5 fs-3 slide2'>FOR CANDIDATES</h2>
                  <p>"WE HELP YOU TO FIND RIGHT JOB."</p>
                </div>
              </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
