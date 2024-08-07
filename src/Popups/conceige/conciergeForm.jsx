import React, { useContext, useState } from "react";
import Img from "../../assets/unnamed.webp";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAddConceirgeHook } from "../../hooks/useAddConceirgeHook";
import { AuthContext } from "../../pages/Authentication/authecontext";

const ConciergeForm = () => {
  const { auth } = useContext(AuthContext);
  const Conceirge = useAddConceirgeHook();
  const navigate = useNavigate();
  const linear = "linear-gradient(90deg, #0C1A4C 0%, #28345F 100%)";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if(!auth) {
      navigate('/signin')
    }else{
      Conceirge.handleAdConceirge(data);

    }
  };

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
          <div className="flex justify-center mt-4 px-4 md:px-0">
            <div className="tct md:max-w-[70%] max-w-full">
              <div className="form mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="text-[#9ca3af] py-1">Your full name</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && (
                    <span className="text-red-500">Full name is required</span>
                  )}

                  <div className="flex md:justify-between flex-col md:flex-row mt-5">
                    <div>
                      <p className="text-[#9ca3af] py-1">Phone</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] "
                        type="tel"
                        {...register("phone", {
                          required: true,
                          pattern: /^[0-9-]+$/,
                        })}
                      />
                      {errors.phone && (
                        <div>
                          <span className="text-red-500">
                            Valid phone number is required
                          </span>{" "}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">Email</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] "
                        type="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        })}
                      />
                      {errors.email && (
                        <div>
                          {" "}
                          <span className="text-red-500">
                            Valid email is required
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-[#9ca3af] py-1 mt-5">Branch of Service</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("branchOfService", { required: true })}
                  />
                  {errors.branchOfService && (
                    <span className="text-red-500">
                      Branch of Service is required
                    </span>
                  )}

                  <div className="flex md:justify-between flex-col md:flex-row mt-5">
                    <div>
                      <p className="text-[#9ca3af] py-1">DOB</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        type="date"
                        {...register("DOB", { required: true })}
                      />
                      {errors.DOB && (
                        <span className="text-red-500">
                          Date of Birth is required
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">
                        How we can contact you?
                      </p>
                      <input
                        className="rounded py-2 pl-6 pr-8 bg-[#152252] border text-[#fff] w-[400px]"
                        {...register("contactMethod", { required: true })}
                      />
                      {errors.contactMethod && (
                        <div>
                          {" "}
                          <span className="text-red-500">
                            Contact method is required
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-[#9ca3af] py-1 mt-5">
                    How did you hear about us?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("howHeardAboutUs", { required: true })}
                  />
                  {errors.howHeardAboutUs && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    Why would you like to be a Concierge?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("whyConcierge", { required: true })}
                  />
                  {errors.whyConcierge && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    How many hours a month can you commit to your Operator?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    type="number"
                    {...register("hoursPerMonth", {
                      required: true,
                      valueAsNumber: true,
                    })}
                  />
                  {errors.hoursPerMonth && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    How many Operators would you be able to work with at one
                    time if asked?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    type="number"
                    {...register("numberOfOperators", {
                      required: true,
                      valueAsNumber: true,
                    })}
                  />
                  {errors.numberOfOperators && (
                    <div>
                      <span className="text-red-500">
                        This field is required
                      </span>
                    </div>
                  )}

                  <label className="mt-5">
                    Did you work with any transition services / organizations
                    during your transition, and would you recommend any of them?
                    If yes, which ones?
                  </label>
                  <p className="text-[#9ca3af] py-1 mt-5">
                    Transition services / organization
                  </p>
                  <input
                    className="rounded w-full mt-2 py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("transitionServices", { required: true })}
                  />
                  {errors.transitionServices && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    What areas of transition do you feel you can best support?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("areasOfSupport", { required: true })}
                  />
                  {errors.areasOfSupport && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    What area(s)/topics are you uncomfortable with?
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("uncomfortableTopics", { required: true })}
                  />
                  {errors.uncomfortableTopics && (
                    <span className="text-red-500">This field is required</span>
                  )}

                  <div className="flex justify-center mt-5">
                    <button
                      disabled={Conceirge.loading}
                      type="submit"
                      className="rounded border bg-transparent py-2 px-5 hover:font-semibold"
                    >
                      {Conceirge.loading ? "Submitting..." : "Submit"}
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

export default ConciergeForm;
