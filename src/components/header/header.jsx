import React from 'react'
import Img from '../../assets/logo1.png'
const Header = () => {
    const gradient = 'linear-gradient(to bottom, #ffffff, #b9b9b9, #777777, #3b3b3b, #000000)';
    const buttonGradient='linear-gradient(to bottom, #12179d, #001c83, #001c69, #031a4e, #0d1633)';
    return (
        <div>
            <nav className="flex items-center justify-between  text-white px-12"
            style={{background:gradient}}
            >
                <div className="flex items-center">
                    <ul className="flex gap-3">
                        <li className="mr-4"><a href="#">Who We Are</a></li>
                        <li className="mr-4"><a href="#">What We Do</a></li>
                        <li className="mr-4"><a href="#">When We Do It</a></li>
                        <li className="mr-4"><a href="#">Where We Are</a></li>
                        <li className="mr-4"><a href="#">Why We Do</a></li>
                    </ul>
                </div>
                <div>
                    <img className='' src={Img} alt='logo' />
                </div>
                <div className="flex items-center ">
                    <ul className="flex gap-8">
                        <li className="mr-4"><i className='fa fa-user text-[20px]'></i></li>
                        <li className="mr-4"><i className='fa fa-search text-[20px]'></i></li>
                        <li className="mr-4"><a href="#">Blog</a></li>
                        <li className="mr-4"><a href="#">media/event</a></li>
                        <li className="mr-4"><a href="#">Get Involved</a></li>
                    </ul>
                    <button className='px-4 py-2 rounded-xl' style={{background:buttonGradient}}>Donate</button>
                </div>
            </nav>
        </div>
    )
}

export default Header