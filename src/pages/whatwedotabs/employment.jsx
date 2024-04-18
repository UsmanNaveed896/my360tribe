import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Employment = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Job Services");

  const handleTabs = (item) => {
    setActiveTab(item);
  };
  const employ = ["Job Services", "Head Hunting", "Entrepreneurship"];
  return (
    <div className="main">
      <div className="flex justify-center bg-[#15214c] md:pt-32 pt-12">
        <div className="max-w-[1200px] container pb-24">
          <i
            class="fa fa-long-arrow-left text-2xl text-white hover:font-bold cursor-pointer pl-2 md:pl-0"
            onClick={() => navigate("/")}
          ></i>
          <h1 className="text-white md:text-5xl text-2xl md:mt-12 mt-2 text-center pb-12 font-bold">
            <i class="fa fa-briefcase mr-2 text-[26px]" aria-hidden="true"></i>{" "}
            Employment
          </h1>
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
                Imagine yourself sitting behind the wheel of a car that has a
                stick shift, but all you’ve ever driven is an automatic
                transmission. Sure it’s a car like any other, but if you’re
                driving a car with a stick shift, you’ll need to know how to
                operate the gears and clutch. You’ll need transition training
                from an automatic to the manual transmission. Similarly, pilots
                who are transitioning to unfamiliar aircraft require not only
                stick and rudder development, but also specific training in the
                new aircraft’s systems and with it’s operating characteristics
                to include normal, abnormal, and emergency procedures.{" "}
              </p>
            </div>
          ) : activeTab == "Head Hunting" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Head Hunting</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.{" "}
              </p>
            </div>
          ) : activeTab == "Entrepreneurship" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Entrepreneurship</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).{" "}
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-center mt-4">
            <button
              className="rounded-lg py-3 w-[150px] border text-white bg-transparent hover:font-bold"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
