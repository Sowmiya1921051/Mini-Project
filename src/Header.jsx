import React from 'react'
import Logo from "./assets/Rectangle4.svg"
import hihami from './assets/hihami.svg'

function Header() {
  return (
    <div className='flex p-4 justify-between'>
      <div className='flex'>
      <img  src={Logo} className='w-10 h-10'/>
      <img src={hihami} className='w-16 h-10 font-bold'/>
      {/* <hi className="text-white font-bold mt-1.5">HIHAMI</hi> */}
      </div>
      


      <div className=''>
      <ul className='text-white text-sm flex'>
        <li className="mr-4">EXPLORE</li>
        <li className="mr-4">TRENDING NFTS</li>
        <li className="mr-4">AUCTIONED NFTS</li>
        <li className="mr-4">INFLUENCERS</li>
      </ul>
      </div>



      <div>
       
        <button className='bg-custom-color w-32 h-10 text-white '>Connect Wallet</button>
        
      </div>

    </div>
  )
}

export default Header