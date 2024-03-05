import React, { useState } from 'react'
import Img from '../../assets/Group 1000006079.png'
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
const Homepagesec2 = () => {
    const [selectedText, setSelectedText] = useState(''); // State to manage selected text

  const data = {
    labels: ['Executive board', 'Advisory board', 'Service organization','Concierge','Peer support organization'], // Add your pie chart labels
    datasets: [
      {
        data: [20, 20, 20,20,20], // Add your pie chart data
        backgroundColor: ['#0e0f3d', '#1a1ea9', '#101470','#344688','#464b99'], // Add your pie chart colors
      },
    ],
  };
  const options = {
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const selectedIndex = elements[0].index;
        const selectedLabel = data.labels[selectedIndex];
        setSelectedText(` ${selectedLabel}`);
      }
    },
  };
    return (
        <div className='bg-[#d1d8f5] pb-16' id="targetDiv1" >
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] mt-16'>
                    <div className='grid grid-cols-2 items-center gap-16'>
                        <div className='colum1 mt-8'>
                        <Pie className='mt-12' data={data} options={options} />
                            {/* <img src={Img} alt='chart' /> */}
                        </div>
                        <div className='column2'>
                            <div className='flex justify-center'>
                                <h1 className='border-b border-[#0a194e] text-[#0a194e] border-b-4 text-center font-bold text-5xl'>Who We Are</h1>

                            </div>
                            <p  className='text-[29px] font-semibold text-[#0a194e] mt-12'>{selectedText}</p>
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