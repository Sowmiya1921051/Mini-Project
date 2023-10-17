import React from 'react'
import Wallet from '../../assets/Work/Wallet.svg'
import Collection from '../../assets/Work/Collection.svg'
import Nft from '../../assets/Work/Nft.svg'
import Sale from '../../assets/Work/Sale.svg'
import dottedLine from '../../assets/Work/dottedLine.svg'
import Blur from '../../assets/Work/Blur.svg'

function Work() {

    const WorkData=[
        {name:"Set up your wallet",Image:Wallet},
        {name:"Create your collection",Image:Collection},
        {name:"Add your NFTs",Image:Nft},
        {name:"List them for sale",Image:Sale}
    ] 

  return (
    <div className='text-white mt-20 pl-24 pr-24 p-4'>
        <img className='absolute w-96 ml-96' src={Blur} alt="Background Image" />
      <h1 className="text-white text-center mt-28 text-4xl font-oxanium font-medium leading-1.3 break-words relative"> How it works  </h1>

          <div className='flex justify-around mt-16'>
              {WorkData.map((data, index) => (

                  <div key={index}>
                      <div className='rounded-full bg-white bg-opacity-10 p-5 mb-8'>
                          <img className='w-9' src={data.Image} />
                      </div>
                      
                  </div>

              ))}
          </div>

          <div className='flex justify-around'>
              {WorkData.map((data, index) => (

                  <div key={index}>
                      <p className='text-center'>{data.name}</p>
                      
                  </div>

              ))}
          </div>

    </div>
  )
}

export default Work


