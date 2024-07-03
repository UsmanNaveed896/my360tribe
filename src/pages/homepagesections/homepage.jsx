import React, { useState } from "react";
import Img from "../../assets/peer ambassador 2.webp";
import Img1 from "../../assets/Group 1000006062.jpeg";
import Img2 from "../../assets/Group 1000006063.jpg";
import Img3 from "../../assets/Group 1000006064.png";
import Img4 from "../../assets/Group10000062671.png";
import Img6 from "../../assets/unnamed.png";
import PicsModal from "../../Popups/picsModal";

const Homepage = ({ isModalOpen, setIsModalOpen }) => {
  const img4 = {
    heading: " Service Partners",
    text: "We are always looking to build new partnerships that can support transitioning warriors. Please click here if you would like to partner with My360Tribe or to learn more",
  };

  const img2 = {
    heading: "Concierge",
    text: "Are you passionate about making a difference in the life of a transitioning Operator?  Are you an Operator who has already transitioned and wants to give back to your Community?  Apply here to be a Concierge.",
  };
  const img1 = {
    heading: "Operators",
    text: '"We are dedicated to serving those U.S. Special Operations members that were assessed, selected, trained, qualified, and served honorably as Operators at any of the U.S. Special Operations Commands, specifically, the U.S. Army Special Operations Command, U.S. Air Force Special Operations Command, U.S. Marine Forces Special Operations Command, Naval Special Warfare Command, and Joint Special Operations Command.',
  };
  const img3 = {
    heading: "Peer Ambassador",
    text: "Are you a SOF Operator who has been out of the military for more than a year and wants to support a newly transitioning Operator?",
  };

  const handleCancel = () => {
    // Implement cancel logic here
    console.log("Cancelling...");
    setIsModalOpen(false);
  };
  const Gradient =
    "linear-gradient(to right, rgba(10, 25, 78, 1), rgba(1, 3, 11, 1))";
  return (
    <div
      className="bg-[#070c1f] md:mt-12 mt-0 pb-[65px] md:bg-cover bg-contain "
      style={{ backgroundImage: `url(${Img4})`,}}
    >
      <div className="flex justify-center px-4 md:px-0">
        <div className="container max-w-[1400px] md:mt-16 mt-4">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <img
                className=" md:block hidden h-[350px] "
                src={Img6}
                alt="abc"
              />
            </div>
            <div className="flex md:justify-end justify-center">
              <div>
                <h1 className="text-[55px] text-white font-bold">My360Tribe</h1>
                <p className="text-white text-[22px]">
                  In support of U.S. Special Operations Forces Operators, our<br></br>
                  mission is to provide Peer Ambassador and Concierge level
                  support for SOF Operators as they face the challenges before,
                  during and after transition.
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:justify-evenly justify-center md:mt-8 mt-8 pb-16 flex-wrap gap-12">
            <div className="py-6 md:py-0">
              <div className="flex justify-center">
                <img
                  className="cursor-pointer w-[250px] h-[200px] border rounded-xl"
                  src={Img3}
                  alt="pic"
                  onClick={() =>
                    setIsModalOpen((st) => ({
                      ...st,
                      mod1: true,
                      mod2: false,
                      mod3: false,
                      mod4: false,
                      mod5: false,
                    }))
                  }
                />
              </div>
              <h1 className="font-semibold text-[29px] text-[#f9fafa] text-center mt-5">
                Operators
              </h1>
              {/* <img className="md:block hidden" src={Img5} alt="connect" /> */}
            </div>
            <div className="py-6 md:py-0">
              <div className="flex justify-center">
                <img
                  className="cursor-pointer w-[250px] rounded-lg h-[200px] border rounded-xl"
                  src={Img2}
                  alt="pic"
                  onClick={() =>
                    setIsModalOpen((st) => ({
                      ...st,
                      mod1: false,
                      mod2: true,
                      mod3: false,
                      mod4: false,
                      mod5: false,
                    }))
                  }
                />
              </div>
              <h1 className="font-semibold text-[29px] text-[#f9fafa] text-center mt-5">
                Concierge
              </h1>
            </div>
            <div className="py-6 md:py-0 w-[250px]">
              <div className="flex justify-center  ">
                <img
                  className="cursor-pointer  w-[250px] rounded-lg h-[200px] border rounded-xl"
                  src={Img}
                  alt="pic"
                  onClick={() =>
                    setIsModalOpen((st) => ({
                      ...st,
                      mod1: false,
                      mod2: false,
                      mod3: true,
                      mod4: false,
                      mod5: false,
                    }))
                  }
                />
              </div>
              <h1 className="font-semibold text-[29px] text-[#f9fafa] text-center mt-5">
                Peer Ambassador
              </h1>
            </div>

            <div className="py-6 md:py-0">
              <div className="flex justify-center">
                <img
                  className="cursor-pointer  h-[200px] w-[250px] border rounded-xl"
                  src={Img1}
                  alt="pic"
                  onClick={() =>
                    setIsModalOpen((st) => ({
                      ...st,
                      mod1: false,
                      mod2: false,
                      mod3: false,
                      mod4: true,
                      mod5: false,
                    }))
                  }
                />
              </div>
              <h1 className="font-semibold text-[29px] text-[#f9fafa] text-center mt-5">
                Service Partners
              </h1>
            </div>
          </div>
          <PicsModal
            isOpen={isModalOpen}
            onCancel={handleCancel}
            data={
              isModalOpen.mod1
                ? img1
                : isModalOpen.mod2
                ? img2
                : isModalOpen.mod3
                ? img3
                : img4
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
