import React from 'react'
import Usercard from '../../components/userCard/usercard'
import Img from '../../assets/Rectangle123.png'
import Img1 from '../../assets/Rectangle 1400.png'
import Img4 from '../../assets/Group2266.png'

const Homepagesec6 = () => {
    const employees = [
        {
            name: 'Brage Garofalo',
            designation: ' Co-Founder',
            experience: '10 Years of SOF Support, Cancer Researcher, Dog Lover, Cage Diver',
        },
        {
            name: 'Michael Hudson',
            designation: ' Co-Founder',
            experience: '10 Years of SOF Support, Banker, Golfer and Traveler',
        },
        {
            name: 'Chris Philips',
            designation: 'Board Member',
            experience: 'Marine Corps Veteran, Award Winner, PhD Candidate',
        },
        {
            name: 'Brian Cunningham',
            designation: 'Board Member',
            experience: 'Navy (SEAL) Veteran, AI Executive, Transformational Leader',
        },
    ];

    const advisors = [
        {
            name: 'Greg “Vinny” Vincent',
            designation: ' Navy (SEAL)',
        },
        {
            name: 'Pat O’Rourke',
            designation: ' Air Force (720th STG, PJ)',
        },
        {
            name: 'Brian Hughes',
            designation: 'Army (160th SOAR)',
        },
        {
            name: 'Joe Hudak',
            designation: 'Army (SF)',
        },
        {
            name: 'Jack Davis',
            designation: 'Navy (EOD)',
        },
        {
            name: 'Jason Agopsowicz',
            designation: 'Navy (SEAL)',
        },
        {
            name: 'Matt Bruni',
            designation: 'Army (Ranger)',
        },
    ];
    return (
        <>
            <div className='bg-[#d1d8f5] pb-16 bg-contain' style={{ backgroundImage: `url(${Img4})`, }}>
                <div className='flex justify-center'>
                    <div className='container max-w-[1200px] mt-16'>
                        <div className='flex justify-center'>
                            <div>
                                <h1 className='text-[#0a194e] text-center font-bold text-5xl'>Meet our team</h1>
                                <p className='text-[#0a194e] text-[35px] mt-6'>Founders and Founding Board </p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            {employees.map((item) => (
                                <Usercard name={item.name} designation={item.designation} experience={item.experience} />
                            ))}
                        </div>
                        <div className='flex justify-center mt-12'>
                            <div>
                                <p className='text-[#0a194e] text-[35px] mt-6'>Advisory Board </p>
                            </div>
                        </div>
                        <div className='flex justify-center flex-wrap gap-32 mt-12'>
                            {advisors.map((item) => (
                                <Usercard name={item.name} designation={item.designation} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="bg-cover bg-center pb-16"
                style={{ backgroundImage: `url(${Img})` }}
            >
                <div className='content '>
                    <h1 className='text-center text-5xl font-bold pt-12 text-white'> Our Partners</h1>
                    <div className='pt-16 flex justify-center gap-8 px-6'>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                    </div>
                    <div className='pt-12 flex justify-center gap-8 px-6'>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                        <div className='img'>
                            <img src={Img1} alt='blac' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepagesec6