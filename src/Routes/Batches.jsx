import React from 'react';
import "../Components/CSS/Batches.css"; 

function CourseData() {
  const courses = [
    { course: 'Java Full Stack Developer', startDate: '05-03-2024', endDate: '10-09-2024', batchTime: '12:00', batchType: 'Week Days' },
    { course: 'Java Full Stack Developer', startDate: '12-02-2024', endDate: '12-08-2024', batchTime: '10:00', batchType: 'Week Days' },
    { course: 'Java Full Stack Developer', startDate: '05-02-2024', endDate: '10-08-2024', batchTime: '10:00', batchType: 'Week Days' },
    { course: 'Python Full Stack Developer', startDate: '16-01-2024',endDate: '	15-06-2024',batchTime: '10:00',batchType: 'Week days' },
   
  ];

  return (
    <table className="table table-md-bordered mt-5 Active">
      <thead className="table-dark">
        <tr>
          <th>Course</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Batch Time</th>
          <th>Batch Type</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>{course.course}</td>
            <td>{course.startDate}</td>
            <td>{course.endDate}</td>
            <td>{course.batchTime}</td>
            <td>{course.batchType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseData;
