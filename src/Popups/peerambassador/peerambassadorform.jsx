import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Img from "../../assets/unnamed.webp";
import { useAddPeerAmbassadorHook } from "../../hooks/useAddPeerAmbassadorHook";
import { AuthContext } from "../../pages/Authentication/authecontext";

const Peerambassadorform = () => {
  const { auth } = useContext(AuthContext);

  const peerAmbassador=useAddPeerAmbassadorHook()
  const navigate = useNavigate();
  const linear = "linear-gradient(90deg, #0C1A4C 0%, #28345F 100%)";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if(!auth){
      navigate('/signin')
    }else{
      peerAmbassador.handleAdPeerAmbassador(data)

    }
    // Handle form submission
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
          <div className="text text-center">
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
              for <br className="md:block hidden"></br> SOF Operators as they face the challenges before,
              during and after <br className="md:block hidden"></br> transition.
            </p>
          </div>
          <div className="flex justify-center mt-4 px-4 md:px-0">
            <div className="tct md:max-w-[70%] max-w-full">
              <div className="form mt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className="text-[#9ca3af] py-1">Your full name</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("fullName", { required: "Full Name is required" })}
                  />
                  {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                  
                  <div className="flex md:justify-between md:flex-row flex-col mt-5">
                    <div>
                      <p className="text-[#9ca3af] py-1">Phone</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        type="text"
                        {...register("phone", { required: "Phone is required" })}
                      />
                      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">Email</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        type="email"
                        {...register("email", { required: "Email is required" })}
                      />
                      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <p className="text-[#9ca3af] py-1 mt-5">Branch of Service</p>
                  <select
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#9ca3af]"
                    {...register("branchOfService", { required: "Branch of Service is required" })}
                  >
                    <option value="AirForce">Air Force AFSOC</option>
                    <option value="Army">Army USASOC</option>
                    <option value="Navy">Navy NSW NSO</option>
                    <option value="Marines">Marines MARSOC</option>
                  </select>
                  {errors.branchOfService && <p className="text-red-500">{errors.branchOfService.message}</p>}

                  <div className="flex md:justify-between md:flex-row flex-col mt-5">
                    <div>
                      <p className="text-[#9ca3af] py-1">DO</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        type="date"
                        {...register("dob", { required: "Date of Birth is required" })}
                      />
                      {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">Preferred method of Contact</p>
                      <input
                        className="rounded py-2 pl-6 pr-8 bg-[#152252] border text-[#fff] w-[400px]"
                        placeholder="Phone/email"
                        {...register("contactMethod", { required: "Preferred method of Contact is required" })}
                      />
                      {errors.contactMethod && <p className="text-red-500">{errors.contactMethod.message}</p>}
                    </div>
                  </div>
                  
                  <p className="text-[#9ca3af] py-1 mt-5">How did you hear about us?</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("howHeardAboutUs", { required: "This field is required" })}
                  />
                  {errors.howHeardAboutUs && <p className="text-red-500">{errors.howHeardAboutUs.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">Why would you like to be a Peer Ambassador?</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("whyPeerAmbassador", { required: "This field is required" })}
                  />
                  {errors.whyPeerAmbassador && <p className="text-red-500">{errors.whyPeerAmbassador.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">How many hours a month can you commit to your Operator?</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    type="number"
                    {...register("hoursPerMonth", { required: "This field is required" })}
                  />
                  {errors.hoursPerMonth && <p className="text-red-500">{errors.hoursPerMonth.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">How many Operators would you be able to work with at one time if asked?</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    type="number"
                    {...register("numberOfOperators", { required: "This field is required" })}
                  />
                  {errors.numberOfOperators && <p className="text-red-500">{errors.numberOfOperators.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">Did you work with any transition services / organizations during your transition, and would you recommend any of them? If yes, which ones?</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("transitionServices", { required: "This field is required" })}
                  />
                  {errors.transitionServices && <p className="text-red-500">{errors.transitionServices.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">Do you recommend any transition services?</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("recommendedTransitionServices", { required: "This field is required" })}
                  />
                  {errors.recommendedTransitionServices && <p className="text-red-500">{errors.recommendedTransitionServices.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">What areas of transition do you feel you can best support?</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("areasOfSupport", { required: "This field is required" })}
                  />
                  {errors.areasOfSupport && <p className="text-red-500">{errors.areasOfSupport.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">What area(s)/topics are you uncomfortable with?</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("uncomfortableTopics", { required: "This field is required" })}
                  />
                  {errors.uncomfortableTopics && <p className="text-red-500">{errors.uncomfortableTopics.message}</p>}

                  <div className="flex justify-center mt-5">
                    <button disabled={peerAmbassador.loading} type="submit" className="rounded border bg-transparent py-2 px-5 hover:font-semibold">
                    {peerAmbassador.loading ? "Submitting..." : "Submit"} 
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

export default Peerambassadorform;
