import React from 'react'
import Logo from "../../assets/Header/firstImg.svg"
import uTube from '../../assets/Footer/uTube.svg'
import Twitter from '../../assets/Footer/Twitter.svg'
import Fb from '../../assets/Footer/Fb.svg'
import Google from '../../assets/Footer/Google.svg'

function Footer() {
    const icons = [
        { icon: uTube },
        { icon: Twitter },
        { icon: Fb },
        { icon: Google },
    ];

    const About =[
        {about : "About NFT"},
        {about : "Live Auctions"},
        {about : "NFT Blog"},
        {about : "Activity"},
    ]

    const Support=[
        {support : "Help & Support"},
        {support : "Item Details"},
        {support : "Author Profile"},
        {support : "Collection"},
    ]

    return (
        <div className='text-white mt-20 pl-24 pr-24 p-4'>
            <div className='flex justify-between'>

                <div>
                    <img src={Logo} className='w-14 h-14' />
                    <h1 className="font-bold mt-3 text-3xl font-oxanium">HIHAMI</h1>
                </div>

                <div>
                    <p className='text-light-color text-base font-worksan'>Shihami is the world’s leading NFTs<br /> marketplace where you can discover,<br /> sell and bid NFTs and get rich</p>
                    <div className='flex w-40 gap-6 mt-8'>
                    {icons.map((iconObject, index) => (
                        <div className='' key={index}>
                            <img className='' src={iconObject.icon}  />
                        </div>
                    ))}
                    </div>
                    <p className='text-light-color font-worksan mt-10'>All rights reserved @Killer_kin</p>
                </div>

                <div className=''>
                    <h3>About</h3>
                    {About.map(({about},index)=>(
                        <div key={index}>
                            <p className='text-sm text-light-color mt-5'>{about}</p>
                        </div>
                    ))}
                   
                </div>

                <div>
                    <h3>Support</h3>
                    {Support.map(({support},index)=>(
                        <div key={index}>
                            <p className='text-sm text-light-color mt-5'>{support}</p>
                        </div>
                    ))}
                   
                </div>

            </div>
        </div>
    );
}

export default Footer;
