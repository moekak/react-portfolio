import React from 'react'
import './header.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {FaBook} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {GoLightBulb} from 'react-icons/go'

const Header = () => {
  return (
    <div className="header-container">
      <a href="#top" style={{transition: '0.8s'}}><AiOutlineHome/></a>
      <a href="#about" style={{transition: '0.5s'}}><AiOutlineUser/></a>
      <a href="#project" style={{transition: '0.5s'}}><RiServiceLine/></a>
      <a href="#skill" style={{transition: '0.5s'}}><GoLightBulb/></a>
      <a href="#contact" style={{transition: '0.5s'}}><BiMessageSquareDetail/></a>
    </div>
  )
}

export default Header