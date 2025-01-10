import React  from "react";

const EmpModalCardComponent = ({employee,onClose}) =>{
    return(
        <div className="modal-card" onClose={onClose}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                <span className="close-icon" onClick={onClose}>
                    &times
                </span>
                <h2>
                    {employee.empName}
                </h2>
                <p>Job Title:{employee.jobTitle}</p>
                <p>Job Description: {employee.jobDescription}</p>
                <p>Age: {employee.empAge}</p>
                <p>Date if Joining: {employee.dateOfJoining}</p>
            </div>
        </div>
    );
}

export default EmpModalCardComponent;