import React from 'react'

const Footer = () => {
    return (
        <div className='w-full fixed bottom-0 bg-slate-800 flex flex-col justify-center items-center text-white md:gap-2 md:p-4 p-1'>
            <div className="logo font-bold md:text-3xl text-2xl">
                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>OP/&gt;</span>
            </div>
            <div className='flex justify-center items-center md:text-xl text-lg gap-1 font-semibold pl-1'>
                Created <span className='text-green-500'>By</span> Ankit
                <lord-icon
                    src="https://cdn.lordicon.com/shcfcebj.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#ffffff,secondary:#16c72e"
                >
                </lord-icon>
             
            </div>
        </div>
    )
}

export default Footer
