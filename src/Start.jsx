import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Nav from './Pages/Nav'
import Project from './Pages/Project'
import Service from './Pages/Service'

const Start = () => {
    return (
        <div className='App'>
          
          
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/service' element={<Service/>} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
      )
}

export default Start
