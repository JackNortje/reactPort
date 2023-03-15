
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SectionOne from './components/Intro/intro.component';
import Navbar from './components/navbar/navbar.component';
import Intro from './components/Intro/intro.component';
import About from './components/about/about.component';


function App() {
  return (
    <div className='App'>
<Navbar/>
<Intro/>
<About/>

</div>
  );
};

export default App;
