import React, { useState } from 'react'
import Img from '../../assets/Group 1000006061.png'
import Img1 from '../../assets/Group 1000006062.png'
import Img2 from '../../assets/Group 1000006063.png'
import Img3 from '../../assets/Group 1000006064.png'
import Img4 from '../../assets/Group1000006234.png'

import PicsModal from '../../Popups/picsModal'

const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState({
        mod1: false,
        mod2: false,
        mod3: false,
        mod4: false,
    });

    const img1= 
        {
            heading: 'Service Organizations',
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        }
       
        const img2=  {
            heading: 'Concierge',
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        }
        const img3= {
            heading: 'Operators',
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        }
        const img4=  {
            heading: 'Peer Support Members',
            text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        }
        const handleCancel = () => {
            // Implement cancel logic here
            console.log('Cancelling...');
            setIsModalOpen(false);
          };
    const Gradient = 'linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)';
    return (
        <div className='bg-[#070c1f] mt-16 bg-cover' style={{ backgroundImage: `url(${Img4})`, }}>
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] mt-16'>
                    <div className='flex justify-end'>
                        <div>
                            <h1 className='text-[55px] text-white'>Welcome To <br></br>
                                My 360 Tribe</h1>
                            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting<br></br> industry.
                                Lorem Ipsum has been the industry's standard dummy text <br></br> ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className='flex justify-between mt-32 pb-16'>
                    <div>
                            <img className='cursor-pointer' src={Img3} alt='pic' onClick={() => setIsModalOpen((st) => ({
                                ...st,
                                mod1: false,
                                mod2: false,
                                mod3: false,
                                mod4: true,
                            }))} />
                        </div>
                        <div>
                            <img className='cursor-pointer' src={Img} alt='pic' onClick={() => setIsModalOpen((st) => ({
                                ...st,
                                mod1: true,
                                mod2: false,
                                mod3: false,
                                mod4: false,
                            }))} />
                        </div>
                        <div>
                            <img className='cursor-pointer' src={Img1} alt='pic' onClick={() => setIsModalOpen((st) => ({
                                ...st,
                                mod1: false,
                                mod2: true,
                                mod3: false,
                                mod4: false,
                            }))} />
                        </div>
                       
                        <div>
                            <img className='cursor-pointer' src={Img2} alt='pic' onClick={() => setIsModalOpen((st) => ({
                                ...st,
                                mod1: false,
                                mod2: false,
                                mod3: true,
                                mod4: false,
                            }))} />
                        </div>
                    </div>
                    <PicsModal isOpen={isModalOpen} onCancel={handleCancel} data={isModalOpen.mod1 ? img1 : isModalOpen.mod2 ? img2 : isModalOpen.mod3 ? img3 : img4}/>
                </div>
            </div>
        </div>
    )
}

export default Homepage