import React from 'react'
import Logo from "../../assets/Header/firstImg.svg"
import hihami from '../../assets/Header/secondImg.svg'
import User from '../../assets/Header/thirdImg.svg'

function Header() {
  return (
    <div className='flex p-4 justify-between items-center'>
      <div className='flex'>
      <img  src={Logo} className='w-10 h-10'/>
      <img src={hihami} className='w-16 h-10 font-bold'/>
      {/* <hi className="text-white font-bold mt-1.5">HIHAMI</hi> */}
      </div>
      


      
      <ul className='text-white text-sm flex'>
        <li className="mr-4">EXPLORE</li>
        <li className="mr-4">TRENDING NFTS</li>
        <li className="mr-4">AUCTIONED NFTS</li>
        <li className="mr-4">INFLUENCERS</li>
      </ul>
    



      <div className='flex items-center space-x-4'>
       
        <button className='bg-violet w-32 h-10 text-white rounded-lg'>Connect Wallet</button>
        <img src={User} className="w-8 h-12 mx-auto rounded-full" alt='User profile'/>
      </div>

    </div>
  )
}

export default Header