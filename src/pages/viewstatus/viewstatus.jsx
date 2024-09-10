import React, { useContext, useEffect } from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { AuthContext } from "../Authentication/authecontext";
import { useNavigate } from "react-router-dom";
import { UseViewStatus } from "../../hooks/useViewStatus";

const steps = ["Pending", "Under Review", "Approved"];

const ViewStatus = () => {
  const { auth } = useContext(AuthContext);
  const status = UseViewStatus();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [stepStatus, setStepStatus] = React.useState({
    pending: false,
    approved: false,
    rejected: false,
  });
const role=localStorage.getItem("role")
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  useEffect(() => {
    status.getStatus(role); 
  }, []);

  console.log(status?.viewStatus,"view")
  useEffect(() => {
    if(status?.viewStatus){
    const currentStatus = status?.viewStatus[0]?.status; 
    if (currentStatus === "pending") {
      setStepStatus({ pending: true, approved: false, rejected: false });
      setActiveStep(0);
    } else if (currentStatus === "approved") {
      setStepStatus({ pending: true, approved: true, rejected: false });
      setActiveStep(2);
    } else if (currentStatus === "rejected") {
      setStepStatus({ pending: true, approved: false, rejected: true });
      setActiveStep(1);
    }
  }
  }, [status?.viewStatus]);

  const StepIcon = ({ icon }) => {
    if (stepStatus.rejected && icon === 2) {
      return <CancelIcon style={{ color: "red" }} />;
    } else if (stepStatus.approved && icon === 2) {
      return <CheckCircleIcon style={{ color: "green" }} />;
    } else if (stepStatus.pending && icon === 1) {
      return <CheckCircleIcon style={{ color: "green" }} />;
    } else {
      return <span className="text-white">{icon}</span>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#000032] to-[#0A0A52] text-white">
      <div className="flex justify-between items-center w-full px-10">
        <div className="text-lg font-semibold bg-blue-900 px-4 py-2 rounded-md">
          {localStorage.getItem("role")}
        </div>
        <div className="text-left">
          <h3 className="text-2xl font-bold">{localStorage.getItem("name")}</h3>
          <p className="text-sm text-gray-300">{localStorage.getItem("email")}</p>
        </div>
      </div>

      <Box sx={{ width: "50%", mt: 12 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={() => <StepIcon icon={index + 1} />}>
                <span className="text-white">{label}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <div className="mt-8 text-xl font-semibold ">Current Status: <span className="uppercase">{status?.viewStatus && status?.viewStatus[0]?.status}</span></div>
    </div>
  );
};

export default ViewStatus;
