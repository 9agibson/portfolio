import React from 'react'
import "./about.css"
import ME from '../../assets/meandind.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>

        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Education</h5>
              <small>2 Degrees + Online dev courses</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Background</h5>
              <small>GIS, GIS Development, Web Development, Data Analysis</small>
            </article>
          </div>

          <p>
            I am a self taught full stack developer with a background in Geographic Information
            Systems.  I have earned multiple degrees as well dedicated myself to learning more
            every day about development. Feel free to get in touch to chat about my experience or
            the possibility of us working together!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about