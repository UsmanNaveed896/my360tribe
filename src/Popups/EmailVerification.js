import React, { useState } from 'react';
import Img from '../assets/Ellipse1.svg';
import Img2 from '../assets/Ellipse2.svg';
const EmailVerification = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-blue-900 to-black h-[100vh]">
                <div className="px-6 pt-24">
                    <div className="items-center">
                        <div className=''>
                            <div className='relative md:block hidden'>
                                <img className='absolute z-1' src={Img} alt='buble' />
                            </div>
                            <div className='flex justify-center relative z-[999]'>
                                <div className='border border-white rounded-xl py-4 px-24 mt-12'>
                                    <div className='content'>
                                        <h1 className='text-white font-bold text-3xl mt-5 text-center pt-10 py-10'>Please verify your email</h1>
                                        <h1 className='text-white text-center'>You're almost there! We sent an email to</h1>
                                        <h1 className='text-white text-center'>sophia+test14@segment.com</h1>
                                        <h1 className='text-white pt-10 text-center'>Just click on the link in that email to complete your signup. If you don't see it</h1>
                                        <h1 className='text-white text-center'>you may need to check your spam folder.</h1>
                                        <h1 className='text-white pt-10 text-center'>Still can't find the email?</h1>
                                        <div className='pt-6 py-10'>
                                        <div className="flex justify-between py-10">
                                            <button className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-bold py-2 px-4 rounded w-full h-55 p-14 gap-10 text-center pt-4 ">
                                            Resend Email
                                            </button>
                                            <button className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-bold py-2 px-4 rounded w-full h-55 p-14 gap-10 text-center pt-4 ">
                                                Verify
                                            </button>
                                        </div> 
                                        </div>        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default EmailVerification;