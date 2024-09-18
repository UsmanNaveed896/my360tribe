import React, { useContext, useState } from "react";
import Img from "../../assets/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import PicsModal from "../../Popups/picsModal";
import Aboutus from "../../Popups/Aboutus";
import { AuthContext } from "../../pages/Authentication/authecontext";
import { toast } from "react-toastify";
import { Menu, MenuItem } from "@mui/material";

const Header = ({ handleClick, isModalOpen, setIsModalOpen }) => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const gradient =
    "linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)";
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const [involvedMenuAnchorEl, setInvolvedMenuAnchorEl] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Successfully Logged Out!");
    window.location.reload();
  };

  const handleViewStatus = () => {
    navigate("/viewstatus");
    setUserMenuAnchorEl(null);
  };

  const handleUserMenuClick = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };

  const handleInvolvedMenuClick = (event) => {
    setInvolvedMenuAnchorEl(event.currentTarget);
  };

  const handleInvolvedMenuClose = () => {
    setInvolvedMenuAnchorEl(null);
  };

  const handleOptionClick = (option) => {
    if (option === "Concierge") {
      setIsModalOpen((st) => ({
        ...st,
        mod1: false,
        mod2: true,
        mod3: false,
        mod4: false,
      }));
    } else if (option === "Peer Advocate Member") {
      setIsModalOpen((st) => ({
        ...st,
        mod1: false,
        mod2: false,
        mod3: true,
        mod4: false,
      }));
    } else {
      setIsModalOpen((st) => ({
        ...st,
        mod1: false,
        mod2: false,
        mod3: false,
        mod4: true,
      }));
    }
    handleInvolvedMenuClose();
  };

  const img4 = {
    heading: " Service Partners",
    text:
      "We are always looking to build new partnerships that can support transitioning warriors. Please click here if you would like to partner with My360Tribe or to learn more",
  };

  const img2 = {
    heading: "Concierge",
    text:
      "Are you passionate about making a difference in the life of a transitioning Operator?  Are you an Operator who has already transitioned and wants to give back to your Community?  Apply here to be a Concierge.",
  };

  const img1 = {
    heading: "Operators",
    text:
      "We are dedicated to serving those U.S. Special Operations members that were assessed, selected, trained, qualified, and served honorably as Operators at any of the U.S. Special Operations Commands, specifically, the U.S. Army Special Operations Command, U.S. Air Force Special Operations Command, U.S. Marine Forces Special Operations Command, Naval Special Warfare Command, and Joint Special Operations Command",
  };

  const img3 = {
    heading: "Peer Ambassador",
    text:
      "Are you a SOF Operator who has been out of the military for more than a year and want to support a newly transitioning Operator?",
  };

  if (auth) {
    const photo = localStorage.getItem("photo");
    var securePhotoUrl = photo?.replace("http://", "https://");
  }
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev); // Toggle the state to open/close menu
  };
  return (
    <div className="relative z-[999]">
      <nav
        className="md:flex hidden items-center justify-between text-white px-2 py-3 fixed w-full top-0 z-[999]"
        style={{ background: gradient }}
      >
        <div className="w-[200px] relative">
          <img
            className="cursor-pointer h-[70px] py-1"
            src={Img}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex gap-8 font-semibold">
            <li className="mr-4">
              {auth ? (
                <div className="relative">
                  <div
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={handleUserMenuClick}
                  >
                    {/* <img className="rounded-full h-8 w-8" src={securePhotoUrl} /> */}

                    <p>{localStorage.getItem("name")}</p>
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <Menu
                    anchorEl={userMenuAnchorEl}
                    open={Boolean(userMenuAnchorEl)}
                    onClose={handleUserMenuClose}
                  >
                    <MenuItem onClick={handleViewStatus}>View Status</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <Link to="/signin">
                  <i className="fa fa-user text-[20px] mr-3"></i>Sign in
                </Link>
              )}
            </li>
            <li className="mr-4 cursor-pointer">
              <a onClick={() => navigate("/")}>Home</a>
            </li>
            <li
              className="mr-4 cursor-pointer"
              onClick={() =>
              navigate('/aboutus')
              }
            >
             About Us
            </li>
            <li className="mr-4">
              <div className="relative">
                <button
                  onClick={handleInvolvedMenuClick}
                  className="inline-flex justify-center items-center px-4 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  {"Get Involved"}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <Menu
                  anchorEl={involvedMenuAnchorEl}
                  open={Boolean(involvedMenuAnchorEl)}
                  onClose={handleInvolvedMenuClose}
                >
                  <MenuItem onClick={() => handleOptionClick("Concierge")}>
                    Concierge
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleOptionClick("Peer Advocate Member")}
                  >
                    Peer Ambassador
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleOptionClick("Service Partners")}
                  >
                    Service Partners
                  </MenuItem>
                </Menu>
              </div>
            </li>
          </ul>
          <button
            className="px-4 py-2 rounded-xl"
            style={{ background: "red" }}
            onClick={() =>
              (window.location.href =
                "https://merchant.reverepayments.dev/forms/35SqPodk7aSXSW6tE3N9-ToxPhV_kGW1sTEVX3iM3X8=")
            }
          >
            Donate
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="relative z-[999]">
      {/* Mobile Menu */}
      <div className="block md:hidden">
        <nav style={{ background: gradient }}>
          <div className="flex items-center justify-between mx-auto p-4">
            <img src={Img} alt="logo" className="h-[70px]" />
            <div className="flex items-center">
              <div className="space-y-2 cursor-pointer" onClick={toggleNav}>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              </div>
            </div>
          </div>
          {isNavOpen && (
            <div className="absolute top-0 right-0 h-screen w-screen bg-black text-white">
              <div className="p-8">
                <button className="text-white" onClick={toggleNav}>
                  X
                </button>
              </div>
              <ul className="flex flex-col items-center gap-8">
                <li onClick={toggleNav}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={toggleNav}>
                  <Link to="/signin">Sign In</Link>
                </li>
                <li onClick={toggleNav}>
                  <Link
                    onClick={() =>
                      setIsModalOpen((st) => ({
                        ...st,
                        mod1: false,
                        mod2: false,
                        mod3: false,
                        mod4: false,
                        mod5: true,
                      }))
                    }
                  >
                    About Us
                  </Link>
                </li>
                <li onClick={toggleNav}>
                  <Link
                    onClick={() =>
                      setIsModalOpen((st) => ({
                        ...st,
                        mod1: false,
                        mod2: true,
                        mod3: false,
                        mod4: false,
                      }))
                    }
                  >
                    Concierge
                  </Link>
                </li>
                <li onClick={toggleNav}>
                  <Link
                    onClick={() =>
                      setIsModalOpen((st) => ({
                        ...st,
                        mod1: false,
                        mod2: false,
                        mod3: true,
                        mod4: false,
                      }))
                    }
                  >
                    Peer Ambassador
                  </Link>
                </li>
                <li onClick={toggleNav}>
                  <Link
                    onClick={() =>
                      setIsModalOpen((st) => ({
                        ...st,
                        mod1: false,
                        mod2: false,
                        mod3: false,
                        mod4: true,
                      }))
                    }
                  >
                    Service Partners
                  </Link>
                </li>
                <li onClick={toggleNav}>
                  <a
                    onClick={() =>
                      (window.location.href =
                        "https://merchant.reverepayments.dev/forms/35SqPodk7aSXSW6tE3N9-ToxPhV_kGW1sTEVX3iM3X8=")
                    }
                  >
                    Donate
                  </a>
                </li>
                {auth && (
                  <li onClick={toggleNav}>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </div>
    </div>
  );
};

export default Header;
