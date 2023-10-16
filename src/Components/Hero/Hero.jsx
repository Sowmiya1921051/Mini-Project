import React from 'react'
import firstImg from '../../assets/Hero/firstImg.svg'
function Hero() {
    return (
        

            <div className='p-4 text-white flex items-center justify-between pl-16 pr-16'>
                <div >
                    <h1 className='text-4xl w-full text-54 font-oxanium font-400 capitalize break-words'>EXPLORE, CREATE AND<br /> SELL YOUR NFT’S ON<br /> SHIHAMI</h1>
                    <p class="text-white text-25 font-Lato font-thin capitalize break-words mt-4  ">
                        Shihami is the World’s first and largest NFT/Avatar marketplace
                    </p>
                
                    <button className='bg-violet w-32 h-10 text-white rounded-lg mt-20 font-oxanium'>Explore More</button>
                    <button class="border border-white bg-transparent w-32 h-10 text-white rounded-lg ml-4 mt-20 font-oxanium">Create</button>


                </div>

                <div>
                    <img className='w-96  ' src={firstImg} />
                </div>
            </div>



        
    )
}

export default Hero