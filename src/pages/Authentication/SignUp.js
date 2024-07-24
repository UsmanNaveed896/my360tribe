import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import Img from "../../assets/Ellipse1.svg";
import { useNavigate } from "react-router-dom";
import { useRegisterHook } from "../../hooks/useRegisterHook";

const SignUp = () => {
    const navigate=useNavigate()
    const signUp=useRegisterHook()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const onSubmit = (data) => {
    console.log(data,"data");
    const formData = new FormData();

    formData.append('fullName', data.fullName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('password', data.password);
    formData.append('passwordConfirm', data.passwordConfirm);
    formData.append('status', data.status ? 'active' : 'inactive');

    if (selectedFile) {
      formData.append('photo', selectedFile);
    }
    signUp.handleSignup(formData)
  };

  const password = watch('password');

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file)
    }
  };
console.log(selectedFile,"selected")
  return (
    <div className="bg-gradient-to-b from-blue-900 to-black pb-12">
      <div className="px-6 pt-24">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="colum1">
            <div className="text-white font-semibold text-6xl text-center">
              Welcome
            </div>
          </div>
          <div className="column2">
            <div className="relative md:block hidden">
              <img className="absolute z-1" src={Img} alt="bubble" />
            </div>
            <div className="flex justify-center relative z-[1]">
              <div className="border border-white rounded-xl py-4 px-24 mt-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="content">
                    <h1 className="text-white font-bold text-3xl mt-5">
                      Signup
                    </h1>
                    <h1 className="text-white mt-2">
                      Just some details to get you in.!
                    </h1>
                    <div className="inputs mt-5">
                    <div className="pt-4">
                        <input
                          id="fileInput"
                          type="file"
                          className="hidden"
                          {...register("photo", { required: true })}
                          onChange={handleImageChange}
                        />
                        <div
                          className="text-white text-center cursor-pointer"
                          onClick={handleIconClick}
                        >
                          {previewImage ? (
                            <img
                              src={previewImage}
                              alt="Profile"
                              className="w-24 h-24 rounded-full mx-auto"
                            />
                          ) : (
                            <div className="flex justify-center">
                              <FaUserCircle size={50} />
                            </div>
                          )}
                          <p>Upload Profile Picture</p>
                        </div>
                        {errors.photo && (
                          <span className="text-red-500 text-center">
                            Photo is required
                          </span>
                        )}
                      </div>
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          placeholder="Full Name"
                          {...register("fullName", { required: true })}
                        />
                      
                      </div>
                      {errors.fullName && (
                          <span className="text-red-500">
                            Full Name is required
                          </span>
                        )}
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          placeholder="Email"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          })}
                        />
                      
                      </div>
                      {errors.email && (
                          <span className="text-red-500">
                            Valid email is required
                          </span>
                        )}
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          placeholder="Phone"
                          {...register("phone", {
                            required: true,
                            pattern: /^[0-9]{11}$/,
                          })}
                        />
                     
                      </div>
                      {errors.phone && (
                          <span className="text-red-500">
                            Valid phone number is required
                          </span>
                        )}
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          type="password"
                          placeholder="Password"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                          })}
                        />
                      
                      </div>
                      {errors.password && (
                          <span className="text-red-500">
                            Password must be at least 6 characters
                          </span>
                        )}
                      <div className="pt-4">
                        <input
                          className="rounded-xl bg-transparent border border-white pl-2 pr-16 py-2 text-white placeholder-white"
                          type="password"
                          placeholder="Confirm Password"
                          {...register("passwordConfirm", {
                            required: true,
                            validate: (value) =>
                              value === password || "Passwords do not match",
                          })}
                        />
                      
                      </div>
                      {errors.passwordConfirm && (
                          <span className="text-red-500">
                            {errors.passwordConfirm.message}
                          </span>
                        )}
                      <div className="pt-4">
                        <label className="text-white">
                          <input
                            className="mr-2"
                            type="checkbox"
                            {...register("status")}
                          />
                          Active
                        </label>
                      </div>
                    </div>
                    <div className="pt-6">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 text-white font-bold py-2 px-4 rounded w-full h-55 p-14 gap-10 text-center pt-4"
                      >
                        Signup
                      </button>
                      <h1 className="text-white mt-2 text-center">
                        Already have an account?{" "}
                        <span className="hover:underline hover:font-bold hover:cursor-pointer" 
                        onClick={()=>navigate('/signin')}
                        >
                          Signin
                        </span>
                      </h1>
                    </div>
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

export default SignUp;
