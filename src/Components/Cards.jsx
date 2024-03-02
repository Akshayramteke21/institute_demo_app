import React from "react";
import "./CSS/Cardsstyle.css";
import dotnetfullstackfinal from "../Images/Slider/dotnetfullstackfinal.png";
import javafillstackwhitetext from "../Images/Slider/javafillstackwhitetext.png";
import meanstack from "../Images/Slider/meanstack.png";
import Phpfullstackfinal from "../Images/Slider/Phpfullstackfinal.png";
import python from "../Images/Slider/python.png";
import software_testing from "../Images/Slider/software_testing.png";

function Cards() {
  return (
    <div className="container">

      <div className="row">
        <div className="col-md-12 feature">
           <h1> Best IT Job Oriented Courses</h1>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-3">
        <div className="col mb-4">
          <div className="card hover-overlay">
            <img
              src={javafillstackwhitetext}
              className="card-img-top"
              alt="fullstack"
            />
            
          </div>
        </div>
        <div className="col mb-4">
          <div className="card hover-overlay">
            <img
              src={dotnetfullstackfinal}
              className="card-img-top"
              alt="dot net developer"
            />
            
          </div>
        </div>
        <div className="col mb-4">
          <div className="card hover-overlay">
            <img
              src={Phpfullstackfinal}
              className="card-img-top"
              alt="php developer"
            />
           
          </div>
        </div>
        <div className="col mb-4">
          <div className="card hover-overlay">
            <img
              src={software_testing }
              className="card-img-top"
              alt="software  Testing"
            />
           
          </div>
        </div>
        <div className="col mb-4">
          <div className="card hover-overlay">
            <img
              src={meanstack}
              className="card-img-top"
              alt="Mean stack developer "
            />
           
          </div>
        </div> 
        <div className="col mb-4">
          <div className="card hover-overlay">
            <img
              src={python}
              className="card-img-top"
              alt="Python full stack developer"
            />
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
