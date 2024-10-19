'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter()
  return (
    <>
    <div className='bg-black' >

      {/*Navbar*/}
      <div className="pt-2">
    <div className='bg-zinc-700 text-white w-auto h-14 flex space-x-3 justify-end'>
      <div className="pt-4">
        <button onClick={()=>route.push("/")}><b>HOME</b></button>
        </div>
        <div className="pt-4">
        <button onClick={()=>route.push("/")}><b>ABOUT</b></button>
        </div>
        <div className="pt-4">
        <button onClick={()=>route.push("/")}><b>PROJECT</b></button>
        </div>
        <div className="pt-4">
        <button onClick={()=>route.push("/")}><b>CONTACT ME</b></button>
        </div>

    </div>
    </div>
    

    {/*Intro*/}
    <div className="p-32">
    <div className="text-white text-2xl flex justify-start w-96 h-7">
    <p>Hii, I'm <b>Ramisa Fatima,</b>
    <br/>
    <br/>
    an aspiring AI engineer with a
    <br/> passion for building clean, responsive
    <br/> web applications. Dive into my work
     <br/>and see how I blend creativity with 
     <br/>technology.</p>
    </div>

    {/*Picture*/}
    <div className='flex justify-end'>
      <img className='flex rounded-full border-white border-4 w-64 h-64' src='/Profile.webp'/>
      </div>

      </div>

      </div>

    </>
  );
}