import React from 'react'
import Home from './components/home'
import About from './components/about'
import Project from './components/project'
import ContactMe from './components/contact'

function page() {
  return (
    <>
    <div className='bg-black'>
    <Home/>
    <hr className="border-gray-400 my-4" />
    <About/>
    <hr className="border-gray-400 my-4" />
    <Project/>
    <hr className="border-gray-400 my-4" />
    <ContactMe/>
    </div>
    </>
  )
}

export default page