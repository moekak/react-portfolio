import React, {useEffect} from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Top from './pages/top/Top'
import About from './pages/about/About'
import Header from './pages/header/Header';
import 'animate.css';
import Project from './pages/project/Project';
import Skill from './pages/skill/Skill';
import Contact from './pages/contact/Contact';



const App = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])
  return (
    <div className="app">
        <div className="top">
            <Header/>
           <Top/> 
        </div>
        <div  className="top">
           <About/> 
           <Project/>
           <Skill/>
           <Contact/>
        </div>
        
    </div>
  )
}

export default App