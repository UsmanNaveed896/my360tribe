import React, { useState } from "react";
import Img from "../../assets/Group12.png";
import Img2 from "../../assets/target.png";
import Img4 from "../../assets/Group1000006267.png";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-plugin-datalabels";
import './style.css'
const Homepagesec2 = () => {
  const [selectedText, setSelectedText] = useState(" Executive Board"); // State to manage selected text

  const data = {
    labels: [
      "Executive Board",
      "Advisory Board",
      "Service Partners",
      "Concierge",
      "Peer Advocate Member",
    ], // Add your pie chart labels
    datasets: [
      {
        data: [20, 20, 20, 20, 20], // Add your pie chart data
        backgroundColor: [
          "#0e0f3d",
          "#1a1ea9",
          "#101470",
          "#344688",
          "#464b99",
        ], // Add your pie chart colors
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
        position: "right",
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
    <div
      className="bg-[#d1d8f5] pb-[60px] md:bg-cover bg-contain"
      id="targetDiv1"
      style={{ backgroundImage: `url(${Img4})` }}
    >
      <div className="flex justify-center">
        <div className="container max-w-[1200px] mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center pb-12 md:gap-16 gap-2">
          

            <div className="colum1 md:mt-8 mt-2 ">
              <div className="relative md:h-[400px] md:flex flex justify-center">
                 <Pie
                  className="md:mt-12 mt-4 z-[4] "
                  data={data}
                  options={options}
                /> 
                <div className="">
                  <p className="absolute text-white  left-[239px] md:left-[319px] md:top-[120px] top-[60px] text-center font-bold md:text-[20px] text-[14px] z-[5] cursor-pointer"
                  onClick={()=>setSelectedText(" Executive Board")}
                  >
                    Executive <br></br> Board
                  </p>
                  <p className="absolute text-white  md:left-[340px] left-[260px] top-[170px] md:top-[240px] text-center font-bold md:text-[20px] text-[14px] z-[5] cursor-pointer"
                   onClick={()=>setSelectedText(" Advisory Board")}
                  >
                    Advisory <br></br> Board
                  </p>
                  <p className="absolute text-white md:left-[220px] left-[165px] top-[240px] md:top-[320px] text-center font-bold md:text-[20px] text-[14px] z-[5] cursor-pointer"
                   onClick={()=>setSelectedText(" Service Partners")}
                  >
                    Service <br></br> Organization
                  </p>
                  <p className="absolute text-white md:left-[130px] md:top-[260px] left-[80px] top-[170px] text-center font-bold md:text-[20px] text-[14px] z-[5] cursor-pointer"
                   onClick={()=>setSelectedText(" Concierge")}
                  >
                    Concierge
                  </p>
                  <p className="absolute text-white md:left-[140px] md:top-[120px] left-[100px] top-[80px] text-center font-bold md:text-[20px] text-[14px] z-[5] cursor-pointer"
                   onClick={()=>setSelectedText(" Peer Advocate Member")}
                  >
                  Peer Advocate <br></br> Member
                  </p>
             
                  <img
                    className=" ml-0 text-white md:left-[42%] md:top-[50%] top-[40%] left-[39%] h-[80px] absolute z-[22]"
                    src={Img}
                    alt="logo"
                  />
                  <img
                    className="absolute text-white  md:left-[49px] hidden md:block left-[0px] md:top-[9px] top-[-30px] md:h-[470px]  h-[450px] w-[470px] "
                    src={Img2}
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div className="column2 mt-6 md:mt-0 px-4 md:px-0">
              <div className="flex justify-center">
                <h1 className="border-b border-[#0a194e] text-[#0a194e] border-b-4 text-center font-bold text-5xl">
                  Who We Are
                </h1>
              </div>
              <p className="text-[29px] font-semibold text-[#0a194e] mt-12">
                {selectedText}
              </p>
          
                {selectedText === " Executive Board" ? 
                 <p className="text-[17px]  text-[#0a194e] mt-2 font-semibold h-[200px] pt-4 px-2 border rounded-xl border-[#0a194e]"> The Executive Board for My360Tribe
                 is made up of Military and Civilian professionals with a
                 deep-rooted passion for the SOF community. We are dedicated to
                 the Operator and their family’s success before, during and after
                 transition from military service.
                 </p> :
                 selectedText === " Peer Advocate Member" ?
                 <p className="text-[16px]  text-[#0a194e] mt-2 font-semibold h-[200px] pt-4 px-2 border rounded-xl border-[#0a194e]"> Peer Advocate Network  –
                 by offering peer – to – peer support, My360Tribe ensures that
                 operators are helping operators with real life, real time advice
                 and referrals to get the support and help they need.
                 </p>
                 :
                 selectedText === " Advisory Board" ?
                 <p className="text-[16px]  text-[#0a194e] mt-2 font-semibold h-[200px] pt-4 px-2 border rounded-xl border-[#0a194e]">As advocates and ambassadors of the organization and its mission, the advisory board acts as
                 liaison between the special operations community and the organization, providing strategic guidance, organizational
                 planning and execution, and assisting with Veteran Service Organization (VSO) relationships. In addition to these
                 duties the advisory board will also assist with fundraising activities when necessary.
                 </p>
                 :
                 selectedText === " Service Partners" ?
                 <p className="text-[16px]  text-[#0a194e] mt-2 font-semibold h-[200px] pt-4 px-2 border rounded-xl border-[#0a194e]">Our service partners are
                 made up of companies and non-profit organizations dedicated to the success of our SOF
                 operators in the civilian world. It is the dedication and commitment of these entities that help
                 make My360Tribe a success.                 
                 </p>
                 :
                 selectedText === " Concierge" ?
                 <p className="text-[16px]  text-[#0a194e] mt-2 font-semibold h-[200px] pt-4 px-2 border rounded-xl border-[#0a194e]">As the first contact point, concierges are the ambassadors of the organization. They must possess a
                 warm, friendly attitude paired with an intensely curious nature and an intense drive to help. Concierges will develop
                 a more robust needs assessment through conversations with the veteran. Concierges are Veteran Service
                 Organization (VSO) experts - responsible for making introductions, tracking and maintaining the relationship
                 between the VSO and the veteran               
                 </p>
                 :""
              }
               
                {/* <p className="text-[16px]  text-[#0a194e] mt-2 font-semibold"> <strong>5. Service Organization</strong> 
                Partners (please change to Service Partners)– Our service
                partners are made up of companies and non-profit organizations
                dedicated to the success of our SOF operators in the civilian
                world. It is the dedication and commitment of these entities
                that help make My360Tribe a success.
                </p>
                <p className="text-[16px]  text-[#0a194e] mt-2 font-semibold"> <strong>6. Peer Advocate Network</strong>  –
                by offering peer – to – peer support, My360Tribe ensures that
                operators are helping operators with real life, real time advice
                and referrals to get the support and help they need.
                </p>
                <p className="text-[16px]  text-[#0a194e] mt-2 font-semibold"> <strong>7.</strong> Vinny
                will provide the verbiage for <strong>Concierge</strong> and <strong>Advisory Board</strong>
                </p> */}
              {/* <p className="text-[16px]  text-[#0a194e] mt-6 font-semibold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="text-[16px] mt-6  text-[#0a194e] mt-6 font-semibold">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepagesec2;
