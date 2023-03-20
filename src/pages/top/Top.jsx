import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './top.css'
import Header from '../header/Header'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import 'animate.css';


const Top = () => {
  return (
    <div className="top-container" id='top'>
        <div className="top-box">
            <div className="intro">
                <div className="underline"></div>
                <div className="underline"></div>
                <h1 className='animate__slideInRight'>Hello, I'm Moeka Kido <span>.</span> </h1> 
                <h3 className='animate__fadeInRight'>Front end developer</h3>
                <div className="icon">
                    <AiFillGithub className='github'/>
                    <AiFillLinkedin className='linkdin'/>
                </div>
                <div className="btn-primary">
                    <button className='btn-cv'>Download CV</button>
                    <button className='btn-talk'>Let's talk</button>
                </div>
            </div>
            
                
        </div>
    </div>
  )
}

export default Top