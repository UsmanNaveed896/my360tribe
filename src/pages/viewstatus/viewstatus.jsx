import React, { useContext, useEffect } from "react";
import { Stepper, Step, StepLabel, Box, Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AuthContext } from "../Authentication/authecontext";
import { useNavigate } from "react-router-dom";

const steps = ["Pending", "Under Review", "Approved"];

const ViewStatus = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(3);
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#000032] to-[#0A0A52] text-white">
      <div className="flex justify-between items-center w-full px-10">
        {/* Left Aligned Heading */}
        <div className="text-lg font-semibold bg-blue-900 px-4 py-2 rounded-md">
          {localStorage.getItem("role")}
        </div>

        {/* Right Aligned User Info */}
        <div className="text-left">
          <h3 className="text-2xl font-bold">{localStorage.getItem("name")}</h3>
          <p className="text-sm text-gray-300">
            {localStorage.getItem("email")}
          </p>
        </div>
      </div>

      {/* Centered Plus Button */}
      {/* <div className="relative my-10">
        <Button
          variant="contained"
          color="primary"
          className="bg-white text-blue-900 rounded-full p-4 shadow-lg hover:shadow-xl"
          style={{ width: 60, height: 60 }}
        >
          <AddCircleOutlineIcon style={{ fontSize: 40 }} />
        </Button>
      </div> */}

      {/* Stepper Component */}
      <Box sx={{ width: "50%" ,mt:12}}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>
                <span className="text-white">{label}</span>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Preview Label */}
      <div className="mt-8 text-xl font-semibold">Current Status</div>
    </div>
  );
};

export default ViewStatus;
