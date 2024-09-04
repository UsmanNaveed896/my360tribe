import { useState } from "react";

export const ViewStatus = () => {
  const [viewStatus, setViewStatus] = useState();
  const getStatus = () => {
    setLoading(true);
    let headers = {
      Authorization: "Bearer " + token,
    };
    axios
      .get(
        "https://task-sk2q.onrender.com/operators/operator-form-status",
        data,
        { headers }
      )
      .then((res) => {
        if (res?.status == 200) {
          console.log(res, "response");
          setViewStatus(res?.status);
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
    getStatus,
    viewStatus
  };
};
