import React from "react";
import "./CSS/Featurestyle.css";
import World_Class_Faculty from "../Images/logo/World_Class_Faculty.png";
import Live_Classes from "../Images/logo/Live_Classes.png";
import Video_Lectures from "../Images/logo/Video_Lectures.png";
import Student_Discussion_Forum from "../Images/logo/Student_Discussion_Forum.png";
import Quiz_Assignments from "../Images/logo/Quiz_Assignments.png";
import Learn_Anytime_Anywhere from "../Images/logo/Learn_Anytime_Anywhere.png";
import Trusted_Content from "../Images/logo/Trusted_Content.png";
import Online_Offline_Video_Lectures from "../Images/logo/Online_Offline_Video_Lectures.png";
import Affordable_Fee_Structure from "../Images/logo/Affordable_Fee_Structure.png";

function Info() {
  return (
    <div className="container">
      <div className="title">OUR PLATFORM FEATURES</div>
      <div className="row features mt-5  hover-overlay hover-zoom hover-shadow ripple ">
        <div className="col-lg-4 col-md-6">
          <div className="box-container">
            <div className="float-left">
              <img src={World_Class_Faculty} alt="faculty" />
            </div>
            <p  className="font-weight-bold">World Class Faculty</p>
            <p>We provide world class faculty for our students.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="box-container">
            <div className="float-left">
              <img src={Live_Classes} alt="live classes" />
            </div>
            <p  className="font-weight-bold">Live Classes</p>
            <p>Join live classes from anywhere.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="box-container">
            <div className="float-left">
              <img src={Video_Lectures} alt="video lectures" />
            </div>
            <p  className="font-weight-bold">Video Lectures</p>
            <p>Access recorded video lectures.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="box-container">
            <div className="float-left">
              <img src={Student_Discussion_Forum} alt="disscussion" />
            </div>
            <p  className="font-weight-bold">Student Discussion Forum</p>
            <p>Access recorded video lectures.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="box-container">
            <div className="float-left">
              <img src={Quiz_Assignments} alt="quiz" />
            </div>
            <p  className="font-weight-bold">Quiz and Assigments</p>
            <p>Access recorded video lectures.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="box-container">
            <div className="float-left">
              <img src={Learn_Anytime_Anywhere} alt="learn" />
            </div>
            <p  className="font-weight-bold">Learn Anytime Anywhere</p>
            <p>Access recorded video lectures.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="box-container">
            <div className="float-left">
              <img src={Trusted_Content} alt="trust" />
            </div>
            <p  className="font-weight-bold">Trusted Content</p>
            <p>Access recorded video lectures.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="box-container">
            <div className="float-left">
              <img src={Online_Offline_Video_Lectures} alt="lectures" />
            </div>
            <p  className="font-weight-bold">Online and Offline Video Lectures</p>
            <p>Access recorded video lectures.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="box-container">
            <div className="float-left">
              <img src={Affordable_Fee_Structure} alt="fee" />
            </div>
            <p className="font-weight-bold">Affordable Fee Structure</p>
            <p>Access recorded video lectures.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
