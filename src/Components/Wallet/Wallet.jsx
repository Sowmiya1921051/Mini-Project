import React from 'react';
import metamask from '../../assets/Wallet/metamask.svg'
import binance from '../../assets/Wallet/binance.svg'
import trustwallet from '../../assets/Wallet/trustwallet.svg'
import alpha from '../../assets/Wallet/alpha.svg'
import coingecko from '../../assets/Wallet/coingecko.svg'



const walletData = [
  { name: "Metamask", image: metamask },
  { name: "Binance", image: binance },
  { name: "Trust Wallet", image: trustwallet },
  { name: "Alpha", image: alpha },
  { name: "CoinGecko", image: coingecko }
];

const Wallets = () => {
  return (
    <div className='text-white mt-20 pl-24 pr-24 p-4'>
      <p className="text-center text-lg font-Lato font-normal capitalize break-words" style={{
        background: 'linear-gradient(to right, #FFFFFF, #F81DFB)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Trade with the world’s most trusted and fastest wallets
      </p>

      <h1 className='text-white text-7xl font-oxanium font-medium capitalize break-word text-center mt-5'>wallets we support</h1>

      <div className="flex space-x-4 items-center justify-between mt-14">
        {walletData.map((wallet, index) => (
          <div key={index} className="h-full rounded-lg bg-white bg-opacity-10 p-8">
            <div className="w-40 h-40 rounded-full bg-white bg-opacity-10 p-4 mb-8">
              <img className="m-4 w-24 h-24 object-cover rounded-full" src={wallet.image} alt={wallet.name} />
            </div>
            <p className="text-center font-oxanium capitalize break-words">{wallet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wallets;