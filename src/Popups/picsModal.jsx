import React from "react";
import Img from "../assets/Card12.png";
import { useNavigate } from "react-router-dom";
const PicsModal = ({ isOpen, onDeactivate, onCancel, data }) => {
  const navigate=useNavigate();
  if (!isOpen.mod1 && !isOpen.mod2 && !isOpen.mod3 && !isOpen.mod4 ) {
    return null;
  }

  const handleClick=()=>{
    if(data?.heading == "Operators"){
   navigate('/intakeform')
   onCancel()
    }
  }
  return (
    <div
      className="relative z-[999] "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-[#000]  transition-opacity opacity-70"></div>
      <div className="fixed inset-0 z-[999] w-screen overflow-y-auto">
        <div className="flex md:min-h-full min-h-[80%] items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg  to-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div
              className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4 bg-cover"
              style={{ backgroundImage: `url(${Img})` }}
            >
              <div className="flex justify-center text-white px-6">
                <div>
                  <h1 className="font-bold text-white text-center text-[25px]">
                    {data?.heading}
                  </h1>
                  <p className="text-center font-semibold mt-4">{data.text}</p>
                  <div className="flex justify-center mt-4">
                    <button className="py-2 px-4 border text-white rounded hover:font-semibold"
                    onClick={handleClick}
                    >
                      {data?.heading == "Operators" ? "Apply" : "Join Us"}
                    </button>
                  </div>
                </div>
              </div>
              <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold hover:font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicsModal;
