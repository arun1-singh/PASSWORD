import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed  w-full '>

      <div className='logo font-bold text-white text-2xl'>
      <span className='bg-green-700'> &lt;</span>
      
       <span>Pass</span><span className='bg-green-500'>OP/ &gt;</span>
       
      </div>
    <div className='flex justify-center items-center'>Created With <img className='w-7 mx-2' src="icons/heart.png" alt=""/> by ArunSingh
    </div>
    </div>
  )
}

export default Footer