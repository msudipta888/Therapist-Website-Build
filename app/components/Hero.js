"use client"
import { Cross, X } from 'lucide-react'
import React, { useState } from 'react'
import {HiMenu} from 'react-icons/hi'

const Hero = () => {
  const menu =[
    {title:'home',value:'Home',id:'home'},
    {title:'about',value:'About',id:'about'},
    {title:'service',value:'Service',id:'service'},
    {title:'faq',value:'FAQ',id:'faq'},
    {title:'contact',value:'Contact',id:'contact'}
  ]
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div id='home'>
<nav className="relative bg-white  md:px-6 py-2 ml-2 flex items-center justify-between">
<div >
  <div className="flex items-center space-x-5">
    <div className="w-24 h-24 flex-shrink-0">
     <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 600 300"
  className="w-[80%] md:w-full h-full -ml-4"
>
  <line x1="0" y1="300" x2="0" y2="0" stroke="#1E3A8A" strokeWidth="4" />
  <line x1="0" y1="300" x2="600" y2="300" stroke="#1E3A8A" strokeWidth="4" />
  <line x1="0" y1="0" x2="400" y2="300" stroke="#1E3A8A" strokeWidth="4" />
  <line x1="350" y1="50" x2="600" y2="300" stroke="#1E3A8A" strokeWidth="4" />
  <line x1="0" y1="150" x2="600" y2="300" stroke="#1E3A8A" strokeWidth="4" />
  <line x1="0" y1="300" x2="350" y2="50" stroke="#1E3A8A" strokeWidth="4" />
  <circle cx="100" cy="180" r="15" stroke="#1E3A8A" strokeWidth="4" fill="none" />
</svg>

    </div>

    <div>
      <h2 className="text-base font-semibold md:text-xl -ml-7  text-blue-900 font-serif">
        Serena Blake, PsyD
      </h2>
      <p className="mt-1 text-base font-semibold md:text-xl -ml-7 text-blue-700 font-serif">
        Psychological Services
      </p>
    </div>
  </div>
</div>

  <div >
    
       <ul className='hidden  sm:flex space-x-6'>
       {
         menu.map((item)=>(
          <li key={item.title} className='text-black text-lg h-[35px] w-[74px] text-center rounded-md hover:bg-white cursor-pointer'>
                  <a href={`#${item.id}`}         className="block w-full h-full hover:border-b-2 hover:border-sky-500 transition"
>{item.value}</a>

          </li>
         ))
       }
       </ul>
       <button 
       className='block top-0  h-8 w-8 rounded-full px-1 sm:hidden text-2xl hover:bg-sky-200 z-50 relative'
       onClick={()=>{
        setIsOpen((o)=>!o)
       }}
       >
        {isOpen?< X  size={27}/>: <HiMenu size={27}/>}
       </button>
      
  </div>

{/* Mobile Menu */}
<ul
  className={`
    fixed top-0 right-0 w-72 h-screen bg-slate-800 shadow-2xl flex flex-col pt-16
    transform transition-transform duration-300 ease-in-out
    z-40
    sm:hidden
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
>
  {menu.map((item) => (
    <li
      key={item.title}
      className="border-b border-slate-600 last:border-b-0"
    >
      <a
        href={`#${item.id}`}
        className="block px-8 py-5 text-slate-200 hover:bg-slate-700 hover:text-white transition-all duration-200 text-lg font-medium"
        onClick={() => setIsOpen(false)}
      >
        {item.value}
      </a>
    </li>
  ))}
</ul>

{/* Overlay */}
{isOpen && (
  <div 
    className="fixed inset-0 bg-black/50 z-30 sm:hidden transition-opacity duration-300"
    onClick={() => setIsOpen(false)}
  />
)}

</nav>

      <div className='relative w-full  bg-white h-screen overflow-hidden shadow-xl'>
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full  h-full object-cover">
          <source  src='/video/bmg.mp4' type='video/mp4'/>
        </video>
       <div className="relative z-10 flex items-center justify-center h-full bg-black/50 text-white text-center px-4">
    <div className='flex flex-col items-center justify-center gap-6'>
      <h1 className="text-5xl font-serif mb-4">Psychological Care for <br /><br />
Change, Insight, and Well-Being</h1> 
      <p className="text-xl  font-thin">Offering individual psychotherapy for adults via telehealth in Michigan and <span className='underline'> most U.S. states</span> through PSYPACT participation</p>

   
<button className='text-base  font-semibold uppercase cursor-pointer '>
<svg width="280" height="115" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" class="ellipse-button">
  <a href="#">
    <ellipse cx="100" cy="30" rx="90" ry="25" fill="#87CEEB" />
    <text x="100" y="35" font-size="9" text-anchor="middle" fill="white">Schedule a Consultation</text>
  </a>
</svg>
</button>
 

    </div>
  </div>
      </div>
      
    </div>
  )
}

export default Hero