import React ,{ useState } from 'react'
import Img from '../../assets/1 (1).png'
import Img2 from '../../assets/Capture-3-1065x684 2.png'
import Modal from '../../Popups/Modal';
const Homepagesec3 = () => {
    const [isModalOpen, setIsModalOpen] = useState({
        mod1:false,
        mod2:false,
        mod3:false,
        mod4:false,
    });

    const peer=['Transition Training','Education','Consulting','VA Programs','Assistance'];
    const transition=['Mentorship','Financial Support','Relocation','Assistance','Family/Legal','Support']
    const health=['Physical/Mental','Wellness','Recreational','Spiritual','Community']
    const employ=['Job Services','Head hunting','entrepreneurship']
  
    const handleCancel = () => {
      // Implement cancel logic here
      console.log('Cancelling...');
      setIsModalOpen(false);
    };
    return (
        <div className='bg-[#192242] pb-16' id="targetDiv2">
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] mt-16'>
                    <div className='grid grid-cols-2 '>
                        <div className='column1'>
                            <div className='flex justify-center mt-16'>
                                <h1 className='border-b border-[#d9d9d9] text-white border-b-4 text-center font-bold text-5xl'>What We Do</h1>
                            </div>
                            <div className='flex gap-12 mt-16 justify-center'>
                                <button className='border-[#D9D9D9] border hover:border-2 rounded font-bold bg-[#192242] text-white px-6 py-4'
                               onClick={()=>setIsModalOpen((st)=>({
                                ...st,
                                mod1:true,
                                mod2:false,
                                mod3:false,
                                mod4:false,
                               }))}
                                >
                                    <i class="fa fa-bullhorn mr-2 text-[26px]" aria-hidden="true"></i>
                                    Peer Advocacy</button>
                                <button className='border-[#D9D9D9] hover:border-2 border rounded font-bold bg-[#192242] text-white px-6 py-4'
                                  onClick={()=>setIsModalOpen((st)=>({
                                    ...st,
                                    mod1:false,
                                    mod2:true,
                                    mod3:false,
                                    mod4:false,
                                   }))}
                                >
                                    <i class="fa fa-exchange mr-2 text-[26px]" aria-hidden="true"></i>
                                    Transition</button>
                            </div>
                            <div className='flex gap-12 mt-8 justify-center'>
                                <button className='border-[#D9D9D9] hover:border-2 border rounded font-bold bg-[#192242] text-white px-14 py-4'
                                   onClick={()=>setIsModalOpen((st)=>({
                                    ...st,
                                    mod1:false,
                                    mod2:false,
                                    mod3:true,
                                    mod4:false,
                                   }))}
                                >
                                    <i class="fa fa-heartbeat mr-2 text-[26px]" aria-hidden="true"></i>
                                    Health</button>
                                <button className='border-[#D9D9D9] hover:border-2 border rounded font-bold bg-[#192242] text-white px-3 py-4'
                                     onClick={()=>setIsModalOpen((st)=>({
                                        ...st,
                                        mod1:false,
                                        mod2:false,
                                        mod3:false,
                                        mod4:true,
                                       }))}
                                >
                                    <i class="fa fa-briefcase mr-2 text-[26px]" aria-hidden="true"></i>
                                    Employment</button>
                            </div>
                        </div>
                        <div className='column2 mt-16'>
                            <img className='ml-24 w-[439px] h-[411px]' src={Img} alt='army' />
                            <img className='mt-[-150px] w-[350px] h-[312px]' src={Img2} alt='girl' />
                        </div>
                    </div>
                  
                     <Modal isOpen={isModalOpen} onCancel={handleCancel} data={isModalOpen.mod1 ? peer : isModalOpen.mod2 ? transition : isModalOpen.mod3 ? health : employ}/>
                </div>
            </div>
        </div>
    )
}

export default Homepagesec3