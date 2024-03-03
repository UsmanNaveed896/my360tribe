import React from 'react'

const Usercard = (props) => {
    const divStyle = {
        width: '200px', // Adjust the width as needed
        height: '300px', // Adjust the height as needed
        clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 86%)',
    };
    console.log(props,"props")
    return (
        <div className='bg-black py-4 px-6 mt-16' style={divStyle}>
            <div className='flex justify-center '>
                <div className='text-center'>
                <i className='fa fa-user text-[84px] text-white'></i>
                <p className='text-white font-bold mt-6'>{props.name}</p>
                <p className='text-white mt-3'>{props.designation}</p>
                <p className='text-[#5BF0F5] text-xs mt-3'>{props.experience}
                </p>
                </div>
               
            </div>
            
        </div>
    )
}

export default Usercard