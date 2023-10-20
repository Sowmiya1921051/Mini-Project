import React from 'react'
import Arrow from '../../assets/Drop/Arrow.svg'

function Drop() {
  return (
    <div className='text-white mt-20 pl-24 pr-24 p-4'>
        <p className='font-oxanium  text-4xl font-bold text-center'>Ready for Next NFT Drop?</p>

        <div className="w-96 mx-auto mt-10 p-1 border border-violet rounded-lg flex">
        <input
        type="text"
        className="w-full px-3 py-2 bg-transparent border-0 outline-none  "
        placeholder="info@gmail.com"
        />
        <div className='pr-3 bg-violet pl-3 rounded-lg'>
        <img className='w-8 mt-4' src={Arrow} /> 
        </div>
    </div>


    </div>
  )
}

export default Drop