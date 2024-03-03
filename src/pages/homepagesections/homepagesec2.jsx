import React from 'react'
import Img from '../../assets/Group 1000006079.png'
const Homepagesec2 = () => {
    return (
        <div className='bg-[#d1d8f5] pb-16' >
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] mt-16'>
                    <div className='grid grid-cols-2 items-center gap-16'>
                        <div className='colum1'>
                            <img src={Img} alt='chart' />
                        </div>
                        <div className='column2'>
                            <div className='flex justify-center'>
                                <h1 className='border-b border-[#0a194e] text-[#0a194e] border-b-4 text-center font-bold text-5xl'>Who We Are</h1>

                            </div>
                            <p className='text-[29px] font-semibold text-[#0a194e] mt-12'>Lorem Ipsum is simply dummy <br></br> text of the printing</p>
                            <p className='text-[19px]  text-[#0a194e] mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <ul className='mt-6 font-bold'>
                                <li><i class="fa fa-check-circle mr-2 py-2" aria-hidden="true"></i>Lorem Ipsum is simply dummy text</li>
                                <li><i class="fa fa-check-circle mr-2 py-2" aria-hidden="true"></i> Lorem Ipsum is simply dummy text</li>
                                <li><i class="fa fa-check-circle mr-2 py-2" aria-hidden="true"></i>Lorem Ipsum is simply dummy text</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepagesec2