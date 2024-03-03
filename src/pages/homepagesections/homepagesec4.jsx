import React from 'react'
import Img from '../../assets/Group 1000006028.png'
const Homepagesec4 = () => {
    return (
        <div className='bg-[#d1d8f5] pb-16' >
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] mt-16'>
                    <div className='flex justify-center'>
                        <div>
                            <h1 className='text-[#0a194e] text-center font-bold text-5xl'>Who We Are</h1>
                            <p className='text-[#0a194e] text-[22px] mt-6'>Standard dummy text ever since the 1500s, when an unknown printer took a galley<br></br>
                                of type and scrambled it to make a type specimen book. It has survived not only </p>
                        </div>

                    </div>
                    <img className='mt-12' src={Img} alt='abc' />
                    <div className='flex justify-center'>
                        <div className='relative mt-16'>
                            <input
                                className='border bg-[#d1d8f5] text-[#0a194e] border-[#0a194e] rounded pl-2 pr-32 py-4'
                                placeholder='Enter Zip Code'
                                type='text'
                            />
                            <i className='fa fa-map-marker absolute right-2 top-4 text-[#0a194e] pointer-events-none text-[22px]'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepagesec4