import React, { useRef, useEffect } from 'react';


const EmpModalCardComponent = ({employee,onClose,isOpen}) =>{
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
          }
        };
    
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen, onClose]);

      if (!isOpen) return null;
    return(
        <div className="modal-overlay" onClose={onClose}>
            <div className="modal-content" ref={modalRef}>
                <span className="close-icon" onClick={onClose}>
                   +
                </span>
                <h2>
                <img
                    src={"/" + employee.empPhoto}
                    alt=''
                    height="30"
                    width="30" 
                />
                    {employee.empName} {employee.empLastName}
                </h2>
                <p>Job Title:{employee.jobTitle}</p>
                <p>Job Description: {employee.jobDescription}</p>
                <p>Age: {employee.empAge}</p>
                <p>Date of Joining: {employee.dateOfJoining}</p>
            </div>
        </div>
    );
}

export default EmpModalCardComponent;