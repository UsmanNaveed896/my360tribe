import React, { useState } from 'react'
import Img from '../../assets/1 (1).png'
import Img2 from '../../assets/Capture-3-1065x684 2.png'
import Img4 from '../../assets/Group1000006234.png'
import Modal from '../../Popups/Modal';
import { useNavigate } from 'react-router-dom';
const Homepagesec3 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState({
        mod1: false,
        mod2: false,
        mod3: false,
        mod4: false,
    });

    const peer = ['Transition Training', 'Education', 'Consulting', 'VA Programs', 'Assistance'];
    const transition = ['Mentorship', 'Financial Support', 'Relocation', 'Assistance', 'Family/Legal', 'Support']
    const health = ['Physical/Mental', 'Wellness', 'Recreational', 'Spiritual', 'Community']
    const employ = ['Job Services', 'Head Hunting', 'Entrepreneurship']

    const handleCancel = () => {
        // Implement cancel logic here
        console.log('Cancelling...');
        setIsModalOpen((st) => ({
            ...st,
            mod1: false,
            mod2: false,
            mod3: false,
            mod4: false,
        }))
        // setIsModalOpen(false);
    };
    return (
        <div className='bg-[#1a2242] pb-20 bg-cover' id="targetDiv2" style={{ backgroundImage: `url(${Img4})`, }}>
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] mt-16'>
                    <div className='grid md:grid-cols-2 grid-cols-1 px-4 md:px-0'>
                        <div className='column1'>
                            <div className='flex justify-center mt-16'>
                                <h1 className='border-b border-[#d9d9d9] text-white border-b-4 text-center font-bold text-5xl'>What We Do</h1>
                            </div>
                            {!isModalOpen.mod1 && !isModalOpen.mod2 && !isModalOpen.mod3 && !isModalOpen.mod4 &&
                                <div className='flex gap-12 mt-16 justify-center md:flex-row flex-col'>
                                    <button className='border-[#D9D9D9] border hover:border-2 rounded font-bold bg-[#192242] text-white px-6 py-4'
                                        onClick={() => setIsModalOpen((st) => ({
                                            ...st,
                                            mod1: true,
                                            mod2: false,
                                            mod3: false,
                                            mod4: false,
                                        }))}
                                    >
                                        <i class="fa fa-bullhorn mr-2 text-[26px]" aria-hidden="true"></i>
                                        Peer Advocacy</button>

                                    <button className='border-[#D9D9D9] hover:border-2 border rounded font-bold bg-[#192242] text-white px-6 py-4'
                                        onClick={() => setIsModalOpen((st) => ({
                                            ...st,
                                            mod1: false,
                                            mod2: true,
                                            mod3: false,
                                            mod4: false,
                                        }))}
                                    >
                                        <i class="fa fa-exchange mr-2 text-[26px]" aria-hidden="true"></i>
                                        Transition</button>

                                </div>
                            }
                            {!isModalOpen.mod1 && !isModalOpen.mod2 && !isModalOpen.mod3 && !isModalOpen.mod4 &&
                                <div className='flex gap-12 mt-16 justify-center md:flex-row flex-col'>
                                    <button className='border-[#D9D9D9] hover:border-2 border rounded font-bold bg-[#192242] text-white px-14 py-4'
                                        onClick={() => setIsModalOpen((st) => ({
                                            ...st,
                                            mod1: false,
                                            mod2: false,
                                            mod3: true,
                                            mod4: false,
                                        }))}
                                    >
                                        <i class="fa fa-heartbeat mr-2 text-[26px]" aria-hidden="true"></i>
                                        Health</button>

                                    <button className='border-[#D9D9D9] hover:border-2 border rounded font-bold bg-[#192242] text-white px-3 py-4'
                                        onClick={() => setIsModalOpen((st) => ({
                                            ...st,
                                            mod1: false,
                                            mod2: false,
                                            mod3: false,
                                            mod4: true,
                                        }))}
                                    >
                                        <i class="fa fa-briefcase mr-2 text-[26px]" aria-hidden="true"></i>
                                        Employment</button>

                                </div>
                            }
                            {/* peer */}
                            <div className="flex justify-center text-white mt-6">
                                {
                                    isModalOpen?.mod1 ?
                                        <ul className='text-center font-bold'>
                                            <li className='text-2xl rounded-xl border py-3 px-6'>Peer Advocacy</li>
                                            {
                                                peer?.map((item, index) => (
                                                    <li className=' mt-3 py-2 cursor-pointer hover:font-semibold' onClick={() => navigate('/dummy', { state: item })} >
                                                        {item}
                                                    </li>
                                                ))
                                            }
                                            <li> <button onClick={handleCancel} type="button" className="mt-6 inline-flex w-full justify-center rounded-md bg-[#0C1A4E] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300  sm:w-auto"
                                            >Cancel</button></li>
                                        </ul>
                                        :
                                        isModalOpen?.mod2 ?
                                            <ul className='text-center font-bold'>
                                                <li className='text-2xl rounded-xl border  py-3 px-6'>Transition</li>
                                                {
                                                    transition?.map((item, index) => (
                                                        <li className='mt-3 py-2 cursor-pointer hover:font-semibold' onClick={() => navigate('/dummy', { state: item })}>
                                                            {item}
                                                        </li>
                                                    ))
                                                }
                                                <li> <button onClick={handleCancel} type="button" className="mt-6 inline-flex w-full justify-center rounded-md bg-[#0C1A4E] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300   sm:w-auto"
                                                >Cancel</button></li>
                                            </ul>
                                            :
                                            isModalOpen?.mod3 ?
                                                <ul className='text-center font-bold'>
                                                    <li className='text-2xl rounded-xl border  py-3 px-6'>Health</li>
                                                    {
                                                        health?.map((item, index) => (
                                                            <li className='py-2 mt-3 cursor-pointer hover:font-semibold' onClick={() => navigate('/dummy', { state: item })} >
                                                                {item}
                                                            </li>
                                                        ))
                                                    }
                                                    <li> <button onClick={handleCancel} type="button" className="mt-6 inline-flex w-full justify-center rounded-md bg-[#0C1A4E] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300   sm:w-auto"
                                                    >Cancel</button></li>
                                                </ul> :
                                                isModalOpen?.mod4 ?
                                                    <ul className='text-center font-bold'>
                                                        <li className='text-2xl rounded-xl border  py-3 px-6'>Employ</li>
                                                        {
                                                            employ?.map((item, index) => (
                                                                <li className='py-2 mt-3 cursor-pointer hover:font-semibold' onClick={() => navigate('/dummy', { state: item })}>
                                                                    {item}
                                                                </li>
                                                            ))
                                                        }
                                                        <li> <button onClick={handleCancel} type="button" className="mt-6 inline-flex w-full justify-center rounded-md bg-[#0C1A4E] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300   sm:w-auto"
                                                        >Cancel</button></li>
                                                    </ul> : ''
                                }

                            </div>



                            {/* <button className='border-[#D9D9D9] hover:border-2 border rounded font-bold bg-[#192242] text-white px-6 py-4'
                                    onClick={() => setIsModalOpen((st) => ({
                                        ...st,
                                        mod1: false,
                                        mod2: true,
                                        mod3: false,
                                        mod4: false,
                                    }))}
                                >
                                    <i class="fa fa-exchange mr-2 text-[26px]" aria-hidden="true"></i>
                                    Transition</button> */}

                            {/* <div className='flex gap-12 mt-8 justify-center md:flex-row flex-col'>
                                <button className='border-[#D9D9D9] hover:border-2 border rounded font-bold bg-[#192242] text-white px-14 py-4'
                                    onClick={() => setIsModalOpen((st) => ({
                                        ...st,
                                        mod1: false,
                                        mod2: false,
                                        mod3: true,
                                        mod4: false,
                                    }))}
                                >
                                    <i class="fa fa-heartbeat mr-2 text-[26px]" aria-hidden="true"></i>
                                    Health</button>
                                <button className='border-[#D9D9D9] hover:border-2 border rounded font-bold bg-[#192242] text-white px-3 py-4'
                                    onClick={() => setIsModalOpen((st) => ({
                                        ...st,
                                        mod1: false,
                                        mod2: false,
                                        mod3: false,
                                        mod4: true,
                                    }))}
                                >
                                    <i class="fa fa-briefcase mr-2 text-[26px]" aria-hidden="true"></i>
                                    Employment</button>
                            </div> */}
                        </div>
                        <div className='column2 mt-16 '>
                            <div>
                                <img className='md:ml-24 ml-20 ml-0 w-[250px] h-[250px] md:w-[439px] md:h-[411px]' src={Img} alt='army' />
                                <img className='mt-[-150px] w-[250px] h-[250px] md:w-[350px] md:h-[312px]' src={Img2} alt='girl' />
                            </div>

                        </div>
                    </div>

                    {/* <Modal isOpen={isModalOpen} onCancel={handleCancel} data={isModalOpen.mod1 ? peer : isModalOpen.mod2 ? transition : isModalOpen.mod3 ? health : employ} /> */}
                </div>
            </div>
        </div>
    )
}

export default Homepagesec3