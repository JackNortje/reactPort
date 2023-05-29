
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/navbar.component';
import Intro from './components/Intro/intro.component';
import About from './components/about/about.component';
import Work from './components/work/work';
import Projects from './components/projects/projects';
import Workcarousel from './components/Workcarousel/workcarousel';


function App() {
  return (
    <div className='App'>
      
    <image src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"></image>
<Navbar/>
<Intro/>
<About/>
<Work/>
<Projects/>
<Workcarousel/>

<img src="{image1}" alt='test'/>

</div>
  );
};

export default App;
