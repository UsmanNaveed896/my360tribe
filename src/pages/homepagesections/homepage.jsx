import React from 'react'
import Img from '../../assets/Group 1000006061.png'
import Img1 from '../../assets/Group 1000006062.png'
import Img2 from '../../assets/Group 1000006063.png'
import Img3 from '../../assets/Group 1000006064.png'
const Homepage = () => {
    const Gradient = 'linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)';
    return (
        <div className='bg-[#070c1f]' >
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
                            <img src={Img} alt='pic' />
                        </div>
                        <div>
                            <img src={Img1} alt='pic' />
                        </div>
                        <div>
                            <img src={Img2} alt='pic' />
                        </div>
                        <div>
                            <img src={Img3} alt='pic' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage