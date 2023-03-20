import React from 'react'
import './skill.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiReact, SiJavascript} from 'react-icons/si'
import {SiRubyonrails} from 'react-icons/si'
import {BsGit, BsRocketTakeoff} from 'react-icons/bs'
import {MdPhonelink} from 'react-icons/md'
import ReactSkillbar from 'react-skillbars';
import {CgWebsite} from 'react-icons/cg'
import {TbWorld} from 'react-icons/tb'
import IMG from '../../img/undraw_code_thinking_re_gka2.svg'


const Skill = () => {
    

    
  return (
    <div  className="skill-container" id='skill'>
        <h1 data-aos='fade-up' style={{padding: '5rem 0rem'}}><span>04. </span>What I do</h1>
        <div className="skill-first" data-aos='fade-right'>
            <div className="responsive">
                <TbWorld className='react-icon' style={{fontSize: '2rem', color: 'white'}}/>
                <h3>Web app</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magni?</p>

            </div>
            <div className="responsive">
                <MdPhonelink className='react-icon' style={{fontSize: '2rem', color: 'white'}}/>
                <h3>Web site</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magni?</p>

            </div>
            <div className="responsive">
                <BsRocketTakeoff className='react-icon' style={{fontSize: '2rem', color: 'white'}}/>
                <h3>Responsive</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magni?</p>

            </div>
        </div>
        <div className="skill-boxes" style={{marginTop: '4rem'}}> 
            <div className="skill-languages" data-aos='fade-right'>
                <div className="skills">
                    <div className="skill-language">
                        <div className="skill-name">HTML</div>
                        <div className="skill-bar">
                            <div className="skill-per" per='90%' style={{maxWidth: '90%'}}></div>
                        </div>
                    </div> 
                </div>
                <div className="skills">
                    <div className="skill-language">
                        <div className="skill-name">CSS</div>
                        <div className="skill-bar">
                            <div className="skill-per"  per='70%' style={{maxWidth: '70%'}}></div>
                        </div>
                    </div> 
                </div>
    
                <div className="skills">
                    <div className="skill-language">
                        <div className="skill-name">Boostrap</div>
                        <div className="skill-bar">
                            <div className="skill-per" per='60%' style={{maxWidth: '60%'}}></div>
                        </div>
                    </div> 
                </div>
                
            
            </div>
             <div className="skill-second" data-aos='fade-left'>
                <div className="skills">
                    <div className="skill-language">
                        <div className="skill-name">React</div>
                        <div className="skill-bar">
                            <div className="skill-per" per='60%' style={{maxWidth: '60%'}}></div>
                        </div>
                    </div> 
                </div>
                <div className="skills">
                    <div className="skill-language">
                        <div className="skill-name">Ruby on Rails</div>
                        <div className="skill-bar">
                            <div className="skill-per" per='70%' style={{maxWidth: '70%'}}></div>
                        </div>
                    </div> 
                </div>
                <div className="skills">
                    <div className="skill-language">
                        <div className="skill-name">Javascript</div>
                        <div className="skill-bar">
                            <div className="skill-per" per='60%' style={{maxWidth: '60%'}}></div>
                        </div>
                    </div> 
                </div>
            </div> 

        </div>
        
    </div>
  )
}

export default Skill