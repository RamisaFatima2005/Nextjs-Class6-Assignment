import React from 'react'

export default function About() {
  return (
    <>

    {/*About*/}
    <div className="p-28">
    <h1 className='text-5xl flex justify-start text-white'><b><i>About Me</i></b></h1>
    <br/>
    <br/>
    <div className="text-white text-2xl flex justify-start w-96 h-5">
    <p> I have experience working with 
      <br/>modern technologies like HTML, 
      <br/>CSS, TypeScript, and JavaScript, 
      <br/>and I'm currently expanding my 
      <br/>skills in Next.js. I enjoy creating 
      <br/>clean, responsive, and user-
      <br/>friendly websites, and I'm always 
      <br/>eager to learn new tools and 
      <br/>technologies.</p>
    </div>

    {/*Picture*/}
    <div className='flex justify-end'>
      <img className='w-64 h-64' src='/About.PNG'/>
      </div>
      
      </div>
    </>
  )
}
