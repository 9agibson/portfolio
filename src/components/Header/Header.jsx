import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/menew.png"
import HeaderSocials from './HeaderSocials'
import Typed from "react-typed"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aaron Gibson</h1>
        <h5 className="text-light"><Typed strings={[
          "Web",
          "GIS",
          "Front End",
          "Full Stack"
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop/>
        Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
        
      </div>
    </header>
  )
}

export default Header