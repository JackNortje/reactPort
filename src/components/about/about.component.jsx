
import './about.css'
import'./imgs'

function About() { 
    return (
       <section class="container about" >
              <div class="aboutText">
                <h2 class="aboutMe">01. About</h2>

                <div class="paragraphText">
                    <p class="item1">Hello! My name is Jack Nortje, a Quality Assurance Tester from Cape Town, South Africa.</p>
                    <p class="item2">I am currently focussing on E2E testing of software products, from complex award winning websites, to mobile apps. I have a passion for testing software and my technical background helps me work closely with developers to create amazing software.</p>
                    <p class="item3">I have the ability to find bugs and fix them myself which has been incredibly beneficial in my career so far.</p>
                </div>

                <div className="technologies">
                <h1 class="aboutHeading">Technology I have learnt:</h1>
                <ul className="techFrameworks">
                 <img src="./imgs/css3.png" alt="csd"/>
                 <img src="./imgs/css3.png" alt="csd"/>
                 <img src="my-app\src\imgs\css3.png" alt="csd"/>
                       
                </ul>
                </div>
            
              </div>

                    
       </section>
    );
};


export default About;