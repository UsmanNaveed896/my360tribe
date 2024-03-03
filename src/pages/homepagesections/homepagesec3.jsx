import React from 'react'
import Img from '../../assets/1 (1).png'
import Img2 from '../../assets/Capture-3-1065x684 2.png'
const Homepagesec3 = () => {
    return (
        <div className='bg-[#192242] pb-16' >
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] mt-16'>
                    <div className='grid grid-cols-2 '>
                        <div className='column1'>
                            <div className='flex justify-center mt-16'>
                                <h1 className='border-b border-[#d9d9d9] text-white border-b-4 text-center font-bold text-5xl'>What We Do</h1>
                            </div>
                            <div className='flex gap-12 mt-16 justify-center'>
                                <button className='border-[#D9D9D9] border rounded font-bold bg-[#192242] text-white px-6 py-4'>
                                    <i class="fa fa-bullhorn mr-2 text-[26px]" aria-hidden="true"></i>
                                    Peer Advocacy</button>
                                <button className='border-[#D9D9D9] border rounded font-bold bg-[#192242] text-white px-6 py-4'>
                                    <i class="fa fa-exchange mr-2 text-[26px]" aria-hidden="true"></i>
                                    Transition</button>
                            </div>
                            <div className='flex gap-12 mt-8 justify-center'>
                                <button className='border-[#D9D9D9] border rounded font-bold bg-[#192242] text-white px-14 py-4'>
                                    <i class="fa fa-heartbeat mr-2 text-[26px]" aria-hidden="true"></i>
                                    Health</button>
                                <button className='border-[#D9D9D9] border rounded font-bold bg-[#192242] text-white px-3 py-4'>
                                    <i class="fa fa-briefcase mr-2 text-[26px]" aria-hidden="true"></i>
                                    Employment</button>
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

export default Homepagesec3