import React from 'react'
import Img from '../../assets/Group 2.png'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Dummy = ({ handleClick }) => {
    const navigate=useNavigate();
    const location=useLocation();
    const buttonGradient='linear-gradient(to bottom, #12179d, #001c83, #001c69, #031a4e, #0d1633)';

 
      
  return (
    <div className='main'>
     
      <div className='flex justify-center bg-[#15214c] pt-32'>
        <div className='max-w-[800px] pb-24'>
          <h1 className='text-white text-5xl mt-12 text-center'>{location.state}</h1>
          <div className=' p-5 mt-12 text-white '>
            <h1 className='text-[#FFFFFF] font-bold'>1. Lorem ipsum dolor</h1>
            <p className='my-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <h1 className='text-[#FFFFFF] font-bold'>2. Lorem ipsum dolor</h1>
            <p className='my-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <h1 className='text-[#FFFFFF] font-bold'>3. Lorem ipsum dolor</h1>
            <p className='my-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <h1 className='text-[#FFFFFF] font-bold'>4. Lorem ipsum dolor</h1>
            <p className='my-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <h1 className='text-[#FFFFFF] font-bold'>5. Lorem ipsum dolor</h1>
            <p className='my-3'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
          <div className='flex justify-center gap-4 mt-4'>
              <button className='py-2 px-5  rounded text-white' style={{background:buttonGradient}}  onClick={() => navigate('/')}>OK</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dummy