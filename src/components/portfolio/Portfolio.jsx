import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/clay-website.PNG'
import IMG2 from '../../assets/journal.PNG'
import IMG3 from '../../assets/todolist.PNG'
import IMG4 from '../../assets/newsletter.PNG'


const Portfolio = () => {
  const images = [{
      source: IMG1,
      title: "Clay Gibson Music",
      github: "https://github.com/9agibson/journal",
      url: "https://claygibsonmusic.com"
    },
     {
       source: IMG2,
       title: "Daily Journal",
       github: "https://github.com/9agibson/ClayGibsonMusic",
       url: "https://still-falls-03132.herokuapp.com"
      }, 
      { source: IMG3,
        title: "To Do List",
        github: "https://github.com/9agibson/ToDoList",
        url: "https://glacial-spire-98098.herokuapp.com"
      },
      {
        source: IMG4,
        title: "Newsletter Sign Up",
        github: "https://github.com/9agibson/signUp",
        url: "https://safe-savannah-66454.herokuapp.com"
      }];


  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {images.map(image => 
        <article className='portfolio__item'>
          <div className='portfolio__item-image'><img src={image.source} alt=""/> </div>
          <h3>{image.title}</h3>
          <div className='portfolio__items-cta'>
            <a href={image.github} className='btn'>Github</a>
            <a href={image.url} className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        )}
      </div>
    </section>
  )
}

export default Portfolio