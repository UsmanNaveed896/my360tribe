import React from 'react'
import Img from '../../assets/WW (1).png'
import Img2 from '../../assets/WW (2).png'
const Homepagesec5 = () => {
    return (
        <div className=' pb-16' style={{ backgroundColor: 'rgb(18, 16, 50)' }} >
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] mt-16'>
                    <div className='grid grid-cols-2 gap-12 items-center'>
                        <div className='column1'>
                            <div className='flex justify-center mt-16'>
                                <h1 className='border-b border-[#d9d9d9] text-white border-b-4 text-center font-bold text-5xl'>Why We Do</h1>
                            </div>
                            <div className='flex justify-center mt-12'>
                                <div>
                                    <p className='font-bold text-white'>Lorem Ipsum is simply dummy text <br></br> of the printing</p>
                                    <p className='text-white text-xs mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        ,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='column2 mt-16'>
                            <img className='ml-24 w-[439px] h-[411px]' src={Img} alt='army' />
                            <img className='mt-[-150px] w-[350px] h-[312px]' src={Img2} alt='girl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepagesec5