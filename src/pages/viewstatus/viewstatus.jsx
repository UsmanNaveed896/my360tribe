import React, { useContext, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  Typography,
  Paper,
  TableBody,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { AuthContext } from "../Authentication/authecontext";
import { useNavigate } from "react-router-dom";
import { UseViewStatus } from "../../hooks/useViewStatus";

const steps = ["Pending", "Approved"];

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
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("user_id");

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  useEffect(() => {
    status.getStatus(role);
  }, []);

  useEffect(() => {
    if (status?.viewStatus) {
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

  useEffect(() => {
    status.handleGetStatusInfo(id);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#000032] to-[#0A0A52] text-white">
        <div className="flex justify-between items-center w-full px-10">
          <div className="text-lg font-semibold bg-blue-900 px-4 py-2 rounded-md">
            {localStorage.getItem("role")}
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold">
              {localStorage.getItem("name")}
            </h3>
            <p className="text-sm text-gray-300">
              {localStorage.getItem("email")}
            </p>
          </div>
        </div>
        {!status?.info && (
          <>
            <Box sx={{ width: "50%", mt: 12 }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel
                      StepIconComponent={() => <StepIcon icon={index + 1} />}
                    >
                      <span className="text-white">{label}</span>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <div className="mt-8 text-xl font-semibold ">
              Current Status:{" "}
              <span className="uppercase">
                {status?.viewStatus?.[0]?.status || "No form submitted"}
              </span>
            </div>
          </>
        )}
        {status?.info ? (
          <Box
            sx={{
              mt: 5,
              width: "60%",
              backgroundColor: "#0A0A52",
              color: "white",
              padding: 2,
              borderRadius: "8px",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 2, color: "#ffffff" }}>
              Request Assigned
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: "#000032" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#ffffff" }}>
                      <strong>Field</strong>
                    </TableCell>
                    <TableCell sx={{ color: "#ffffff" }}>
                      <strong>Value</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ color: "#ffffff" }}>Full Name</TableCell>
                    <TableCell sx={{ color: "#ffffff" }}>
                      {status?.info?.full_name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#ffffff" }}>Email</TableCell>
                    <TableCell sx={{ color: "#ffffff" }}>
                      {status?.info?.email}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ color: "#ffffff" }}>
                      Phone Number
                    </TableCell>
                    <TableCell sx={{ color: "#ffffff" }}>
                      {status?.info?.phone_number}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ) : (
          <Typography variant="h6" sx={{ mt: 5, color: "#ffffff" }}>
            No additional information available.
          </Typography>
        )}
      </div>
    </>
  );
};

export default ViewStatus;
