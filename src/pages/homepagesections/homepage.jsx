import React, { useState } from "react";
import Img from "../../assets/Group 1000006061.jpeg";
import Img1 from "../../assets/Group 1000006062.jpeg";
import Img2 from "../../assets/Group 1000006063.jpeg";
import Img3 from "../../assets/Group 1000006064.png";
import Img4 from "../../assets/Group10000062671.png";
import Img6 from "../../assets/Untitled-h.png";
import PicsModal from "../../Popups/picsModal";

const Homepage = ({ isModalOpen, setIsModalOpen }) => {
  const img4 = {
    heading: " Service Partners",
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  };

  const img2 = {
    heading: "Concierge",
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  };
  const img1 = {
    heading: "Operators",
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  };
  const img3 = {
    heading: "Peer Advocate Member",
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
  };
  const handleCancel = () => {
    // Implement cancel logic here
    console.log("Cancelling...");
    setIsModalOpen(false);
  };
  const Gradient =
    "linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)";
  return (
    <div
      className="bg-[#070c1f] md:mt-12 mt-0 pb-[72px] md:bg-cover bg-contain "
      style={{ backgroundImage: `url(${Img4})` }}
    >
      <div className="flex justify-center px-4 md:px-0">
        <div className="container max-w-[1300px] md:mt-16 mt-4">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            <div>
              <img
                className=" md:block hidden h-[400px]"
                src={Img6}
                alt="abc"
              />
            </div>
            <div className="flex md:justify-end justify-center">
              <div>
                <h1 className="text-[55px] text-white font-bold">
                  My 360 Tribe
                </h1>
                <p className="text-white">
                  In support of U.S. Special Operations Forces Operators, our
                  mission is <br></br> to bridge the gap between military service and
                  civilian success; <br></br> honoring their service, exceptional skills
                  and experience
                </p>
              </div>
            </div>
          </div>

       
          <div className="flex md:justify-evenly justify-center md:mt-2 mt-8 pb-16 flex-wrap">
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
                    }))
                  }
                />
              </div>
              <h1 className="font-semibold text-[29px] text-[#f9fafa] text-center mt-5">
                Conceirge
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
                    }))
                  }
                />
              </div>
              <h1 className="font-semibold text-[29px] text-[#f9fafa] text-center mt-5">
                Peer Advocate Member
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
