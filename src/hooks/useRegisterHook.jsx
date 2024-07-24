import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useRegisterHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginResponse,setLoginResponse]=useState()

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
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", userid);
          setLoading(false);
        
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
      .post("https://searchapi.codematesolution.com/api/v1/users/login", data)
      .then((res) => {
        if (res?.status == 200) {
          console.log(res, "response");
          toast.success("Logged In Successfully");
         
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
    loading,
    loginResponse
  };
};
