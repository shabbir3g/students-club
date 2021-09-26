import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import Students from '../Students/Students';
import './Course.css'

const Course = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('./students.JSON')
        .then(res => res.json())
        .then(data => setStudents(data))
    },[]);
    const [club, setClub] = useState([]);
    
    
    const addClubHandler = (member) => {
    const newCart = [...club, member];
      setClub(newCart)
    }

    return (
        <div className='course-container'>
            <div className="students-container"> 
                {
                    students.map(student => <Students 
                        student={student}
                        addClubHandler={addClubHandler}
                        key={student.stdId}
                        
                        ></Students> )
                }
            </div>


            <div className="club-container"> 
             {
                 <Club club={club}></Club>
             }
            </div>
        </div>
    );
};

export default Course;