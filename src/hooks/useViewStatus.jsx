import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const UseViewStatus = () => {
  const [viewStatus, setViewStatus] = useState();
  const [loading, setLoading] = useState();
  const token = localStorage.getItem("token");
  const getStatus = (role) => {
    setLoading(true);
    let headers = {
      Authorization: "Bearer " + token,
    };

    let apiUrl = "";

    switch (role) {
      case "OPERATOR":
        apiUrl =
          "https://task-sk2q.onrender.com/operators/operator-form-status";
        break;
      case "CONCIERGE":
        apiUrl =
          "https://task-sk2q.onrender.com/concierge/concierge-form-status";
        break;
      case "PEER_AMBASSADOR":
        apiUrl =
          "https://task-sk2q.onrender.com/peer-ambassadors/peer-form-status";
        break;
      case "SERVICE_PARTNER":
        apiUrl =
          "https://task-sk2q.onrender.com/service-partners/service-form-status";
        break;
      default:
        toast.error("Invalid role");
        setLoading(false);
        return;
    }

    axios
      .get(apiUrl, { headers })
      .then((res) => {
        console.log(res, "response123");
        if (res?.status === 200) {
          setViewStatus(res?.data?.data);
          setLoading(false);
        } else {
          toast.error(res?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
      });
  };

  return {
    loading,
    getStatus,
    viewStatus,
  };
};
