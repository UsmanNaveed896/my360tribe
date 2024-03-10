import React from 'react'
import Img from '../../assets/logo1.png'
const Header = ({ handleClick }) => {

    const gradient = 'linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)';
    const buttonGradient='linear-gradient(to bottom, #12179d, #001c83, #001c69, #031a4e, #0d1633)';
    return (
        <div>
            <nav className="flex items-center justify-between  text-white px-12 fixed w-full top-0 z-[9999]"
            style={{background:gradient}}
            >
                <div className="flex items-center">
                    <ul className="flex gap-3">
                        <li  onClick={() => handleClick(1)} className="mr-4"><a href="#">Who We Are</a></li>
                        <li className="mr-4" onClick={() => handleClick(2)}><a href="#">What We Do</a></li>
                        <li className="mr-4" onClick={() => handleClick(3)}><a href="#">Where We Are</a></li>
                        <li className="mr-4" onClick={() => handleClick(4)}><a href="#">Why We Do</a></li>
                    </ul>
                </div>
                <div>
                    <img className='' src={Img} alt='logo' />
                </div>
                <div className="flex items-center ">
                    <ul className="flex gap-8">
                        <li className="mr-4"><i className='fa fa-user text-[20px]'></i></li>
                        <li className="mr-4"><a href="#">Blog</a></li>
                        <li className="mr-4"><a href="#">media/event</a></li>
                        <li className="mr-4"><a href="#">Get Involved</a></li>
                    </ul>
                    <button className='px-4 py-2 rounded-xl' style={{background:buttonGradient}} onClick={() => handleClick(5)}>Donate</button>
                </div>
            </nav>
        </div>
    )
}

export default Header