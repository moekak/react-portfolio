import React from 'react'
import './skill.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiReact, SiJavascript} from 'react-icons/si'
import {SiRubyonrails} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'


const Skill = () => {
  return (
    <div  className="skill-container">
        <h1 data-aos='fade-up' style={{padding: '5rem 0rem'}}><span>04. </span>What I do</h1>
        <div className="skill-box">
            <div className="skills" data-aos='fade-left' data-aos-delay="300">
                <div className="html skill">
                    <p>HTML</p>
                    <AiFillHtml5 style={{fontSize: '5rem', color: '#e34c26'}}/>
                </div>
                <div className="css skill">
                    <p>CSS</p>
                    <IoLogoCss3 style={{fontSize: '5rem', color: '#264de4'}}/>
                </div>
                <div className="react skill">
                    <p>React JS</p>
                    <SiReact style={{fontSize: '5rem', color: '#88dded'}}/>
                </div>
                <div className="ruby skill">
                    <p>Ruby on Rails</p>
                    <SiRubyonrails style={{fontSize: '5rem', color: '#cc0000'}}/> 
                </div>
                <div className="js skill">
                    <p>Javascript</p>
                    <SiJavascript style={{fontSize: '5rem', color: '#f0db4f'}}/>
                </div>
            </div>
      </div>   
    </div>
  )
}

export default Skill