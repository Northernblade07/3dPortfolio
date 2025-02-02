import React, { useState } from 'react'
import { navLinks } from '../constant'

const Navbar = () => {
  const [open , setOpen] = useState(false)
  const toggelMenu =()=>{
    setOpen((prevOpen)=>!prevOpen)
  }

  const NavItems =()=>{
    return(
      <ul className='nav-ul'>
        {
          navLinks.map((item)=>{
            return <li  key={item.id} className='nav-li'>
              <a href={item.href}>
              {item.name}
              </a>
              </li>
          })
        }
        
      </ul>
    )
  }
  return (
    <header className=' fixed top-0 left-0 right-0 z-50 bg-black/90 text-white '>
        {/* <max-w-7xl provides cosistent spacing from left and right side */}
      <div className='max-w-7xl  mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Prashant Bhandari</a>
                <button  onClick={toggelMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex '> 
                   <img src={open ?'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className='w-6 h-6'/>
                </button>
         <nav className='sm:flex hidden'>
          <NavItems/>
          </nav>       
        </div>

      </div>

      <div className={`nav-sidebar ${open?'max-h-screen':'max-h-0'}`}>
          <nav className='p-5'>
            <NavItems/>
          </nav>
      </div>
    </header>
  )
}

export default Navbar
