import React from 'react';

const Club = (props) => {
   const members = props.club;
  
   let clubMembers = [];
   let total = 0;
   for(const member of members){
    if(clubMembers.indexOf(member.name) === -1){
        total = total + parseInt(member.average_marks)
        clubMembers.push(member.name);
    }

    
   }
    
    
    return (
        <div>
         <h2>SCIC Members: {clubMembers.length} </h2>
         <h3>Total Marks: {total}</h3>
        {clubMembers.map((member, index) => <Member 
        key={index}
         member={member}
         ></Member> )}

        </div>
    );
};



const Member = (props) => {
    return (
        <div>
          <p> {props.member} </p>
        </div>
    );
};


export default Club;