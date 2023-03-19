import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import IMG from '../../img/undraw_messaging_fun_re_vic9 (1).svg'

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-box">
            <div className="contact">
                <h1 data-aos='fade-up' style={{paddingTop: '3rem'}}> <span>05. </span> Contact Me</h1>
                <p data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe sint temporibus dicta repellendus fugit nesciunt atque ratione a, perferendis excepturi consectetur eaque tempora illo, error, id vitae autem repellat.</p>
                <div className="contact-me">
                    <img data-aos='fade-right' className='message' src={IMG} alt="" />
                    <div data-aos='fade-left' className="contact-icon">
                        <div className="email">
                            <a href="mailto:moeka.k0729@gmail.com" target="_blank" style={{color: '#84319b', fontSize: '3rem'}}> <MdOutlineEmail /></a>
                            <h5>Email</h5>
                            <p>moeka.k0729@gmail.com</p>
                            <a href="mailto:moeka.k0729@gmail.com" target='_blank'>Send a message</a>
                         </div>
                        <div className="whatsapp">
                            <a href="https://api.whatsapp.com/send?phone=8108059504830" target='_blank' style={{color: '#84319b', fontSize: '3rem'}}> <BsWhatsapp/></a> 
                            <h5>Whatsapp</h5>
                            <p>+81 080-5950-4830</p>
                            <a href="https://api.whatsapp.com/send?phone=8108059504830" target='_blank'>Send a message</a>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact