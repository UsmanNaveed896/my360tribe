import React, { useState } from 'react';

import Img from '../assets/Ellipse1.svg';
import Img2 from '../assets/Ellipse2.svg';

const MainContainer = () => {
    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <div className="bg-gradient-to-b from-blue-900 to-black h-[100vh]">
                <div className="px-6 pt-24">
                    <div className="grid md:grid-cols-2 grid-cols-1  items-center">
                        <div className='colum1'>
                            <div className="text-white font-semibold text-6xl text-center">
                                Welcome Back
                            </div>
                        </div>

                        <div className='column2'>
                            <div className='relative md:block hidden'>
                                <img className='absolute z-1' src={Img} alt='buble' />
                            </div>
                            <div className='flex justify-center relative z-[999]'>
                                <div className='border border-white rounded-xl py-4 px-24 mt-12'>
                                    <div className='content'>
                                        <h1 className='text-white font-bold text-3xl mt-5'>Login</h1>
                                        <h1 className='text-white mt-2 '>Glad you’re back.!</h1>
                                        <div className='inputs mt-5'>
                                            <input
                                                className='rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white'
                                                placeholder='User Name'
                                            />

                                            <div>
                                                <input className='rounded-xl bg-[transparent] border border-white pl-2 pr-16 py-2 my-4 text-white placeholder-white' placeholder='Password' />
                                            </div>
                                            <button className=' text-white bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-bold py-2 px-4 rounded '>Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <div className="text-white font-NotoSans font-semibold text-6xl leading-none w-678px h-131px">
      Welcome Back
    </div>
    {/* Add more content or buttons for the dialog here */}
            {/* </div>
</div>  */}



            {/* <div
                className="absolute top-824.82 left-1169.84 w-220 h-220 transform rotate-28.5"
                style={{
                    backgroundImage: "linear-gradient(180deg, #0A194E 0%, #3E4779 100%)",
                    borderRadius: '50%',
                    overflow: 'hidden',
                }}
            >
                */}
            {/* <img
                    src={img}
                    alt="Ellipse1"
                    className="absolute top-81 left-749 w-302 h-302"
                />

                <img
                    src={img2}
                    alt="Ellipse2"
                    className="w-full h-full"
                /> */}
            {/* </div> */}
        </>
    );
};

export default MainContainer;
