import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onDeactivate, onCancel, data }) => {
  const navigate = useNavigate();
  if (!isOpen.mod1 && !isOpen.mod2 && !isOpen.mod3 && !isOpen.mod4) {
    return null;
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div className="relative transform overflow-hidden rounded-lg bg-gradient-to-b from-blue-900 to-black text-left shadow-xl transition-all sm:my-8 sm:w-[20%] sm:max-w-lg max-w-[32rem]">
            <div className="bg-gradient-to-b from-blue-900 to-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex justify-center text-white">
                <ul className='text-center font-bold'>
                  {
                    data?.map((item, index) => (
                      <li className='py-2 cursor-pointer hover:font-semibold' key={index} onClick={() => navigate('/dummy', { state: item })}>
                        {item}
                      </li>
                    ))
                  }
                  <li className='py-10'> <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-gradient-to-b from-blue-900 to-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={onCancel}>Cancel</button></li>
                </ul>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal