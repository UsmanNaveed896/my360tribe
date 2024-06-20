import React, { useState } from "react";
import Img from "../../assets/unnamed.png";

const ConciergeForm = () => {
  const linear = "linear-gradient(90deg, #0C1A4C 0%, #28345F 100%)";

  const options = {
    AirForce: [
      "Combat Controller/TACP",
      " Pararescue (PJ)",
      "24th Special Tactics Squadron (JSOC)",
    ],
    Army: [
      "Ranger (75th Regiment)",
      "Green Beret",
      "SMU",
      "Marine Force Recon",
      "160th Special Operations Aviation Regiment (SOAR) Night Stalkers",
    ],
    Navy: ["EOD", "SEAL", "SWCC"],
    Marines: ["Raider", "Marine Force Recon"],
  };
  const [selectedBranch, setSelectedBranch] = useState("AirForce");
  const [branchOptions, setBranchOptions] = useState(options[selectedBranch]);

  const handleBranchChange = (event) => {
    const branch = event.target.value;
    setSelectedBranch(branch);
    setBranchOptions(options[branch]);
  };
  const customStyles = `
  input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg);
  }
  input[type='date']::-ms-clear {
    display: none;
  }
  input[type='date']::-ms-expand {
    display: none;
  }
`;
  return (
    <div className="main" style={{ backgroundColor: linear }}>
      <div className="flex justify-center bg-[#15214c] md:pt-32 pt-12 text-white">
        <div className="max-w-[1200px] container pb-24">
          <img className="h-[180px]" src={Img} alt="abc" />
          <div className="flex justify-center mt-4">
            <div className="tct max-w-[70%]">
              <div className="form mt-6">
                <form>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    placeholder="Name"
                  />
                  <div className="flex justify-between mt-5">
                    <input
                      className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                      placeholder="Phone"
                      type="number"
                    />
                    <input
                      className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                      placeholder="Email"
                    />
                  </div>
                  <input
                    className="rounded w-full mt-5 py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    placeholder="Branch of Service"
                  />
                  <div className="flex justify-between mt-5">
                    <input
                      className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                      placeholder="Date of Separation"
                      type="date"
                    />
                    <input
                      className="rounded py-2 pl-6 pr-8 bg-[#152252] border text-[#fff] w-[55%]"
                      placeholder="Preffered method of Contact e.g Phone/email"
                    />
                  </div>
                  <input
                    className="rounded w-full mt-5 py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    placeholder="How did you hear about us?"
                  />

                  <input
                    className="rounded w-full mt-5 py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    placeholder=" Why would you like to be a Concierge?"
                  />
                  <input
                    className="rounded w-full mt-5 py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    placeholder=" How many hours a month can you commit to your Operator?"
                  />

                  <input
                    className="rounded w-full my-5 py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    placeholder="How many Operators would you be able to work with at one time if asked?"
                  />
                  <label className="mt-5">
                    Did you work with any transition services / organizations
                    during your transition, and would you recommend any of them?
                    If yes, which ones?
                  </label>
                  <input
                    className="rounded w-full mt-2 py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    placeholder="Transition services / organization.."
                  />
                    <input
                    className="rounded w-full my-5 py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    placeholder="What areas of transition do you feel you can best support?"
                  />
                      <input
                    className="rounded w-full my-5 py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    placeholder="What area(s)/topics are you uncomfortable with?"
                  />
                
              
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConciergeForm;
