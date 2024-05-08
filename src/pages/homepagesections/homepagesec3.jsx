import React, { useState } from "react";
import Img from "../../assets/1 (1).png";
import Img2 from "../../assets/Capture-3-1065x684 2.png";
import Img4 from "../../assets/Group10000062671.png";
import Modal from "../../Popups/Modal";
import { useNavigate } from "react-router-dom";
const Homepagesec3 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#1a2242] pb-24 md:bg-cover bg-contain"
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
              <div className="flex gap-12 mt-32 justify-center md:flex-row flex-col items-center">
                <div class="has-tooltip">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-[#0a194e] -mt-28  text-[12px]">
                    One of the things that sets us apart is our Peer Advocate
                    Network. Operators helping <br></br> Operators by providing
                    support and guidance to you as a member of My360Tribe. Your
                    peer<br></br>
                    advocate will keep in contact with you and help coordinate
                    the contact with the service partners <br></br> ready to
                    answer your questions and assist you in navigating this new
                    life outside the SOF. Click <br></br> on the tabs above to
                    learn more about the 360-warrior care through Peer Advocacy
                    we provide.
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
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-[#0a194e] -mt-20 text-[12px]">
                    Transition services and referral to our strongest service
                    <br></br>
                    partners to guide you and assist with a successful<br></br>
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
                <div class="has-tooltip">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-[#0a194e] mt-[70px] text-[12px]">
                    My360Tribe has established relationships <br></br> with service
                    organizations, corporations <br></br> and businesses to  help you
                    expand <br></br> your network, mentoring  opportunities, <br></br> job services 
                    and even starting your own  business.<br></br> We want you to be  <span className="font-bold">See more...</span>
                    {/* successful and part of that is providing for yourself and
                    your family while being a contributing member of society as
                    a civilian. Below are some of the services and referrals we
                    offer to help you navigate the employment and
                    entrepreneurial sector. Mentorship – we are a team of
                    mentors and advisors with years of experience in a variety
                    of industries, non-profits and organizations. We have years
                    of mentoring experience and education to offer in hope that
                    it will provide you with guidance and open doors to
                    opportunities. We have extensive networks and want to share
                    that knowledge with you as you navigate this next phase of
                    your life. */}
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
            <div className="column2 mt-16 ">
              <div>
                <img
                  className="md:ml-24 ml-20 ml-0 w-[250px] h-[250px] md:w-[390px] md:h-[350px] border-2 rounded-xl"
                  src={Img2}
                  alt="army"
                />
                <img
                  className="mt-[-150px] w-[250px] h-[250px] md:w-[390px] md:h-[350px] border-2 rounded-xl"
                  src={Img}
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
