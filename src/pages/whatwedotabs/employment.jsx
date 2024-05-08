import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Employment = ({ handleClick }) => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Job Services");

  const handleTabs = (item) => {
    setActiveTab(item);
  };
  const employ = [
    "Job Services",
    "Head Hunting",
    "Entrepreneurship",
    "Employment",
    "Mentorship",
  ];
  const handleNavigate = () => {
    handleClick(2);
    navigate("/");
  };
  return (
    <div className="main">
      <div className="flex justify-center bg-[#15214c] md:pt-32 pt-12">
        <div className="max-w-[1200px] container pb-24">
          <div className="w-[60%] flex justify-between items-center">
            <i
              class="fa fa-long-arrow-left text-2xl text-white hover:font-bold cursor-pointer pl-2 md:pl-0"
              onClick={() => handleNavigate()}
            ></i>
            <h1 className="text-white md:text-5xl text-2xl md:mt-12 mt-2 text-center pb-12 font-bold">
              <i
                class="fa fa-briefcase mr-2 text-[26px]"
                aria-hidden="true"
              ></i>{" "}
              Employment
            </h1>
          </div>

          <div className="w-full overflow-x-scroll md:overflow-hidden">
            <ul class="flex md:gap-6 gap-2  text-xs md:text-sm font-medium text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {employ.map((item) => (
                <li
                  class={`me-2 md:pr-12 pr-1 cursor-pointer ${
                    activeTab === item ? "border-b-2 border-[#d0d7f4] " : ""
                  } bg-[#15214c]`}
                >
                  <a
                    class="inline-block p-4 text-[#d0d7f4] w-[131px] md:w-full font-bold rounded-t-lg active"
                    onClick={() => handleTabs(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {activeTab == "Job Services" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Job Services</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                My360Tribe has an extensive network of service partners willing
                to help you in your search for your next career. Job hunting
                isn’t easy and requires dedication and commitment, We are here
                to help with everything from resume’ pointers to mock
                interviews, guiding you to the right career fair, helping you
                build a strong LinkedIn profile and more.{" "}
              </p>
            </div>
          ) : activeTab == "Head Hunting" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Head Hunting</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                This service provided by our partners is for those of you
                looking to elevate your game and those that bring a strong sense
                of leadership and adaptability to the civilian workforce. We
                have partners who can help guide you and prepare you for your
                next leadership role.{" "}
              </p>
            </div>
          ) : activeTab == "Entrepreneurship" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Entrepreneurship</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                If working for someone else isn’t your thing, then
                entrepreneurship may be just what you are looking for. We have
                resources available to help guide you in establishing your own
                way from concept to business case; launch to start-up and
                avoiding pitfalls. This takes a special level of dedication and
                a strong willingness to persevere through the challenges of
                ownership.{" "}
              </p>
            </div>
          ) : activeTab == "Employment" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Employment</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                My360Tribe has established relationships with service
                organizations, corporations and businesses to help you expand
                your network, mentoring opportunities, job services and even
                starting your own business. We want you to be successful and
                part of that is providing for yourself and your family while
                being a contributing member of society as a civilian. Below are
                some of the services and referrals we offer to help you navigate
                the employment and entrepreneurial sector.{" "}
              </p>
            </div>
          ) :  activeTab == "Mentorship" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Mentorship</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                We are a team of mentors and advisors with years of experience
                in a variety of industries, non-profits and organizations. We
                have years of mentoring experience and education to offer in
                hope that it will provide you with guidance and open doors to
                opportunities. We have extensive networks and want to share that
                knowledge with you as you navigate this next phase of your life.{" "}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Employment;
