
import React from 'react'; 
import "./Navbar.css";

function Navbar() { 

    return (
    <nav class="navbar navbar-expand">
        <div class="container">
            
            <a href="#intro" class="navbar-brand">Jack.</a>
    
            <ul class="navbar-nav">
                <li class="nav-item"><a href="#about" class="nav-link ">About</a></li>
                <li class="nav-item"><a href="#work-timeline"class="nav-link ">Work Timeline</a></li>
                <li class="nav-item"><a href="#projects"class="nav-link ">Course Projects</a></li>
                <li class="nav-item"><a href="#contact"class="nav-link ">Contact</a></li>
                <li class="nav-item"><a class="nav-link" href="http://jacknortje.com/RESUME/Jack%20Nortje%20Resume%202021%20Tech%20.pdf" target="_blank" >Resume</a></li>
            </ul>
        </div>
    </nav>


    );      
}

export default Navbar;

