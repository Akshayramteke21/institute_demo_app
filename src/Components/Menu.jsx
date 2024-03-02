import React from 'react';
import "./CSS/Menustyle.css";

function Menu() {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div className="col box1">
        <i className="fas fa-certificate icon1" aria-hidden="true"></i>
          <h5>Certified Courses</h5>
          <p>We provide certified courses to students with 100% placement support.</p>
        </div>
        <div className="col box2">
          <i className="fas fa-chalkboard-teacher icon2" aria-hidden="true"></i>
          <h5>Premium Placements</h5>
          <p>We provide certified courses to students with 100% placement support.</p>
        </div>
        <div className="col box3">
          <h5>Weekly Assessments</h5>
          <p>We provide certified courses to students with 100% placement support.</p>
        </div>
        <div className="col box4">
          <h5>Expert Faculty</h5>
          <p>We provide certified courses to students with 100% placement support.</p>
        </div>
      </div>
      <div className="row">
       <div className="col-md-12 text-center">
         <h2>Best IT Job Oriented Courses</h2>
       </div>
      </div>
    </div>
  );
}

export default Menu;
