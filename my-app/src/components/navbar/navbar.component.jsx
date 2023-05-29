
import "./Navbar.css";
import React from 'react';

function Navbar() { 

    return (
    <nav class="navbar fixed-top navbar-expand-md bg-black navbar-dark ">
        <div class="container  ">
                <a href="#intro"><h1 class="icon">Jack.</h1></a>
                <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navmenu">
                    <span class="navbar-toggler-icon">
                        </span>
                        </button>

            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav active bg-black ms-auto">
                    <li class="nav-item">
                    <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                    <a href="#work-timeline"class="nav-link ">Work Timeline</a>
                    </li>
                    <li class="nav-item">
                    <a href="#projects"class="nav-link ">Projects</a>
                    </li>
                    <li class="nav-item">
                    <a href="#contact"class="nav-link ">Contact</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="http://jacknortje.com/RESUME/Jack%20Nortje%20Resume%202021%20Tech%20.pdf" target="_blank" rel="noopener noreferrer" >Resume</a>
                    </li>
                </ul>
            </div>
        </div>

        
    </nav>


    );      
   
};

export default Navbar;

