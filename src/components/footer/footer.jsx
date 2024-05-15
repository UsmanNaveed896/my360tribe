import React from "react";
import Img from "../../assets/charitylogo.jpeg";
import Img2 from "../../assets/linkedin.png";
import Img3 from "../../assets/logs.png";

const Footer = () => {
  const gradient =
    "linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)";
  const buttonGradient =
    "linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)";

  return (
    <div className="px-2 py-1 bg-gradient-to-r from-black to-gray-400 relative">
      <div className="grid grid-cols-3 mt-6 md:flex-row flex-col ">
        <div className="logo text-white  ">
        <div className="text-[25px] text-white  ">
        <div className=" mb-[64px]">
            <button className=" text-[25px]  rounded border-white text-white border px-8 py-2 mt-2 hover:border-2">
              Get Involved
            </button>
          </div>
          </div>
          <img className="h-[80px] w-[180px] mt-5 absolute bottom-2 left-6" src={Img} alt="logo" />
        </div>
        <div>
        <div className="flex justify-center mb-[64px]">
            <button className=" text-[25px]  rounded border-white text-white border px-8 py-2 mt-2 hover:border-2">
              Donate
            </button>
          </div>
          <p className="text-center text-white text-[20px] mt-32">Terms & Conditions</p>
        </div>

        <div className="txt text-white text-[20px] ">
          <div className="flex justify-end">
            <div>
              <img className="h-[80px]" src={Img3} alt="logo" />
              <p className="mt-2 font-bold">Address</p>
              <p>43 west, 43 street New York</p>

              <p className="mt-2 font-bold">Contact us</p>
              <div>
                <ul className="flex gap-2 mt-4 ">
                  {/* <li className=" relative py-2 pb-4 h-8 w-8 rounded-full text-black  text-center bg-[white]">
                <span>
                  <i
                    class=" absolute left-3  fa fa-facebook "
                    aria-hidden="true"
                  ></i>
                </span>
              </li> */}
                  {/* <li className="relative py-2 pb-4 h-8 w-8 rounded-full text-black  text-center bg-[white]  ">
                <span>
                  <i
                    class="absolute left-2  fa fa-twitter "
                    aria-hidden="true"
                  ></i>
                </span>
              </li> */}
                  {/* <li className="relative py-2 pb-4 h-8 w-8 rounded-full text-black  text-center bg-[white]    ">
                <span>
                  <i
                    class="absolute left-2  fa fa-instagram "
                    aria-hidden="true"
                  ></i>
                </span>
              </li> */}
                  {/* <li className="relative py-2 pb-4 h-8 w-8 rounded-full text-black  text-center bg-[white]    ">
                <span>
                  <i
                    class="absolute left-2  fa fa-youtube "
                    aria-hidden="true"
                  ></i>
                </span>
              </li> */}
                  <li className="rounded bg-white ">
                    {/* <span>
                  <i
                    class="absolute left-2 fa fa-linkedin "
                    aria-hidden="true"
                  ></i>
                </span> */}
                    <img className="h-6 cursor-pointer" src={Img2} alt="abc" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
          <div className="relative " >
            <p className=" cursor-pointer mt-2 text-white text-center ">
              Copyright © 2024 My360Tribe. All rights reserved.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Footer;
