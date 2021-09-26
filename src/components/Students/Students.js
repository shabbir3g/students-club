import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './Students.css'

const Students = (props) => {
   
    const {name, age, address, profession, img,  batch, average_marks} = props.student;

    return (
        <div className='student'>
            <img src={img} alt="" />
            <p><b>Name:</b> <span>{name}</span></p>
            <p><b>Age:</b> <span>{age}</span></p>
            <p><b>Address:</b> <span>{address}</span></p>
            <p><b>Profession:</b> <span>{profession}</span></p>
            <p><b>Batch:</b> <span>{batch}</span></p>
            <p><b>Marks:</b> <span>{average_marks}</span></p>
            <button onClick={() => props.addClubHandler(props.student)} className='btn-regular'><FontAwesomeIcon icon={faUsers} /> Add To Club</button>
        </div>
    );
};

export default Students;