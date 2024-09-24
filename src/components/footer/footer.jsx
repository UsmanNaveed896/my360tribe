import React from "react";
import Img from "../../assets/charitylogo.jpeg";
import Img2 from "../../assets/linkedin.png";
import Img3 from "../../assets/unnamed.webp";

const Footer = ({ handleClick, setIsModalOpen }) => {
  const gradient =
    "linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)";
  const buttonGradient =
    "linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)";
  const handleOptionClick = (option) => {
    if (option === "Concierge") {
      setIsModalOpen((st) => ({
        ...st,
        mod1: false,
        mod2: true,
        mod3: false,
        mod4: false,
      }));
    } else if (option === "Peer Advocate Member") {
      setIsModalOpen((st) => ({
        ...st,
        mod1: false,
        mod2: false,
        mod3: true,
        mod4: false,
      }));
    } else {
      setIsModalOpen((st) => ({
        ...st,
        mod1: false,
        mod2: false,
        mod3: false,
        mod4: true,
      }));
    }
  };
  return (
    <div className="px-2 py-1 bg-gradient-to-r from-black to-gray-400 relative ">
      <div className="grid md:grid-cols-3 mt-6 grid-cols-1  ">
        <div className="txt text-white text-[16px] ">
          <div className="flex justify-center ">
            <div>
              <div className="flex justify-center">
                <img className="h-[80px]" src={Img3} alt="logo" />
              </div>
              <p className="mt-2 font-bold md:text-center text-center text-[#BDC6E6]">
                Address
              </p>
              <p className="md:text-center text-center font-bold">
                My360Tribe<br></br> 128 Adrian Avenue, <br></br>South San
                Francisco, CA 94080
              </p>

              <p className="font-bold md:text-center text-center text-[#BDC6E6]">
                Contact us
              </p>
              <div className="flex md:justify-center justify-center">
                <img
                  className="h-4 cursor-pointer md:my-0 my-3"
                  src={Img2}
                  alt="abc"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-12 md:mt-0 md:block lg:block xl:block hidden">
            <div>
              <div className=" flex justify-center">
                <img className="h-[80px] w-[180px] " src={Img} alt="logo" />
              </div>
              <div>
                <p className="md:text-center text-center text-white  text-[16px] md:mt-[90px] mt-5 font-bold">
                  Terms & Conditions
                </p>
                <p className=" cursor-pointer mt-2 md:w-full text-white md:text-center text-center">
                  Copyright © 2024 My360Tribe. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="logo text-white flex md:justify-center relative pb-16 md:flex-row flex-col">
          <div className="text-[16px] text-white  ">
            <div className=" md:mb-[16px] mb-[20px] mt-[20px] md:mt-0 flex justify-center">
              <button
                className=" text-sm  rounded border-white text-white border w-[192px] h-[45px]  hover:border-2"
                onClick={() => handleClick(0)}
              >
                Get Involved
              </button>
            </div>
            <div className=" md:mb-[16px] mb-[20px] mt-[20px] md:mt-0 flex justify-center">
              <button
                className=" text-sm  rounded border-white text-white border w-[192px] h-[45px]  hover:border-2"
                onClick={() => handleOptionClick("Concierge")}
              >
                Concierge
              </button>
            </div>
            <div className=" md:mb-[16px] mb-[20px] mt-[20px] md:mt-0 flex justify-center">
              <button
                className=" text-sm  rounded border-white text-white border w-[192px] h-[45px]  hover:border-2"
                onClick={() => handleOptionClick("Peer Advocate Member")}
              >
                Peer Ambassador
              </button>
            </div>
            <div className=" md:mb-[16px] mb-[20px] mt-[20px] md:mt-0 flex justify-center">
              <button
                className=" text-sm  rounded border-white text-white border w-[192px] h-[45px]  hover:border-2"
                onClick={() => handleOptionClick("Service Partners")}
              >
                Service Partners
              </button>
            </div>
            <div className="flex ml-1 justify-center">
              <button
                className="text-[16px] rounded-xl  text-white border w-[98px] h-[45px] mt-2 bg-[red] border-[red] hover:border-2"
                onClick={() =>
                  (window.location.href =
                    "https://merchant.reverepayments.dev/forms/35SqPodk7aSXSW6tE3N9-ToxPhV_kGW1sTEVX3iM3X8=")
                }
              >
                Donate
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 md:mt-0 md:hidden lg:hidden xl:hidden block">
          <div>
            <div className=" flex justify-center">
              <img className="h-[80px] w-[180px] " src={Img} alt="logo" />
            </div>
            <div>
              <p className="md:text-center text-center text-white  text-[16px] md:mt-[90px] mt-5 font-bold">
                Terms & Conditions
              </p>
              <p className=" cursor-pointer mt-2 md:w-full text-white md:text-center text-center">
                Copyright © 2024 My360Tribe. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
