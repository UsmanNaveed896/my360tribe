import React from 'react'

const Homepagesec7 = () => {
    const buttonGradient='linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)';

    return (
        <>
            <div className='bg-[#d1d8f5] pb-16' >
                <div className='flex justify-center'>
                    <div className='container max-w-[1200px] mt-16'>
                        <div className='flex justify-center'>
                            <div>
                                <h1 className='text-[#0a194e] text-center font-bold text-5xl'>Meet our team</h1>
                                <p className='text-[#0a194e] text-[35px] mt-6'>Founders and Founding Board </p>
                            </div>
                        </div>
                        <div className='flex justify-center mt-12 '>
                            <div className='border rounded-xl pt-8 pb-6 w-[500px] px-16 bg-white'>
                                <div className='flex justify-between items-center text-[#0C1A4C]'>
                                    <i className='fa fa-angle-left text-[50px] font-bold'></i>
                                    <p className='text-[50px] font-bold'> $150</p>
                                    <i className='fa fa-angle-right text-[50px] font-bold'></i>
                                </div>
                                <div className='flex justify-center mt-12 gap-8'>
                                    <button className='py-1 px-8 border border-[#0C1A4C] rounded text-[20px] text-[#0C1A4C]'>One Time</button>
                                    <button className='py-1 px-8 border border-[#0C1A4C] rounded text-[20px] bg-[#0C1A4C] text-white'>Monthly</button>
                                </div>
                                <div className='flex items-center'>
                                <hr className="w-full border-t border-[#0C1A4C] border-2 my-12" />
                                    <p className='px-2 text-[#0C1A4C] font-semibold text-xl'>or</p>
                                    <hr className="w-full border-t border-[#0C1A4C] border-2 my-12" />
                                </div>
                                <button className='w-full border border-[#0C1A4C] rounded text-[20px] text-[#0C1A4C] py-1'>Enter Price Manually</button>
                                <button className='w-full mt-16 font-bold rounded text-white font-bold py-3 text-[20px]' style={{background:buttonGradient}}>Donate Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepagesec7