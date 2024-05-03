import React, { useState } from "react";
import Img from "../../assets/Group11.png";
import { useNavigate } from "react-router-dom";

const Header = ({ handleClick }) => {
  const navigate = useNavigate();
  const gradient =
    "linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)";
  const buttonGradient =
    "linear-gradient(to bottom, #12179d, #001c83, #001c69, #031a4e, #0d1633)";
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // const handleClick = (value) => {
  //     // handle click logic
  // };

  return (
    <div className="relative z-[999]">
      <nav
        className="md:flex hidden  items-center justify-between  text-white px-2 py-3 fixed w-full top-0 z-[999]"
        style={{ background: gradient }}
      >
        <div className="w-[200px] relative ">
          <img
            className="cursor-pointer h-[70px] py-1"
            src={Img}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="flex items-center ">
          <ul className="flex gap-8 font-semibold">
            {/* <li className="mr-4"><i className='fa fa-user text-[20px]'></i></li> */}
            <li className="mr-4">
              <a href="#">
                <i className="fa fa-user text-[20px] mr-3"></i>Sign in
              </a>
            </li>
            <li className="mr-4 cursor-pointer">
              <a onClick={() => navigate("/")}>Home</a>
            </li>
            <li className="mr-4">
              <a href="#">About Us</a>
            </li>
            <li className="mr-4">
              <a href="#">Get Involved</a>
            </li>
          </ul>
          <button
            className="px-4 py-2 rounded-xl"
            style={{ background: "red" }}
            onClick={() => handleClick(5)}
          >
            Donate
          </button>
        </div>
      </nav>

      <div className="overflow-x-hidden block md:hidden">
        <nav className="" style={{ background: gradient }}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div>
              <img className="" src={Img} alt="logo" />
            </div>
            <div>
              <div className="flex items-center justify-between  md:hidden border-gray-400 py-8">
                <section className="MOBILE-MENU flex lg:hidden">
                  <div
                    className="HAMBURGER-ICON space-y-2 cursor-pointer"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    <span className="block h-0.5 w-8 animate-pulse  bg-[black]"></span>
                    <span className="block h-0.5 w-8 animate-pulse  bg-[black]"></span>
                    <span className="block h-0.5 w-8 animate-pulse  bg-[black]"></span>
                  </div>
                  <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                      className="absolute top-0 right-0 px-8 py-8"
                      onClick={() => setIsNavOpen(false)}
                    >
                      <svg
                        className="h-8 w-8 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <ul className="flex flex-col items-center justify-between min-h-[250px]">
                      <li className=" my-8 uppercase">
                        <a className="block py-2 pl-3 pr-4  text-white cursor-pointer font-semibold hover:font-bold">
                          Sign in
                        </a>
                      </li>
                      <li className="border-b border-gray-400 my-8 uppercase">
                        <a
                          className="block py-2 pl-3 pr-4  text-white cursor-pointer font-semibold hover:font-bold"
                          onClick={() => navigate("/")}
                        >
                          Home
                        </a>
                      </li>
                      <li className="border-b border-gray-400 my-8 uppercase">
                        <a className="block py-2 pl-3 pr-4  text-white cursor-pointer font-semibold hover:font-bold">
                          About Us
                        </a>
                      </li>
                      <li className="border-b border-gray-400 my-8 uppercase">
                        <a className="block py-2 pl-3 pr-4  text-white cursor-pointer font-semibold hover:font-bold">
                          Get Involved
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>

                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: ${gradient};
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
