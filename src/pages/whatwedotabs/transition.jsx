import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Transition = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Mentorship");

  const handleTabs = (item) => {
    setActiveTab(item);
  };
  const transition = [
    "Mentorship",
    "Financial Support",
    "Relocation",
    "Assistance",
    "Family/Legal",
    "Support",
  ];
  return (
    <div className="main">
      <div className="flex justify-center bg-[#15214c] md:pt-32 pt-12">
        <div className="max-w-[1200px] container pb-24">
          <i
            class="fa fa-long-arrow-left text-2xl text-white hover:font-bold cursor-pointer"
            onClick={() => navigate("/")}
          ></i>
          <h1 className="text-white md:text-5xl text-2xl mt-12 text-center md:pb-12 pb-2 font-bold">
            <i class="fa fa-exchange mr-2 text-[36px]" aria-hidden="true"></i>{" "}
            Transition
          </h1>
          <div  className="w-full overflow-x-scroll md:overflow-hidden md:mt-12 mt-3">
            <ul class="flex md:gap-6 gap-2 text-xs md:text-sm font-medium text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              {transition.map((item) => (
                <li
                  class={`me-2 md:pr-12 pr-1 cursor-pointer ${
                    activeTab === item ? "border-b-2 border-[#d0d7f4] " : ""
                  } bg-[#15214c]`}
                >
                  <a
                    class="inline-block p-4 text-[#d0d7f4] font-bold rounded-t-lg active"
                    onClick={() => handleTabs(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {activeTab == "Mentorship" ? (
            <div className="transition-training bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Mentorship</h1>
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
          ) : activeTab == "Financial Support" ? (
            <div className="transition-training bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Financial Support</h1>
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
          ) : activeTab == "Relocation" ? (
            <div className="transition-training bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Relocation</h1>
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
          ) : activeTab == "Assistance" ? (
            <div className="transition-training bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Assistance</h1>
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
          ) : activeTab == "Family/Legal" ? (
            <div className="transition-training bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Family/Legal</h1>
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
          ) : activeTab == "Support" ? (
            <div className="transition-training bg-[#d0d7f4] px-6 rounded-xl py-12 md:h-[500px] h-[80%] text-[#001c7a] mt-4">
              <h1 className="font-bold text-3xl">Support</h1>
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

export default Transition;
