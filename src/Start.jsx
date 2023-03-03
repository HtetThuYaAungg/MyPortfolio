import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import AddProject from './Pages/AddProject'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Guard from './Pages/Guard'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Missing from './Pages/Missing'
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
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Missing/>} />
          <Route path='/add' element={<Guard><AddProject/></Guard>}/>
          </Routes>
          <Footer/>
        </div>
      )
}

export default Start
