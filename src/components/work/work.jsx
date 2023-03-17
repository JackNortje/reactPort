
import "./work.css";

function Work() { 

    return (
    <section id="work-timeline">
        <div class="container work">
        
        
        <h2 class="heady bg-black">02. Work</h2>
        <div class="button tab center">
        <button class="tablinks" onclick="workPlace(event, 'Quality')">Quality Assurance Tester</button>
        <button class="tablinks" onclick="workPlace(event, 'Front')">Front End</button>
        <button class="tablinks" onclick="workPlace(event, 'Film')">Film Industry</button>
        <button class="tablinks" onclick="workPlace(event, 'Photography')">Photographer</button>
        <button class="tablinks" onclick="workPlace(event, 'Nature')">Nature Conservationist</button>
        </div>
       
        
        <div className="infoblock">
            <h3 class="heading">Quality Assurance Tester</h3>
                <ul class="jobtext">
                    <li>Testing websites and mobile applications, on numerous browsers and physical mobile devise to find issues/bugs </li>
                    <li>Cross platform testing large Website Applications; and Mobile Apps (iOS, Android)</li>  
                    <li>Good creative eye and the ability to review designs against the final product and pick out those minuscule 1-pixel bugs</li>
                    <li>Automated testing using Katalon Studio for my BAU clients</li>
                    <li>Automated testing using Rainforest</li>
                  
                </ul>
              </div>
              </div>

        
</section>
        

    );   

};

export default Work;
