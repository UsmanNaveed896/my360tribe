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
      .post("https://task-backend.my360tribe.org/registration/login", payLoad)
      .then((res) => {
        console.log(res, "response");
        if (res?.status == 200) {
          const token = res?.data?.response?.data?.token;
          const userid = res?.data?.response?.data?.id;
          const name = res?.data?.response?.data?.name;
          const email = res?.data?.response?.data?.email;
          const role = res?.data?.response?.data?.role;
          localStorage.setItem("role", role);
          localStorage.setItem("email", email);
          localStorage.setItem("name", name);
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", userid);
          toast.success("Logged In Successfully");
          setLoading(false);
          navigate("/verify-otp")
          // navigate("/");
        } else {
          toast.error(res?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
        toast.error(err?.response?.data?.data);
      });
  };

  const handleSignup = (data) => {
    setLoading(true);
    axios
      .post("https://task-backend.my360tribe.org/registration/signup", data)
      .then((res) => {
        console.log(res, "response");
        if (res) {
          toast.success("SignedUp Successfully");

          setLoading(false);
          navigate("/verify-otp");
        } else {
          toast.error(res?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
        toast.error(err?.response?.data?.error);
      });
  };
  return {
    handleLogin,
    handleSignup,
    loading,
    loginResponse,
  };
};
