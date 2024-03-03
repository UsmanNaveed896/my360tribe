import React from 'react'
import Img from '../../assets/logo1.png'
const Footer = () => {
    const gradient = 'linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)';
    const buttonGradient = 'linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)';

    return (
        <div className='px-12 py-8 bg-[#3e3b3b]'>
            <div className='flex justify-between'>
                <div className='logo text-white'>
                    <img src={Img} alt='logo' />
                    <p className='mt-4 font-bold'>NEW YORK OFFICE</p>
                    <p>Lorem Ipsum is simply dummy text</p>
                    <p className='mt-12 font-bold'>WASHINGTON, D.C. OFFICE</p>
                    <p>Lorem Ipsum is simply dummy text</p>
                </div>

                <div className='logo text-white'>
                    <p className='font-bold text-xl'>Lorem Ipsum is simply
                        dummy text</p>
                    <div>
                        <input className='bg-[#323030] py-2 pr-16 pl-3 border border-2 border-white rounded-xl mt-6' placeholder='First Name' type='text' />
                    </div>
                    <div>
                        <input className='bg-[#323030] py-2 pr-16 pl-3 border border-2 border-white rounded-xl mt-6' placeholder='Postal Code' type='text' />
                    </div>
                    <div>
                        <input className='bg-[#323030] py-2 pr-16 pl-3 border border-2 border-white rounded-xl mt-6' placeholder='Email' type='text' />
                    </div>
                    <button className='px-[105px] mt-6 font-bold rounded-xl text-white font-bold py-2 text-[15px]' style={{ background: buttonGradient }}>Submit</button>

                </div>
                <div className='txt text-white'>
                    <p className='mt-4 font-bold'>What we do</p>
                    <p>Issues</p>
                    <p>Initiatives</p>
                    <p>Communities</p>
                    <p className='mt-12 font-bold'>Get involved</p>
                    <p>Give</p>
                    <p>Learn</p>
                    <p>Act</p>
                </div>
                <div className='txt text-white'>
                    <p className='mt-4 font-bold'>Why we do it</p>
                    <p>Overview</p>
                   
                    <p className='mt-12 font-bold'>Contact us</p>
                    <div >
                        <ul className='flex gap-2 mt-4 '>
                        <li className=' relative py-2 pb-4 h-8 w-8 rounded-full text-black  text-center bg-[white]'> 
                        <span><i class=" absolute left-3  fa fa-facebook " aria-hidden="true"></i></span></li>
                        <li className='relative py-2 pb-4 h-8 w-8 rounded-full text-black  text-center bg-[white]  '> 
                        <span><i class="absolute left-2  fa fa-twitter " aria-hidden="true"></i></span></li>
                        <li className='relative py-2 pb-4 h-8 w-8 rounded-full text-black  text-center bg-[white]    '> 
                        <span><i class="absolute left-2  fa fa-instagram " aria-hidden="true"></i></span></li>
                        <li className='relative py-2 pb-4 h-8 w-8 rounded-full text-black  text-center bg-[white]    '> 
                        <span><i class="absolute left-2  fa fa-youtube " aria-hidden="true"></i></span></li>
                        <li className='relative py-2 pb-4 h-8 w-8 rounded-full text-black  text-center bg-[white]    '> 
                        <span><i class="absolute left-2  fa fa-linkedin " aria-hidden="true"></i></span></li>
                        </ul>
                    </div>
                </div>

                <div className='txt text-white'>
                    <p className='mt-4 font-bold'>Who we are</p>
                    <p>Our approach</p>
                    <p>Our financials</p>
                    <p>Our mission and history</p>
                    <p>Our partners</p>
                   
                
                </div>
            </div>

        </div>
    )
}

export default Footer