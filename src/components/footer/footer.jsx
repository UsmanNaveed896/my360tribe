import React from "react";
import Img from "../../assets/charitylogo.jpeg";
import Img2 from "../../assets/linkedin.png";
import Img3 from "../../assets/logo1.png";

const Footer = () => {
  const gradient =
    "linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)";
  const buttonGradient =
    "linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)";

  return (
    <div className="px-2 py-1 bg-gradient-to-r from-black to-gray-400 relative ">
      <div className="grid grid-cols-3 mt-6 md:flex-row flex-col ">
        <div className="txt text-white text-[16px] ">
          <div className="flex justify-center">
            <div>
              <div className="flex justify-center">
                <img className="h-[80px]" src={Img3} alt="logo" />
              </div>
              <p className="mt-2 font-bold text-center text-[#BDC6E6]">
                Address
              </p>
              <p className="text-center font-bold">
                My360Tribe<br></br> 128 Adrian Avenue, <br></br>South San
                Francisco, CA 94080
              </p>

              <p className="font-bold text-center text-[#BDC6E6]">
                Contact us
              </p>
              <div className="flex justify-center ">
                <img className="h-4 cursor-pointer" src={Img2} alt="abc" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="h-[80px] w-[180px] " src={Img} alt="logo" />
          </div>

          <p className="text-center text-white text-[16px] mt-[90px] font-bold">
            Terms & Conditions
          </p>
          <p className=" cursor-pointer mt-2 text-white text-center">
            Copyright © 2024 My360Tribe. All rights reserved.
          </p>
        </div>
        <div className="logo text-white flex justify-center relative">
          <div className="text-[16px] text-white  ">
            <div className=" mb-[64px] flex justify-center">
              <button className=" text-sm  rounded border-white text-white border w-[192px] h-[45px]  hover:border-2">
                Get Involved
              </button>
            </div>
            <div className="flex ml-1 justify-center">
              <button className="text-[16px] rounded-xl  text-white border w-[98px] h-[45px] mt-2 bg-[red] border-[red] hover:border-2">
                Donate
              </button>
            </div>
            <p className="text-center text-white mt-[42px] text-[16px]">
              Design & developed by ZAMH Tech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
