import React, { useContext, useState } from "react";
import Img from "../../assets/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import PicsModal from "../../Popups/picsModal";
import Aboutus from "../../Popups/Aboutus";
import { AuthContext } from "../../pages/Authentication/authecontext";
import { toast } from "react-toastify";

const Header = ({ handleClick, isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const gradient =
    "linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)";
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [logout, setLogout] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleLogout = () => {
    setLogout(!logout);
  };
  const handleLogout = () => {
    localStorage.removeItem('token')
    setLogout(false);
   toast.success("Successfully Logout!");
   window.location.reload()
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
    setIsDropdownOpen(false);
  };

  const img4 = {
    heading: " Service Partners",
    text: "We are always looking to build new partnerships that can support transitioning warriors. Please click here if you would like to partner with My360Tribe or to learn more",
  };

  const img2 = {
    heading: "Concierge",
    text: "Are you passionate about making a difference in the life of a transitioning Operator?  Are you an Operator who has already transitioned and wants to give back to your Community?  Apply here to be a Concierge.",
  };

  const img1 = {
    heading: "Operators",
    text: "We are dedicated to serving those U.S. Special Operations members that were assessed, selected, trained, qualified, and served honorably as Operators at any of the U.S. Special Operations Commands, specifically, the U.S. Army Special Operations Command, U.S. Air Force Special Operations Command, U.S. Marine Forces Special Operations Command, Naval Special Warfare Command, and Joint Special Operations Command",
  };

  const img3 = {
    heading: "Peer Ambassador",
    text: "Are you a SOF Operator who has been out of the military for more than a year and want to support a newly transitioning Operator?",
  };

  const handleCancel = () => {
    // Implement cancel logic here
    console.log("Cancelling...");
    setIsModalOpen(false);
  };
if(auth){
  const photo = localStorage.getItem("photo");
  var securePhotoUrl = photo?.replace("http://", "https://");
}
  
console.log(auth,"aut")
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
                    onClick={toggleLogout}
                  >
                    <img
                      className="rounded-full h-8 w-8"
                      src={securePhotoUrl}
                    />
                    <p>{localStorage.getItem("name")}</p>
                  </div>
                  {logout && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Logout
                      </a>
                    </div>
                  )}
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
              className="mr-4"
              onClick={() =>
                setIsModalOpen((st) => ({
                  ...st,
                  mod5: true,
                }))
              }
            >
              <a href="#">About Us</a>
            </li>
            <li className="mr-4">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex justify-center items-center px-4 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Get Involved
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

                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={() => handleOptionClick("Concierge")}
                      >
                        Concierge
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={() =>
                          handleOptionClick("Peer Advocate Member")
                        }
                      >
                        Peer Ambassador
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={() => handleOptionClick("Service Partners")}
                      >
                        Service Partners
                      </a>
                    </div>
                  </div>
                )}
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
      <div className="overflow-x-hidden block md:hidden">
        <nav className="" style={{ background: gradient }}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div>
              <img className="" src={Img} alt="logo" />
            </div>
            <div>
              <div className="flex items-center justify-between md:hidden border-gray-400 py-8">
                <section className="MOBILE-MENU flex lg:hidden">
                  <div
                    className="HAMBURGER-ICON space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                  </div>

                  <div
                    className={`${
                      isNavOpen ? "showMenuNav" : "hideMenuNav"
                    } absolute top-0 left-0 w-full h-screen bg-white z-50`}
                  >
                    <div
                      className="absolute top-0 right-0 px-8 py-8"
                      onClick={() => setIsNavOpen(false)}
                    >
                      <svg
                        className="h-8 w-8 text-gray-800"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <ul className="flex flex-col items-center justify-between min-h-[250px] gap-[40px] mt-40">
                      <li className="text-2xl text-blue-700 font-semibold">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="text-2xl text-blue-700 font-semibold">
                        <a
                          onClick={() =>
                            setIsModalOpen((st) => ({
                              ...st,
                              mod5: true,
                            }))
                          }
                        >
                          About Us
                        </a>
                      </li>
                      <li className="text-2xl text-blue-700 font-semibold">
                        {auth ? (
                          <div
                            className="flex gap-2 items-center cursor-pointer"
                            onClick={toggleDropdown}
                          >
                            <img
                              className="rounded-full h-8 w-8"
                              src={securePhotoUrl}
                            />
                            <p>{localStorage.getItem("name")}</p>
                          </div>
                        ) : (
                          <Link to="/signin">
                            <i className="fa fa-user text-[20px] mr-3"></i>Sign
                            in
                          </Link>
                        )}
                        {isDropdownOpen && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                              onClick={handleLogout}
                            >
                              Logout
                            </a>
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
