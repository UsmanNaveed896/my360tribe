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
    <div className="px-12 py-1 bg-gradient-to-r from-black to-gray-400">
      <div className="flex justify-between mt-6 md:flex-row flex-col">
        <div className="logo text-white">
          <img className="h-[80px] mt-5 " src={Img} alt="logo" />
        </div>

        <div>
          <div className="text-[20px] text-white mt-3">
            <p className=" font-semibold cursor-pointer hover:font-bold">
              Get involved
            </p>
          </div>
          <button className="rounded border-white text-white border px-8 py-2 mt-[94px] hover:border-2">
            Donate
          </button>
        </div>

        <div className="txt text-white text-[20px]">
          <img className="h-[80px]" src={Img3} alt="logo"/>
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
  );
};

export default Footer;
