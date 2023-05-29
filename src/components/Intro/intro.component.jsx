
import './intro.css';
import React from 'react';
function Intro() { 

    return (
      <section class=" container intro">
        <div className="introText">

            <h1 class="introHeading1">Howzit! welcome to the portfolio page of</h1>
            <h2 class="introHeading2">Jack Liam Nortje</h2>
            <h3 class="introHeading3">QA Engineer and aspiring UI UX Designer</h3>
            <p class="introParagraph">I decided to switch careers in 2021 and followed the route of Front End Web Devlopement. I am currently working as a Quality Assurance Tester 
                for Bluegrass Digital.</p>
            <a href="https://github.com/JackNortje" class="github-projects" target="_blank" rel="noopener noreferrer" ><button class="githubButton" >Github Repos</button></a>
        </div>
      </section>
   

    );      
}

export default Intro;

