import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAddConceirgeHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState();
  let token = localStorage.getItem("token");
  const handleAdConceirge = (data) => {
    setLoading(true);
    let headers = {
      Authorization: "Bearer " + token,
    };
    axios
      .post("https://backend-api.my360tribe.org/api/v1/concierge", data,{headers})
      .then((res) => {
        if (res?.status == 201) {
          console.log(res, "response");
          toast.success("Submitted Successfully");
          setLoading(false);
          navigate("/")
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
    handleAdConceirge,
    loading,
    loginResponse,
  };
};
