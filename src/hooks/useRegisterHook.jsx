import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useRegisterHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState();

  const handleLogin = (data) => {
    setLoading(true);
    const payLoad = {
      email: data?.email,
      password: data?.password,
    };

    axios
      .post("https://backend-api.my360tribe.org/api/v1/users/login", payLoad)
      .then((res) => {
        if (res?.status == 200) {
          console.log(res, "response");
          toast.success("Logged In Successfully");
          const token = res?.data?.token;
          const userid = res?.data?.data?.user?._id;
          const name = res?.data?.data?.user?.fullName;
          const photo = res?.data?.data?.user?.photo;
          localStorage.setItem("photo", photo);
          localStorage.setItem("name", name);
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", userid);
          setLoading(false);
          navigate("/");
        } else {
          toast.error(res?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err?.response?.data?.message);
        toast.error(err?.response?.data?.message);
      });
  };

  const handleSignup = (data) => {
    setLoading(true);
    axios
      .post("https://backend-api.my360tribe.org/api/v1/users/signup", data)
      .then((res) => {
        console.log(res, "response");
        if (res?.status == 201) {
          toast.success("SignedUp Successfully");

          setLoading(false);
        } else {
          toast.error(res?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
        toast.error(err?.response?.data?.message);
      });
  };
  return {
    handleLogin,
    handleSignup,
    loading,
    loginResponse,
  };
};
