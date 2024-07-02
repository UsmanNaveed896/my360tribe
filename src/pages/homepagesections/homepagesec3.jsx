import React, { useState } from "react";
import Img2 from "../../assets/1 (1).png";
import Img from "../../assets/screen.png";
import Img4 from "../../assets/Group10000062671.png";
import Img5 from '../../assets/ab.png'
import Img6 from '../../assets/abc.jpg'

import Modal from "../../Popups/Modal";
import { useNavigate } from "react-router-dom";
const Homepagesec3 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#1a2242] pb-[194px] md:bg-cover bg-contain"
      id="targetDiv2"
      style={{ backgroundImage: `url(${Img4})` }}
    >
      <div className="flex justify-center">
        <div className="container max-w-[1200px] mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 px-4 md:px-0 gap-6">
            <div className="column1">
              <div className="flex justify-center mt-16">
                <h1 className="border-b border-[#d9d9d9] text-white border-b-4 text-center font-bold text-5xl">
                  What We Do
                </h1>
              </div>
              <div className="flex gap-12 mt-32 justify-center md:flex-row flex-col items-center">
                <div class="has-tooltip ">
                  <span class="tooltip rounded shadow-lg bg-[#d1d8f5] text-white border p-3 text-[black] mt-[14rem] text-[14px] w-[500px] h-[180px] md:block hidden">
                    What sets us apart is our Concierge-level support and
                    extensive, confidential Peer Ambassador network of Operators
                    helping Operators by providing support and guidance to you
                    as a member of My360Tribe. Your Concierge will keep in
                    contact with you and help coordinate contact with the
                    service partners that can assist you in navigating this new
                    life. Click on the tabs above to learn more about the
                    360-Warrior Care.
                  </span>
                  <button
                    className="border-[#D9D9D9] border hover:border-2 rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                    onClick={() => navigate("/peeradvocacy")}
                  >
                    <i
                      class="fa fa-bullhorn mr-2 text-[26px]"
                      aria-hidden="true"
                    ></i>
                    Peer Advocacy
                  </button>
                </div>
                <div class="has-tooltip">
                  <span class="tooltip rounded shadow-lg p-3 border text-white bg-[#d1d8f5]  text-[black] mt-[17rem] text-[14px] w-[500px] h-[100px] ml-[-254px] md:block hidden">
                    Transition services and referral to our strongest service
                    partners to guide you and assist with a successful
                    transition even years after you have separated.
                  </span>
                  <button
                    className="border-[#D9D9D9] hover:border-2 border rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                    onClick={() => navigate("/transition")}
                  >
                    <i
                      class="fa fa-exchange mr-2 text-[26px]"
                      aria-hidden="true"
                    ></i>
                    Transition
                  </button>
                </div>
              </div>

              <div className="flex gap-12 mt-16 justify-center md:flex-row flex-col items-center">
                <div class="has-tooltip">
                  <span class="tooltip rounded shadow-lg p-3 border text-white bg-[#d1d8f5]  text-[black] mt-[8rem] text-[14px] w-[500px] h-[110px] ml-[0] md:block hidden">
                    At My360Tribe, we are committed to your health and
                    well-being. Providing referrals and services to accomplish
                    360-degree warrior care is our mission. Above you will find
                    a listing of our areas of referrals and services as it
                    relates to an operator’s health and wellbeing.
                  </span>
                  <button
                    className="border-[#D9D9D9] hover:border-2 border rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                    onClick={() => navigate("/health")}
                  >
                    <i
                      class="fa fa-heartbeat mr-2 text-[26px]"
                      aria-hidden="true"
                    ></i>
                    Health
                  </button>
                </div>
                <div class="has-tooltip">
                  <span class="tooltip rounded shadow-lg  bg-[#d1d8f5] text-white border p-3 text-[black] mt-[9rem] text-[14px] w-[500px] h-[110px] ml-[-254px] md:block hidden">
                    My360Tribe has established relationships with service
                    organizations, corporations and businesses to help you
                    expand your network, mentoring opportunities, job services
                    and even starting your own business. We want you to be{" "}
                    <span className="font-bold">See more...</span>
                  </span>
                  <button
                    className="border-[#D9D9D9] hover:border-2 border rounded-xl font-bold bg-[#192242] text-white w-[200px] py-4"
                    onClick={() => navigate("/employment")}
                  >
                    <i
                      class="fa fa-briefcase mr-2 text-[26px]"
                      aria-hidden="true"
                    ></i>
                    Employment
                  </button>
                </div>
              </div>
            </div>
            <div className="column2 mt-16 flex justify-center">
              <div className="">
                <img
                  className="md:ml-24 ml-[80px] ml-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-2 rounded-xl"
                  src={Img5}
                  alt="army"
                />
                <img
                  className="mt-[-70px] md:ml-0 ml-[4px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-2 rounded-xl"
                  src={Img6}
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
