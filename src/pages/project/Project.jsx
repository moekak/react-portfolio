import React from 'react'
import './project.css'
import IMG from '../../img/Screenshot_2.png'
import IMG2 from '../../img/Screenshot_3.png'
import IMG3 from '../../img/Screenshot_4.png'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {SiReact, SiJavascript} from 'react-icons/si'
import {SiRubyonrails} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'

const Project = () => {
    console.log(window.innerWidth);
  return (
    <div className="project-container" id='project'>
        <h1 data-aos='fade-up' style={{padding: '5rem 0rem'}}> <span>03. </span>Projects</h1>
        <div className="project-box">
            <div data-aos="fade-right" className="img-first">
                <img  src={IMG} alt="" />
                <div className="underline-project-first"></div>
                <div className="underline-project-second"></div>
                <div className="underline-project-third"></div>
                <div className="underline-project-forth"></div>
                <div className="underline-project-five"></div>
            </div>
            <div className="desc-projectFirst" data-aos="fade-right">
                <h3 style={{color: '#84319b'}}>Featured Project</h3>
                <h4><span>01.</span> Party Animals <span className='span-language'><AiFillHtml5 className='logo-span' style={{color: '#e34c26'}}/><IoLogoCss3 className='logo-span' style={{color: '#264de4'}}/><SiRubyonrails className='logo-span' style={{color: '#cc0000'}}/><SiJavascript className='logo-span' style={{color: '#f0db4f'}}/></span></h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Repudiandae esse beatae repellendus aliquid omnis reprehenderit officia neque corrupti accusamus ullam?</p>
                <div className="language" data-aos="fade-right">
                    <AiFillHtml5 className='logo' style={{color: '#e34c26'}}/>
                    <IoLogoCss3 className='logo' style={{color: '#264de4'}}/>
                    <SiRubyonrails className='logo' style={{color: '#cc0000'}}/>
                    <SiJavascript className='logo' style={{color: '#f0db4f'}}/>
                </div>
            </div>
            <div className="desc-projectSecond" data-aos="fade-left" >
                <h3 style={{color: '#84319b'}}>Featured Project </h3>
                <h4><span>01.</span> Party Animals <span className='span-language'><AiFillHtml5 className='logo-span' style={{color: '#e34c26'}}/><IoLogoCss3 className='logo-span' style={{color: '#264de4'}}/><SiReact className='logo-span' style={{ color: '#88dded'}}/></span></h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae esse beatae repellendus aliquid omnis reprehenderit officia neque corrupti accusamus ullam?</p>
                <div className="language" data-aos="fade-right" >
                    <AiFillHtml5 className='logo' style={{color: '#e34c26'}}/>
                    <IoLogoCss3 className='logo' style={{color: '#264de4'}}/>
                    <SiReact className='logo' style={{color: '#88dded'}}/>
                </div>
            </div>
            <div className="desc-projectThird" data-aos="fade-right" >
                <h3 style={{color: '#84319b'}}>Featured Project</h3>
                <h4><span>01.</span> Party Animals<span className='span-language'><AiFillHtml5 className='logo-span' style={{color: '#e34c26'}}/><IoLogoCss3 className='logo-span' style={{color: '#264de4'}}/><SiReact className='logo-span' style={{ color: '#88dded'}}/></span></h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae esse beatae repellendus aliquid omnis reprehenderit officia neque corrupti accusamus ullam?</p>
                <div className="language" data-aos="fade-right" >
                    <AiFillHtml5 className='logo' style={{color: '#e34c26'}}/>
                    <IoLogoCss3 className='logo' style={{color: '#264de4'}}/>
                    <SiReact className='logo' style={{color: '#88dded'}}/>
                </div>
            </div>
            <div className="img-second">
                <img  src={IMG2} alt="" />

            </div>
            <div className="img-third">
                <img  src={IMG3} alt="" />

            </div>

        </div>
    </div>
  )
}

export default Project