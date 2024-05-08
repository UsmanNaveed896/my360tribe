import React, { useState } from "react";
import Img from "../../assets/Group 2.png";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Dummy = ({ handleClick }) => {
  const navigate = useNavigate();
  const buttonGradient =
    "linear-gradient(to bottom, #12179d, #001c83, #001c69, #031a4e, #0d1633)";
  const peer = [
    "Relocation",
    "Legal Services",
    "Financial Support",
    "Relocation Assistance",
    "Family/Legal Support",
  ];
  const [activeTab, setActiveTab] = useState("Relocation");

  const handleTabs = (item) => {
    setActiveTab(item);
  };
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
            <h1 className="text-white md:text-5xl text-2xl mt-12 text-center md:pb-12 pb-2 font-bold">
              <i class="fa fa-bullhorn mr-2 text-[36px]" aria-hidden="true"></i>{" "}
              Peer Advocacy
            </h1>
          </div>
          <div className="w-full overflow-x-scroll md:overflow-hidden md:mt-12 mt-3 px-4">
            <ul class="flex md:gap-6 gap-2 text-xs md:text-sm font-medium text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {peer.map((item) => (
                <li
                  class={`me-2 md:pr-12 pr-1 md:py-6 py-0  cursor-pointer ${
                    activeTab === item ? "border-b-2 border-[#d0d7f4] " : ""
                  } bg-[#15214c]`}
                >
                  <a
                    class="inline-block md:p-4 px-2 py-2 w-[131px] md:w-full py-4 md:px-0 md:py-0 text-[#d0d7f4] font-bold rounded-t-lg active"
                    onClick={() => handleTabs(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {activeTab == "Relocation" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Relocation</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Relocation – relocating can be stressful and deciding where to
                live and moving can be daunting. We have resources available
                around the country to help you and your family make the best
                decisions on where to settle and begin your life anew. {" "}
              </p>
            </div>
          ) : activeTab == "Legal Services" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Legal Services</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Legal Services – There will be times you may need an attorney to
                have a consultation with or represent you in a legal matter. Our
                team can provide you with referrals to established law firms and
                attorneys available to speak with you.{" "}
              </p>
            </div>
          ) : activeTab == "Financial Support" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Financial Support</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Financial Support – managing finances is an aspect of transition
                that can cause stress. Finding a financial institution,
                financial planner, etc. can seem like a monumental task with all
                that you have going on. Please let your concierge or peer
                advocate know if you guidance in this area and PEER ADVOCACY{" "}
              </p>
            </div>
          ) : activeTab == "Relocation Assistance" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl"> Relocation Assistance</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.{" "}
              </p>
            </div>
          ) : activeTab == "Family/Legal Support" ? (
            <div className="transition-training mx-4 md:mx-0 bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Family/Legal Support</h1>
              <p className="font-semibold text-xl mt-4 leading-[40px]">
                {" "}
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc{" "}
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

export default Dummy;
