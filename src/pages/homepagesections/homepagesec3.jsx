import React, { useState } from "react";
import Img from "../../assets/1 (1).png";
import Img2 from "../../assets/Capture-3-1065x684 2.png";
import Img4 from "../../assets/Group1000006234.png";
import Modal from "../../Popups/Modal";
import { useNavigate } from "react-router-dom";
const Homepagesec3 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#1a2242] pb-20 md:bg-cover bg-contain"
      id="targetDiv2"
      style={{ backgroundImage: `url(${Img4})` }}
    >
      <div className="flex justify-center">
        <div className="container max-w-[1200px] mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 px-4 md:px-0">
            <div className="column1">
              <div className="flex justify-center mt-16">
                <h1 className="border-b border-[#d9d9d9] text-white border-b-4 text-center font-bold text-5xl">
                  What We Do
                </h1>
              </div>
              <div className="flex gap-12 mt-16 justify-center md:flex-row flex-col items-center">
                <button className="border-[#D9D9D9] border hover:border-2 rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4" 
                onClick={()=>navigate('/peeradvocacy')}
                >
                  <i
                    class="fa fa-bullhorn mr-2 text-[26px]"
                    aria-hidden="true"
                  ></i>
                  Peer Advocacy
                </button>
                <button className="border-[#D9D9D9] hover:border-2 border rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                onClick={()=>navigate('/transition')}
                >
                  <i
                    class="fa fa-exchange mr-2 text-[26px]"
                    aria-hidden="true"
                  ></i>
                  Transition
                </button>
              </div>

              <div className="flex gap-12 mt-16 justify-center md:flex-row flex-col items-center">
                <button className="border-[#D9D9D9] hover:border-2 border rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                 onClick={()=>navigate('/health')}
                >
                  <i
                    class="fa fa-heartbeat mr-2 text-[26px]"
                    aria-hidden="true"
                  ></i>
                  Health
                </button>

                <button className="border-[#D9D9D9] hover:border-2 border rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                onClick={()=>navigate('/employment')}
                >
                  <i
                    class="fa fa-briefcase mr-2 text-[26px]"
                    aria-hidden="true"
                  ></i>
                  Employment
                </button>
              </div>

            </div>
            <div className="column2 mt-16 ">
              <div>
                <img
                  className="md:ml-24 ml-20 ml-0 w-[250px] h-[250px] md:w-[439px] md:h-[411px] border-2 rounded-xl"
                  src={Img}
                  alt="army"
                />
                <img
                  className="mt-[-150px] w-[250px] h-[250px] md:w-[350px] md:h-[312px] border-2 rounded-xl"
                  src={Img2}
                  alt="girl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepagesec3;
