import React from 'react'
import image1 from '../../assets/Wallet/firstImg.svg'
import image2 from '../../assets/Wallet/secondImg.svg'
import image3 from '../../assets/Wallet/thirdImg.svg'
import image4 from '../../assets/Wallet/fourthImg.svg'
import image5 from '../../assets/Wallet/fifthImg.svg'

function Wallet() {
  const imageUrls = [image1, image2, image3, image4, image5];
  const names = ["Metamask", "Binance", "Trust wallet", "Alpha", "CoinGecko"]
  return (
    <div className='text-white mt-20 pl-24 pr-24 p-4'>
      <p className="text-center text-lg font-Lato font-normal capitalize break-words" style={{
        background: 'linear-gradient(to right, #FFFFFF, #F81DFB)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Trade with world’s most trusted and fastest wallets
      </p>

      <h1 className='text-white text-7xl font-oxanium font-medium capitalize break-word text-center mt-5'>wallets we support</h1>



      <div className="flex space-x-4 items-center justify-between mt-14">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className=" h-full rounded-lg bg-white bg-opacity-10 p-8">
            <div className="w-24 h-24 rounded-full bg-white bg-opacity-10 p-4 mb-8">
              <img className="w-full h-full object-cover rounded-full " src={imageUrl} />
            </div>
            <p className=" text-center font-oxanium capitalize break-words">{names[index]}</p>
          </div>
        ))}
      </div>

    </div>


  )
}

export default Wallet