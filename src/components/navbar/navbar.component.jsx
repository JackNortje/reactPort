
import "./Navbar.css";

function Navbar() { 

    return (
    <nav class="navbar navbar-fixed-top navbar-expand-md bg-black navbar-dark ">
        <div class="container  ">
                <a href="#intro" class="navbar-brand">Jack.</a>
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
                    <a class="nav-link" href="http://jacknortje.com/RESUME/Jack%20Nortje%20Resume%202021%20Tech%20.pdf" target="_blank" >Resume</a>
                    </li>
                </ul>
            </div>
        </div>

        
    </nav>


    );      
   
};

export default Navbar;


{/* <nav class="navbar navbar-expand">
<div class="container ">
    
    <a href="#intro" class="navbar-brand">Jack.</a>

    <ul class="navbar-nav active bg-light">
        <li class="nav-item"><a href="#about" class="nav-link ">About</a></li>
        <li class="nav-item"><a href="#work-timeline"class="nav-link ">Work Timeline</a></li>
        <li class="nav-item"><a href="#projects"class="nav-link ">Projects</a></li>
        <li class="nav-item"><a href="#contact"class="nav-link ">Contact</a></li>
        <li class="nav-item"><a class="nav-link" href="http://jacknortje.com/RESUME/Jack%20Nortje%20Resume%202021%20Tech%20.pdf" target="_blank" >Resume</a></li>
    </ul>
</div>


</nav> */}
