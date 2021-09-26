import React from 'react';
import logo from '../../logo.png'
import './Header.css'

const Header = () => {
    return (
       <div> 
            <div className="header-top"> 
                <p>Super Charged Interviewee Club (SCIC), Total Assignment Marks: 60</p>
            </div>
            <div className="header"> 
                <div>
                        <img className='logo' src={logo} alt="" />
                    </div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/testimonial">Testimonial</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
            </div>
       </div>
    );
};

export default Header;