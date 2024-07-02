import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/unnamed.png";
const Servicepartners = () => {
  const navigate = useNavigate();
  const linear = "linear-gradient(90deg, #0C1A4C 0%, #28345F 100%)";
  return (
    <div className="main" style={{ backgroundColor: linear }}>
      <div className="flex justify-center bg-[#15214c] md:pt-32 pt-12 text-white">
        <div className="max-w-[1200px] container pb-24">
          <img className="h-[180px]" src={Img} alt="abc" />
          <i
            class="fa fa-arrow-left mt-6 ml-20 hover:text-[17px] cursor-pointer"
            aria-hidden="true"
            onClick={() => navigate("/")}
          ></i>
            <div className="text text-center px-4 md:px-0">
            <h1 className="font-bold text-[35px]">
              My360Tribe Service Intake Form
            </h1>
            <p className="mt-2 font-bold">
              Thank you for reaching out to My360Tribe. Our Mission is simple:
            </p>
            <p className="mt-2 font-bold">
              In support of U.S. Special Operations Forces (SOF) Operators, our
              <br className="md:block hidden"></br>
              mission is to provide Peer Advocacy and Concierge level support
              for <br className="md:block hidden"></br> SOF Operators as they face the challenges before,
              during and after <br className="md:block hidden"></br> transition.
            </p>
            <p className="mt-2 font-bold">
              In order to receive support from My360Tribe, you need to meet the
              <br className="md:block hidden"></br>
              definition of a SOF Operator.  A SOF Operator is defined by branch
              <br className="md:block hidden"></br>
              as follows:
            </p>
          </div>
          <div className="flex justify-center mt-4 px-4 md:px-0">
            <div className="tct md:max-w-[70%] max-w-full">
              <div className="form mt-6">
                <form>
                  <p className="text-[#9ca3af] py-1">
                    Organization or Company Name
                  </p>

                  <input className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]" />
                  <div className="flex md:justify-between md:flex-row flex-col mt-5">
                    <div>
                      <p className="text-[#9ca3af] py-1">Phone</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        type="number"
                      />
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">Address</p>
                      <input className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full" />
                    </div>
                  </div>
                  <p className="text-[#9ca3af] py-1 mt-5">Website URL</p>
                  <input className="rounded w-full  py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]" />
                  <div className="flex md:justify-between md:flex-row flex-col mt-5">
                    <div>
                      <p className="text-[#9ca3af] py-1">
                        Point of Contact Name
                      </p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        type="text"
                      />
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">
                        Point of Contact Email
                      </p>

                      <input className="rounded py-2 pl-6 pr-8 bg-[#152252] border text-[#fff] w-[400px]" />
                    </div>
                  </div>
                  <p className="text-[#9ca3af] py-1 mt-5 mt-5">
                    How did you hear about us?
                  </p>
                  <input className="rounded w-full  py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]" />
                  <p className="text-[#9ca3af] py-1 mt-5">
                    Veteran specific services provided
                  </p>
                  <input className="rounded w-full  py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]" />
                  <p className="text-[#9ca3af] py-1 mt-5">Services Provided</p>
                  <input className="rounded w-full  py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]" />
                  <p className="text-[#9ca3af] py-1 mt-5">
                    Please tell us a little about your company/organization and
                    why you want to partner with My360Tribe.
                  </p>
                  <input className="rounded w-full  py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]" />

                  <div className="flex justify-center mt-5">
                    <button className="rounded border bg-transparent py-2 px-5 hover:font-semibold">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicepartners;
