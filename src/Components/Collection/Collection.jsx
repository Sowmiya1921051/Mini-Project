import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Image1 from '../../assets/Collection/Image1.svg';
import Image2 from '../../assets/Collection/Image2.svg';
import Image3 from '../../assets/Collection/Image3.svg';
import Image4 from '../../assets/Collection/Image4.svg';
import Image5 from '../../assets/Collection/Image5.svg';
import Image6 from '../../assets/Collection/Image6.svg';
import Image7 from '../../assets/Collection/Image7.svg';

function Collection() {
  return (
    <div className='text-white mt-20 pl-24 pr-24 p-4'>
      <p
        className="text-center text-lg font-Lato font-normal capitalize break-words mt-14"
        style={{
          background: 'linear-gradient(to right, #FFFFFF, #F81DFB)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Explore our newly released NFT collection
      </p>

      <div className='text-white text-6xl text-center font-medium font-oxanium capitalize break-words mt-8'>
        Our collection
      </div>

      <div className='items-center'>
        <div className='flex relative ml-24 mt-28'>
          <img
            className="w-48 absolute mt-16 group hover:scale-110 hover:opacity-75 hover:shadow-md transition-transform duration-300 ease-in-out z-10"
            src={Image4}
            alt="Image 1"
          />

          <img
            src={Image7}
            className="w-48 absolute mt-16 group hover:scale-110 hover:opacity-75 hover:shadow-md transition-transform duration-300 ease-in-out"
            alt="Image 7"
            style={{ marginLeft: '75%' }}
          />

          <img
            src={Image3}
            className="w-56 ml-20 absolute mt-10 group hover:scale-110 hover:opacity-75 hover:shadow-md transition-transform duration-300 ease-in-out z-10"
            alt="Image 2"
          />

          <img
            className="w-56 absolute mt-10 group hover:scale-110 hover:opacity-75 hover:shadow-md transition-transform duration-300 ease-in-out"
            src={Image6}
            style={{ marginLeft: '65%' }}
          />

          <img
            className="w-64 ml-48 absolute mt-5 group hover:scale-110 hover:opacity-75 hover:shadow-md transition-transform duration-300 ease-in-out z-10"
            src={Image2}
            alt="Image 3"
          />


          <img
            className="w-64 absolute mt-5 group hover:scale-110 hover:opacity-75 hover:shadow-md transition-transform duration-300 ease-in-out"
            src={Image5}
            alt="Image 5"
            style={{ marginLeft: '50%' }}
          />
        </div>
        <img
          className="w-80 relative group hover:scale-110 hover:opacity-75 hover:shadow-md transition-transform duration-300 ease-in-out z-10"
          src={Image1}
          alt="Image 4"
          style={{ marginLeft: '35%' }}
        />

      </div>
    </div>
  );
}

export default Collection;
