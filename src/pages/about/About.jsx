import React from 'react'
import './about.css'
import IMG from '../../img/undraw_coding_re_iv62 (1).svg'

const About = () => {
  return (
    <div className="about-container" id='about'>
        <h1 data-aos='fade-up' style={{padding: '3rem 0rem', width: '100%'}}><span>02. </span>About</h1>
         <div dclassName="about-box">
            
            <div className="desc">
                <img data-aos="fade-right" data-aos-delay="300" className='image2' src={IMG} alt="" />
                <div data-aos="fade-left" data-aos-delay="300" className="text-container">
                    <p style={{color: 'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iste consequuntur odit maiores voluptatibus porro ullam quasi magnam, ipsum, perferendis molestias facere earum deleniti corrupti enim tempora dicta, facilis rem nostrum culpa? Harum laborum ipsa dolorum asperiores ut maxime itaque veniam? Dicta labore rerum officiis accusantium, facilis veritatis nulla aperiam.</p>

                </div>
            </div>
         </div>
    </div>
  )
}

export default About