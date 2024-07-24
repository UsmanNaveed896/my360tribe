import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAddOperatorHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginResponse, setLoginResponse] = useState();

  const handleAdOperator = (data) => {
    setLoading(true);

    axios
      .post("https://searchapi.codematesolution.com/api/v1/users/login", data)
      .then((res) => {
        if (res?.status == 200) {
          console.log(res, "response");
          toast.success("Submitted Successfully");

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
    handleAdOperator,
    loading,
    loginResponse,
  };
};
