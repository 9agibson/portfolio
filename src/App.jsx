import React from 'react'
import Header from "./components/Header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Experience from "./components/Experience/Experience"
import Footer from "./components/footer/Footer"
import Portfolio from "./components/portfolio/Portfolio"


const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App