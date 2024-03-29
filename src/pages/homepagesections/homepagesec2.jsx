import React, { useState } from 'react'
import Img from '../../assets/Group11.png'
import Img2 from '../../assets/target.png'
import Img4 from '../../assets/Bg3.png'
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-plugin-datalabels';
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
    plugins: {
      legend: {
        display: false,
        position: 'right',
        labels: {
          usePointStyle: true,
        },
        onClick: (e) => e.stopPropagation(),
      },
      tooltip: { enabled: false },
    },
    layout: {
      margin: {
        left: 20, // Adjust the left margin as needed
      },
    },
  
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const selectedIndex = elements[0].index;
        const selectedLabel = data.labels[selectedIndex];
        setSelectedText(` ${selectedLabel}`);
      }
    },
  };
    return (
        <div className='bg-[#d1d8f5] pb-24 bg-cover' id="targetDiv1" style={{ backgroundImage: `url(${Img4})`, }} >
            <div className='flex justify-center'>
                <div className='container max-w-[1200px] mt-16'>
                    <div className='grid md:grid-cols-2 grid-cols-1 items-center md:gap-16 gap-2'>
                        <div className='colum1 md:mt-8 mt-2 '>
                          <div className='relative md:h-[400px] '>
                          <Pie  className='md:mt-12 mt-4 z-[4] relative' data={data} options={options} />
                          <div className=''>
                            <p className='absolute text-white top-0 left-[219px] top-[80px] text-center font-bold text-[20px] z-[5]'>Executive <br></br> board</p>
                            <p className='absolute text-white top-0 left-[260px] top-[200px] text-center font-bold text-[20px] z-[5]'>Advisory <br></br> board</p>
                            <p className='absolute text-white top-0 left-[140px] top-[260px] text-center font-bold text-[20px] z-[5]'>Service <br></br> organization</p>
                            <p className='absolute text-white top-0 left-[30px] top-[220px] text-center font-bold text-[20px] z-[5]'>Concierge</p>
                            <p className='absolute text-white top-0 left-[60px] top-[80px] text-center font-bold text-[20px] z-[5]'>Peer support <br></br> organization</p>
                            <img className='absolute text-white top-0 left-[150px] top-[157px] h-[80px]  z-[5]  ' src={Img} alt='logo' />
                            <img className='absolute text-white  md:left-[-35px] hidden md:block left-[0px] md:top-[-36px] top-[-30px] md:h-[470px]  h-[450px] w-[470px] ' src={Img2} alt='logo' />
                          </div>
                          </div>
                       
                            {/* <img src={Img} alt='chart' /> */}
                        </div>
                        <div className='column2 mt-6 md:mt-0 px-4 md:px-0'>
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