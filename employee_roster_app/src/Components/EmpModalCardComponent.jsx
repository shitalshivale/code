import React, { useRef, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

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