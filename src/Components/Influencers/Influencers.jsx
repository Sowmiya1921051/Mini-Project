import React from 'react';
import thirdImg from '../../assets/Hero/thirdImg.svg';
import Image1 from '../../assets/Inflencers/Image1.svg';
import Image2 from '../../assets/Inflencers/Image2.svg';
import Image3 from '../../assets/Inflencers/Image3.svg';
import Image4 from '../../assets/Inflencers/Image4.svg';
import Image5 from '../../assets/Inflencers/Image5.svg';
import Image6 from '../../assets/Inflencers/Image6.svg';
import Image7 from '../../assets/Inflencers/Image7.svg';
import Image8 from '../../assets/Inflencers/Image8.svg';
import User1 from '../../assets/Inflencers/User1.svg';
import User2 from '../../assets/Inflencers/User2.svg';
import User3 from '../../assets/Inflencers/User3.svg';
import User4 from '../../assets/Inflencers/User4.svg';
import Tick from '../../assets/Inflencers/Tick.svg';

function Influencers() {
    const InfluenceData = [
        { first: Image1, second: Image2, third: User1 },
        { first: Image3, second: Image4, third: User2 },
        { first: Image5, second: Image6, third: User3 },
        { first: Image7, second: Image8, third: User4 },
        { first: Image1, second: Image2, third: User1 },
        { first: Image3, second: Image4, third: User2 },
        { first: Image5, second: Image6, third: User3 },
        { first: Image7, second: Image8, third: User4 },
    ];

    return (
        <div className='relative'>
            <img src={thirdImg} className='absolute bottom-24 ' />
            <div className='text-white mt-40 pl-24 pr-24 p-4'>
                <p className='text-white text-lg font-thin text-capitalize overflow-wrap'>
                    Watch and Follow Celebrities To Get The Best Collection Of NFTs
                </p>
                <h1 className='text-7xl font-oxanium font-medium mt-7'>Joined Influencers</h1>

                <div className='flex'>
                    <button className='w-44 h-full bg-rgba-pink-05 border border-violet font-oxanium p-2 mt-5 ml-auto mr-10'>
                        View all
                    </button>
                </div>

                <div className='flex flex-wrap'>
                    {InfluenceData.map(({ first, second, third }, index) => (
                        <div className='bg-white bg-opacity-5 rounded-lg p-4 w-72 ml-5 mt-12' key={index}>
                            <div className='flex justify-between'>
                                <img className='w-36 h-36 relative' src={first} />
                                <img className='w-36 h-36 ml-1' src={second} />
                            </div>

                            <div>
                                <img className='absolute top-0 w-16 ml-7' src={third} style={{ marginTop: '26%' }} />
                            </div>

                            <div className='flex mt-12'>
                                <p>John Smith</p>
                                <img className='ml-2' src={Tick} />
                            </div>

                            <div className='flex justify-between'>
                                <p className='text-gray-300 text-sm font-heebo mt-3'>@Jsmith</p>
                                <div>
                                    <button className='w-28 rounded-3xl border border-violet font-lato p-2'>Follow</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Influencers;
