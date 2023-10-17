import React from 'react'
import Wallet from '../../assets/Work/Wallet.svg'
import Collection from '../../assets/Work/Collection.svg'
import Nft from '../../assets/Work/Nft.svg'
import Sale from '../../assets/Work/Sale.svg'
import Blur from '../../assets/Work/Blur.svg'

function Work() {

    const WorkData=[
        {name:"Set up your wallet",Image:Wallet,arrow :true},
        {name:"Create your collection",Image:Collection,arrow :true},
        {name:"Add your NFTs",Image:Nft,arrow :true},
        {name:"List them for sale",Image:Sale,arrow :false}
    ]

  return (
    <div className='text-white mt-20 pl-24 pr-24 p-4'>
        <img className='absolute w-96 ml-96 mt-5' src={Blur} alt="Background Image" />
      <h1 className="text-white text-center mt-28 text-4xl font-oxanium font-medium leading-1.3 break-words relative"> How it works  </h1>


    <div className='flex justify-around w-full'>
        
    {WorkData.map(({name,Image,arrow},i)=>{
        return(
            <div className='flex items-center mt-14' key={i}>  
                <div>
                    <div className='w-20 rounded-full bg-white bg-opacity-10 p-5 mb-8'>
                        <img className='w-14' src={Image}/>
                    </div>
                    <div>{name}</div>
                </div>
                <div className='mb-10'>  {arrow ? <div className='text-3xl'>{"------->"}</div>  :  ""}  </div>
            </div>
        )
       
})}
    </div>
    </div>
  )
}

export default Work


