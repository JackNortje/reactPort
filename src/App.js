
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SectionOne from './components/Intro/intro.component';
import Navbar from './components/navbar/navbar.component';
import Intro from './components/Intro/intro.component';
import About from './components/about/about.component';
import Card from './components/work/card';
import Work from './components/work/work';
import Projects from './components/projects/projects';
import Workcarousel from './components/Workcarousel/workcarousel';


function App() {
  return (
    <div className='App'>
      
    
<Navbar/>
<Intro/>
<About/>
<Work/>
<Projects/>
<Workcarousel/>

</div>
  );
};

export default App;
