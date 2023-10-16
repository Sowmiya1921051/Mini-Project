import React from 'react';
import firstImg from '../../assets/Hero/firstImg.svg';
import secondImg from '../../assets/Hero/secondImg.svg';
import thirdImg from '../../assets/Hero/thirdImg.svg'

function Hero() {
  return (
    <div>
      <div className="p-4 text-white flex items-center justify-between pl-24 pr-24 bg-cover bg-center">
        <div>
          <h1 className="text-5xl w-full text-60 font-oxanium font-400 capitalize break-words mt-14">
            EXPLORE, CREATE AND
            <br /> SELL YOUR NFT’S ON
            <br /> SHIHAMI
          </h1>
          <p className="text-white text-25 font-Lato font-thin capitalize break-words mt-14">
            Shihami is the World’s first and largest NFT/Avatar marketplace
          </p>

          <button className="bg-violet w-32 h-10 text-white rounded-lg mt-28 font-oxanium">
            Explore More
          </button>
          <button className="border border-white bg-transparent w-32 h-10 text-white rounded-lg ml-4 font-oxanium mt-28">
            Create
          </button>
        </div>

        <div>
          <img className="w-3/4 ml-auto mt-8" src={firstImg} />
        </div>
      </div>

      <div className="bg-cover bg-center p-28" style={{ backgroundImage: `url(${secondImg})` }}>
      
      </div>
      <div className="absolute top-3/4  w-64">
          <img src={thirdImg} />
        </div>

    </div>
  );
}

export default Hero;
