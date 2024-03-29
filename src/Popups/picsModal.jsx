import React from 'react'

const PicsModal = ({ isOpen, onDeactivate, onCancel, data }) => {
    if (!isOpen.mod1 && !isOpen.mod2 && !isOpen.mod3 && !isOpen.mod4) {
        return null;
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex md:min-h-full min-h-[80%] items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-gradient-to-b from-blue-900 to-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-gradient-to-b from-blue-900 to-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="flex justify-center text-white px-6">
                                <div>
                                    <h1 className='font-bold text-white text-center text-[25px]'>{data?.heading}</h1>
                                    <p className='text-center font-semibold mt-4'>{data.text}</p>
                                    <div className='flex justify-center mt-4'>
                                    <button className='py-2 px-4 border text-white rounded'>Apply</button>
                                    </div>
                                
                                </div>

                            </div>
                            <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-gradient-to-b from-blue-900 to-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={onCancel}>Cancel</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PicsModal