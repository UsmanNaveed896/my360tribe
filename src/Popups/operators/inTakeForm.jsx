import React, { useState } from "react";
import Img from "../../assets/cc.png";

const InTakeForm = () => {
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
          <img src={Img} alt="abc" />
          <div className="text text-center">
            <h1 className="font-bold text-[35px]">
              My360Tribe Operator Intake Form
            </h1>
            <p className="mt-2 font-bold">
              Thank you for reaching out to My360Tribe. Our Mission is simple:
            </p>
            <p className="mt-2 font-bold">
              In support of U.S. Special Operations Forces (SOF) Operators, our
              <br></br>
              mission is to provide Peer Advocacy and Concierge level support
              for <br></br> SOF Operators as they face the challenges before,
              during and after <br></br> transition.
            </p>
            <p className="mt-2 font-bold">
              In order to receive support from My360Tribe, you need to meet the
              <br></br>
              definition of a SOF Operator.  A SOF Operator is defined by branch
              <br></br>
              as follows:
            </p>
          </div>
          <div className="tablexx mt-6 ">
            <div className="overflow-x-auto flex justify-center">
              <table className="min-w-[70%]  border-white border rounded-xl text-white">
                <thead className="bg-[#152252] rounded-xl font-bold">
                  <tr>
                    <th className="rounded-xl border px-6 py-3 text-left text-xs   uppercase tracking-wider">
                      Air Force
                      <br />
                      <span className="my-5 block">AFSOC</span>
                    </th>
                    <th
                      scope="col"
                      className="rounded-xl border px-6 py-3 text-left text-xs   uppercase tracking-wider"
                    >
                      Army
                      <br />
                      <span className="my-5 block">USASOC</span>
                    </th>
                    <th
                      scope="col"
                      className="rounded-xl border px-6 py-3 text-left text-xs   uppercase tracking-wider"
                    >
                      Navy
                      <br />
                      <span className="my-5 block"> NSW NSO</span>
                    </th>
                    <th
                      scope="col"
                      className=" rounded-xl border px-6 py-3 text-left text-xs   uppercase tracking-wider"
                    >
                      Marines
                      <br />
                      <span className="my-5 block"> MARSOC</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#152252] rounded-xl ">
                  {/* Example row, you can duplicate this for more rows */}
                  <tr>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      Combat Controller/TACP
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      Ranger (75th Regiment)
                    </td>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      EOD
                    </td>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      Raider
                    </td>
                  </tr>
                  <tr>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      Pararescue (PJ)
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      Green Beret
                    </td>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      SEAL
                    </td>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      Marine Force Recon
                    </td>
                  </tr>
                  <tr>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      24th Special Tactics <br></br>Squadron (JSOC)
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      SMU
                    </td>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      SWCC
                    </td>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm "></td>
                  </tr>
                  <tr>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm font-medium "></td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      160th Special Operations <br></br>
                      Aviation Regiment (SOAR) <br></br>
                      Night Stalkers
                    </td>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm "></td>
                    <td className=" rounded-xl border px-6 py-4 whitespace-nowrap text-sm "></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="tct max-w-[70%]">
              <p className="mt-2 font-bold">
                You must also be transitioning or have already transitioned out
                of the military.  If you have already transitioned, the time in
                which you have been out does not matter.  In order for us to
                make a meaningful match with a Peer Ambassador and ensure you
                are connected with the appropriate resources and service
                organizations, please provide us with a little information about
                you.
              </p>
              <div className="form mt-6">
                <form>
                  <div className="flex justify-between">
                    <input
                      className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                      placeholder="First Name"
                    />
                    <input
                      className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                      placeholder="Last Name"
                    />
                  </div>
                  <select
                    className="w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2"
                    value={selectedBranch}
                    onChange={handleBranchChange}
                  >
                    <option value="AirForce">Air Force AFSOC</option>
                    <option value="Army">Army USASOC</option>
                    <option value="Navy">Navy NSW NSO</option>
                    <option value="Marines">Marines MARSOC</option>
                  </select>
                  <select className="w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2">
                    {branchOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="flex justify-between mt-5">
                    <p className="text-[#9ca3af]">
                      Are you currently employed ?
                    </p>
                    <div className="flex gap-3">
                      <div class="flex items-center">
                        <input
                          id="yes"
                          name="option"
                          type="radio"
                          value="yes"
                          class="h-4 w-4 text-[#9ca3af] border-gray-300 focus:ring-indigo-500"
                        />
                        <label
                          for="yes"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="no"
                          name="option"
                          type="radio"
                          value="no"
                          class="h-4 w-4 text-[#9ca3af] border-gray-300 focus:ring-indigo-500"
                        />
                        <label
                          for="no"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <style>{customStyles}</style>
                  <div>
                    <input
                      type="date"
                      class="w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2"
                    />
                  </div>
                  <div className="ss">
                    <input
                      type="text"
                      class="w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2"
                      placeholder="Where are you located?"
                    />
                  </div>
                  <div className="mt-5">
                    <input type="file" id="file-upload" className="hidden" />
                    <div className="flex justify-between items-center block w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] px-2">
                      <p className=" ">
                        {" "}
                        Please upload a copy of your DD214.  Please ensure your
                        social security number and any other <br></br>
                        sensitive information is redacted.
                      </p>
                      <label htmlFor="file-upload" className="cursor-pointer ">
                        <i className="fa fa-upload text-white"></i>
                      </label>
                    </div>
                  </div>
                  <select className="w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2">
                    <option className="">
                      What type of support are you seeking ?
                    </option>
                  </select>
                  <select className="w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2">
                    <option className="">
                      What type of mental health information/support is needed?
                    </option>
                  </select>
                  <p className="mt-2 font-bold">Please Note: My360Tribe does not provide mental health counseling/services, financial or legal advice.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InTakeForm;
