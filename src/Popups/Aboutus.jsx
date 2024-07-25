import React from "react";
import Img from "../assets/Card12.png";
const Aboutus = ({ isOpen, setIsModalOpen}) => {
  if (
    !isOpen.mod1 &&
    !isOpen.mod2 &&
    !isOpen.mod3 &&
    !isOpen.mod4 &&
    !isOpen.mod5
  ) {
    return null;
  }
  return (
    <div
      className="relative z-10 top-[5%]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black text-white opacity-80 "></div>

      <div className="fixed inset-0 z-10 mt-16">
        <div className="flex h-[100vh] items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
          <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all md:my-32 my-2 sm:my-8 max-w-[900px] bg-[#15214c] ">
            <div className="h-[500px] overflow-y-scroll"
            //   style={{ backgroundImage: `url(${Img})` }}
            >
              <div className="flex justify-end p-2">
                <i
                  className="fa fa-close text-white hover:font-bold cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                ></i>
              </div>
              <div className="flex justify-center p-5 text-white ">
                <div>
                  <h1 className="text-[20px] font-bold">Who We Are</h1>
                  <p className="font-thin">
                    My 360 Tribe was founded on the premise of support and
                    guidance for members of the Special Operations Forces (SOF)
                    community as they embark on the pivotal journey
                    transitioning from military valor to civilian achievement.
                    Transitioning for Operators can be very stressful as they
                    leave their brotherhood and community behind. My 360 Tribe
                    aims to bridge that gap, providing peer support of Operators
                    to Operators who have successfully transitioned and
                    understand the challenges of someone who has walked in their
                    shoes. Established by a cadre of SOF veterans and
                    insightful, experienced civilian mentors, our organization
                    is uniquely poised to address the multifaceted challenges
                    encountered by our operators during this critical time.
                  </p>
                  <h1 className="text-[20px] font-bold mt-4">Our Mission</h1>
                  <p className="font-thin">
                    Dedicated to offering peer-to-peer and concierge-level
                    support, My 360 Tribe ensures U.S. Special Operations
                    ForcesSOF Operators are well-prepared, empowered, and
                    supported by those who understand the emotional and
                    intellectualchallenges of transition. Our mission is to
                    bridge the gap between military service and civilian
                    success, addressing thechallenging aspects of transition
                    while honoring their service, exceptional skills and
                    experience. We are here to ensure these Operators have
                    access to the services that set them up for success during
                    their transition and beyond.
                  </p>
                  <h1 className="text-[20px] font-bold mt-4">Our Vision</h1>
                  <p className="font-thin">
                    To become the cornerstone of support for every SOF Operator,
                    providing concierge level peer support by providing access
                    to a suite of services that cater to their holistic needs —
                    professional, personal, and emotional. We envision a future
                    where our heroes integrate seamlessly into civilian life,
                    leveraging their unique capabilities to continue to lead,
                    innovate, and inspire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
