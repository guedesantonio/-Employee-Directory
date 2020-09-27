import React from "react";
import './EmployeeList.css';
import EmployeeCard from "./EmployeeCard";
import employee from "./employee.json"

function EmployeeList() {
  return (
      <div style="fontWeight:bold" className="row">
        <div className="col">Image</div>
        <div className="col">Name</div>
        <div className="col">Phone</div>
        <div className="col">Email</div>
        <div className="col">DOB</div>
      </div>
  );
}

export default EmployeeList;
