import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamModal = ({ isOpen, props,setIsModalOpen }) => {
  const navigate = useNavigate();
  if (!isOpen) {
    return null;
  }
  console.log(props, "props");
  return (
    <div
      className="relative z-10 top-[5%]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 ">
        <div className="flex md:min-h-full min-h-[80%] items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all md:my-32 my-2 sm:my-8 max-w-[900px] ">
            <div className="bg-[#0C1A4E] px-4 pb-2 pt-5  sm:p-6 sm:pb-4">
                <div className="flex justify-end">
                    <i className="fa fa-close text-white hover:font-bold cursor-pointer" onClick={()=>setIsModalOpen(false)}></i>
                </div>
              <div className="flex justify-center">
                <img className="h-[150px]" src={props.img} alt="abc" />
              </div>
              <p className="text-center mt-2 text-white">{props.designation}</p>
              <p className=" mt-2 text-white text-xs leading-[20px] pb-4">
                {props.description}
              </p>
              <div className="flex justify-center text-white">
                {/* <ul className='text-center font-bold'>
              
                  <li className='py-10'>
                     <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-[#0C1A4E] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto" onClick={onCancel}>Cancel</button></li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
