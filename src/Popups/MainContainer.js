import React, { useState } from 'react';

import img from '../assets/Ellipse1.svg';
import img2 from '../assets/Ellipse2.svg';

const MainContainer = () => {
    const [isOpen, setIsOpen] = useState(open);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-gradient-to-b from-blue-900 to-black w-full h-full relative">
                <div>
                    <div className="grid grid-cols-2">
                        {/* First grid */}
                        <div className='colum1'>
                            <div className="text-white font-NotoSans font-semibold text-6xl leading-none absolute left-10 top-1/2 transform -translate-y-1/2">
                                Welcome Back
                            </div>
                        </div>
                        {/* Second grid */}
                        <div className='column2 flex items-center justify-center'>
                            <div className="shadow-xl border border-solid border-gray-300 rounded-lg">
                                <div className="border border-solid border-gray-300 rounded-lg">
                                    <div className="bg-blue-900 w-full h-full relative text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Login</div>
                                    <input
    type="text"
    name="username"
    className=" bg-blue-900 w-full h-full relative w-98 h-27 text-lg font-normal leading-27 tracking-normal text-left"
    placeholder="Username"
/>


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

            </div>

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
        </div>
    );
};

export default MainContainer;
