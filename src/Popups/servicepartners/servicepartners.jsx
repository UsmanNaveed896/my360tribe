import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Img from "../../assets/unnamed.webp";
import { useAddServicePartnersHook } from "../../hooks/useAddServicePartners";

const Servicepartners = () => {
  const servicePartner=useAddServicePartnersHook()
  const navigate = useNavigate();
  const linear = "linear-gradient(90deg, #0C1A4C 0%, #28345F 100%)";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    servicePartner.handleAdServicePartner(data)
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
          <div className="text text-center px-4 md:px-0">
            <h1 className="font-bold text-[35px]">
              My360Tribe Service Partners Intake Form
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
                  <p className="text-[#9ca3af] py-1">
                    Organization or Company Name
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("organizationName", { required: "Organization Name is required" })}
                  />
                  {errors.organizationName && <p className="text-red-500">{errors.organizationName.message}</p>}

                  <div className="flex md:justify-between md:flex-row flex-col mt-5">
                    <div>
                      <p className="text-[#9ca3af] py-1">Phone</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        type="tel"
                        {...register("phone", { required: "Phone is required" })}
                      />
                      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">Address</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        {...register("address", { required: "Address is required" })}
                      />
                      {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                    </div>
                  </div>
                  
                  <p className="text-[#9ca3af] py-1 mt-5">Website URL</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    type="url"
                    {...register("websiteUrl", { required: "Website URL is required" })}
                  />
                  {errors.websiteUrl && <p className="text-red-500">{errors.websiteUrl.message}</p>}

                  <div className="flex md:justify-between md:flex-row flex-col mt-5">
                    <div>
                      <p className="text-[#9ca3af] py-1">Point of Contact Name</p>
                      <input
                        className="rounded py-2 pl-2 pr-12 bg-[#152252] border text-[#fff] w-full"
                        {...register("pointOfContactName", { required: "Point of Contact Name is required" })}
                      />
                      {errors.pointOfContactName && <p className="text-red-500">{errors.pointOfContactName.message}</p>}
                    </div>
                    <div>
                      <p className="text-[#9ca3af] py-1">Point of Contact Email</p>
                      <input
                        className="rounded py-2 pl-6 pr-8 bg-[#152252] border text-[#fff] w-[400px]"
                        type="email"
                        {...register("pointOfContactEmail", { required: "Point of Contact Email is required" })}
                      />
                      {errors.pointOfContactEmail && <p className="text-red-500">{errors.pointOfContactEmail.message}</p>}
                    </div>
                  </div>

                  <p className="text-[#9ca3af] py-1 mt-5">How did you hear about us?</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("howHeardAboutUs", { required: "This field is required" })}
                  />
                  {errors.howHeardAboutUs && <p className="text-red-500">{errors.howHeardAboutUs.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">Veteran specific services provided</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("veteranSpecificServices", { required: "This field is required" })}
                  />
                  {errors.veteranSpecificServices && <p className="text-red-500">{errors.veteranSpecificServices.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">Services Provided</p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("servicesProvided", { required: "This field is required" })}
                  />
                  {errors.servicesProvided && <p className="text-red-500">{errors.servicesProvided.message}</p>}

                  <p className="text-[#9ca3af] py-1 mt-5">
                    Please tell us a little about your company/organization and why you want to partner with My360Tribe.
                  </p>
                  <input
                    className="rounded w-full py-2 pl-2 pr-12 bg-[#152252] border text-[#fff]"
                    {...register("description", { required: "This field is required" })}
                  />
                  {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                  <div className="flex justify-center mt-5">
                    <button disabled={servicePartner.loading} type="submit" className="rounded border bg-transparent py-2 px-5 hover:font-semibold">
                    {servicePartner.loading ? "Submitting..." : "Submit"} 
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

export default Servicepartners;
