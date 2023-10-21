import React from 'react';
import thirdImg from '../../assets/Hero/thirdImg.svg';
import Image1 from '../../assets/Trending/Image1.svg';
import Image2 from '../../assets/Trending/Image2.svg';
import Image3 from '../../assets/Trending/Image3.svg';
import Image4 from '../../assets/Trending/Image4.svg';
import Like from '../../assets/Trending/Like.svg';
import userProfile from '../../assets/Trending/userProfile.svg';
import Ethereum from '../../assets/Trending/Ethereum.svg';

function Trending() {
    const Images = [
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
        { image: Image4 },
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
        { image: Image4 }
    ];

    return (
        <div className='relative'>
            <img src={thirdImg} className='absolute bottom-1/4 ' />
            <div className='text-white mt-20 pl-24 pr-24 p-4'>

                <p className='text-white text-lg font-thin text-capitalize overflow-wrap'>Most Loved NFTs of The Time</p>
                <h1 className='text-7xl font-oxanium font-medium mt-7'>Hot Trending NFTs</h1>

                <div className='flex'>
                    <button className='w-44 h-full bg-rgba-pink-05 border border-violet font-oxanium p-2 mt-5 ml-auto mr-10'>View all</button>
                </div>


                <div className='flex flex-wrap'>
                    {Images.map((item, index) => (
                         <div className="bg-white bg-opacity-5 rounded-lg p-4 w-72 mt-12 ml-5 group hover:shadow-md hover:scale-110 transition duration-300" key={index}>
                            <div className="relative w-64">
                                <img src={item.image} alt="Your Image" />
                                <div className="absolute top-0 left-0 flex p-2 ml-48 bg-white bg-opacity-5 rounded-tr-lg rounded-bl-lg">
                                    <img src={Like} alt="Like Icon" />
                                    <p className="ml-2">341</p>
                                </div>
                            </div>

                            <div className='mt-5 flex items-center'>
                                <img className='mt' src={userProfile} />
                                <div className='ml-3'>
                                    <p className='text-lg font-oxanium font-normal capitalize tracking-wide break-words'>Monkey Ape</p>
                                    <p className='text-xs font-thin text-capitalize overflow-wrap'>By @JSmith</p>
                                </div>
                            </div>

                            <div className='mt-3 flex justify-between'>
                                <div>
                                    <p className=' text-base font-oxanium'>On Sale 🔥</p>
                                </div>
                                <div className='flex'>
                                    <img className='w-4 mb-5' src={Ethereum} />
                                    <div className='ml-1'>
                                        <p className='text-lg font-oxanium font-normal capitalize tracking-wide break-words'>4.89 ETH</p>
                                        <p className='text-xs '>($ 654,874.86)</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button className='w-full h-full bg-rgba-pink-05 border border-violet font-oxanium p-2 mt-5'>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trending;
