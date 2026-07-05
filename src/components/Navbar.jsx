import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white md:w-full md:px-90'>
      <div className='mycontainer flex justify-between items-center px-4 md:py-5 py-10 h-14'>


      <div className="logo font-bold text-2xl ">
        <span className='text-green-500'>&lt;</span>
        Pass
        <span className='text-green-500'>OP/&gt;</span>
        </div>
      {/* <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold'  href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
        </li>
      </ul> */}
      <div className='bg-green-600 rounded-full hover:bg-green-500 cursor-pointer'>

      <div className='invert hover:invert-0'>
        <button className='flex justify-between items-center'>
          <img className='md:w-10 w-10 md:p-1 p-[4px]' src="/icons/github.svg" alt="" />
          <span className='px-1 pr-2 md:text-lg text-xl  font-bold text-black'>GitHub</span>
        </button>
      </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar
