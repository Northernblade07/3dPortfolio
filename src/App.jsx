import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Tech from './components/Tech'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
     <Navbar/>
     <Hero/>
     <About/>
     <Tech/>
     <Contact/>
     <Projects/>
     <Footer/>
    </main>
  )
}

export default App
