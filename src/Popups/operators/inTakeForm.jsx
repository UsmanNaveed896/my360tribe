import React, { useContext, useState } from "react";
import Img from "../../assets/unnamed.webp";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAddOperatorHook } from "../../hooks/useAddOperatorHook";
import { AuthContext } from "../../pages/Authentication/authecontext";

const InTakeForm = () => {
  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();
  const operator = useAddOperatorHook();
  const linear = "linear-gradient(90deg, #0C1A4C 0%, #28345F 100%)";

  const options = {
    AirForce: [
      "Combat Controller/TACP",
      "Pararescue (PJ)",
      "24th Special Tactics Squadron (JSOC)",
    ],
    Army: [
      "Ranger (75th Regiment)",
      "Green Beret",
      "SMU",
      "Marine Force Recon",
      "160th Special Operations Aviation Regiment (SOAR) Night Stalkers",
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!auth) {
      navigate("/signin");
    } else {
      operator.handleAdOperator(data);
      if (operator.loginResponse == 201) {
        reset();
      }
    }

    // Handle form submission
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
          <i
            className="fa fa-arrow-left mt-6 ml-20 hover:text-[17px] cursor-pointer"
            aria-hidden="true"
            onClick={() => navigate("/")}
          ></i>
          <div className="text text-center px-4 md:px-0">
            <h1 className="font-bold text-[35px]">
              My360Tribe Operator Intake Form
            </h1>
            <p className="mt-2 font-bold">
              Thank you for reaching out to My360Tribe. Our Mission is simple:
            </p>
            <p className="mt-2 font-bold">
              In support of U.S. Special Operations Forces (SOF) Operators, our
              <br className="md:block hidden"></br>
              mission is to provide Peer Advocacy and Concierge level support
              for <br className="md:block hidden"></br> SOF Operators as they
              face the challenges before, during and after{" "}
              <br className="md:block hidden"></br> transition.
            </p>
          </div>
          <div className="tablexx mt-6 ">
            <div className="overflow-x-auto flex md:justify-center flex justify-start">
              <table className="md:min-w-[70%] min-w-full  border-white border rounded-xl text-white">
                <thead className="bg-[#152252] rounded-xl font-bold">
                  <tr>
                    <th className="rounded-xl border px-6 py-3 text-left text-xs uppercase tracking-wider">
                      Air Force
                      <br />
                      <span className="my-5 block">AFSOC</span>
                    </th>
                    <th className="rounded-xl border px-6 py-3 text-left text-xs uppercase tracking-wider">
                      Army
                      <br />
                      <span className="my-5 block">USASOC</span>
                    </th>
                    <th className="rounded-xl border px-6 py-3 text-left text-xs uppercase tracking-wider">
                      Navy
                      <br />
                      <span className="my-5 block">NSW NSO</span>
                    </th>
                    <th className="rounded-xl border px-6 py-3 text-left text-xs uppercase tracking-wider">
                      Marines
                      <br />
                      <span className="my-5 block">MARSOC</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#152252] rounded-xl">
                  <tr>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      Combat Controller/TACP
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      Ranger (75th Regiment)
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      EOD
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      Raider
                    </td>
                  </tr>
                  <tr>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      Pararescue (PJ)
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      Green Beret
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      SEAL
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      Marine Force Recon
                    </td>
                  </tr>
                  <tr>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm font-medium ">
                      24th Special Tactics <br />
                      Squadron (JSOC)
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      SMU
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      SWCC
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm "></td>
                  </tr>
                  <tr>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm font-medium "></td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm ">
                      160th Special Operations <br />
                      Aviation Regiment (SOAR) <br />
                      Night Stalkers
                    </td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm "></td>
                    <td className="rounded-xl border px-6 py-4 whitespace-nowrap text-sm "></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center mt-4 px-4 md:px-0">
            <div className="tct md:max-w-[70%] max-w-full">
              <p className="mt-2 font-bold">
                You must also be transitioning or have already transitioned out
                of the military. If you have already transitioned, the time in
                which you have been out does not matter. In order for us to make
                a meaningful match with a Peer Ambassador and ensure you are
                connected with the appropriate resources and service
                organizations, please provide us with a little information about
                you.
              </p>
              <div className="form mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex md:justify-between md:flex-row flex-col">
                    <div>
                      <p className="text-[#9ca3af] py-1">First Name</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                      />
                      {errors.firstName && (
                        <p className="text-red-500">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">Last Name</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                      />
                      {errors.lastName && (
                        <p className="text-red-500">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <select
                    className="w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2"
                    value={selectedBranch}
                    onChange={handleBranchChange}
                  >
                    <option value="AirForce">Air Force AFSOC</option>
                    <option value="Army">Army USASOC</option>
                    <option value="Marines">Marines MARSOC</option>
                    <option value="Navy">Navy NSW NSO</option>
                  </select>
                  <select
                    className="w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2"
                    {...register("specialty", {
                      required: "Please select a specialty",
                    })}
                  >
                    {branchOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="flex justify-between mt-5">
                    <p className="text-[#9ca3af]">
                      Are you currently employed?
                    </p>
                    <div className="flex gap-3">
                      <div className="flex items-center">
                        <input
                          id="yes"
                          name="employment"
                          type="radio"
                          value="yes"
                          className="h-4 w-4 text-[#9ca3af] border-gray-300 focus:ring-indigo-500"
                          {...register("employment", {
                            required: "Please select an option",
                          })}
                        />
                        <label
                          htmlFor="yes"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="no"
                          name="employment"
                          type="radio"
                          value="no"
                          className="h-4 w-4 text-[#9ca3af] border-gray-300 focus:ring-indigo-500"
                          {...register("employment", {
                            required: "Please select an option",
                          })}
                        />
                        <label
                          htmlFor="no"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  {errors.employment && (
                    <p className="text-red-500">{errors.employment.message}</p>
                  )}
                  <style>{customStyles}</style>
                  <div>

                    <p className="text-[#9ca3af] py-1 mt-5">DOB</p>

                    <input
                      type="date"
                      className="w-full  py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2"
                      {...register("DOB", {
                        required: "Date of Birth is required",
                      })}

                    />
                    {errors.dateOfBirth && (
                      <p className="text-red-500">
                        {errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>
                  <div className="ss">
                    <p className="text-[#9ca3af] py-1 mt-5">
                      Where are you located?
                    </p>
                    <input
                      type="text"
                      className="w-full py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2"
                      {...register("location", {
                        required: "Location is required",
                      })}
                    />
                    {errors.location && (
                      <p className="text-red-500">{errors.location.message}</p>
                    )}
                  </div>
                  <select
                    className="w-full mt-5 py-2 bg-[#152252] border text-[#fff] rounded text-[#9ca3af] pl-2"
                    {...register("mentalHealthSupport", {
                      required: "Mental health support is required",
                    })}
                  >
                    <option value="">
                      What type of mental health information/support is needed?
                    </option>
                    <option value="Individual">Individual</option>
                    <option value="Family">Family</option>
                    <option value="Child">Child</option>
                  </select>
                  {errors.mentalHealthSupport && (
                    <p className="text-red-500">
                      {errors.mentalHealthSupport.message}
                    </p>
                  )}
                  <p className="mt-2 font-bold">
                    Please Note: My360Tribe does not provide mental health
                    counseling/services, financial or legal advice.
                  </p>
                  <div className="flex justify-center mt-5">
                    <button
                      type="submit"
                      className="rounded border bg-transparent py-2 px-5 hover:font-semibold"
                      disabled={operator.loading}
                    >
                      {operator.loading ? "Submitting.." : "Submit"}
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

export default InTakeForm;
