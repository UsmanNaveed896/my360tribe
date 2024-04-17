import React from "react";
import './style.css'
const Usercard = (props) => {
  const divStyle = {
    width: "200px", // Adjust the width as needed
    height: "300px", // Adjust the height as needed
    clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 0px 86%)",
  };
  console.log(props, "props");
  return (
    <div className="bg-black py-4 px-6 md:mt-16 mt-8" style={divStyle}>
      <div className="flex justify-center ">
        <div className="text-center">
          {props?.img ? (
             <div class="flip-box bg-transparent">
             <div class="flip-box-inner">
               <div class="flip-box-front flex justify-center">
                 <img className="h-[130px] " src={props.img} alt="line" />
               </div>
               <div class="flip-box-back  cursor-pointer bg-[#000]" style={divStyle}>
                 <div className="rounded  bg-[#000]  px-6 pb-2">
                   <div className="flex justify-center ml-6">
                     <img
                       className="h-[130px]"
                       src={props.img}
                       alt="line"
                     />
                   </div>
                   <p className="text-[#fff] font-bold text-center text-[19px] ml-6">
                     {props.name}
                   </p>
                   <p className="text-[#fff] font-semibold text-center mt-1 text-[16px] ml-6">
                    {props.designation}
                   </p>
                 
                 </div>
               </div>
             </div>
           </div>
          ) : (
            <i className="fa fa-user text-[84px] text-white"></i>
          )}

          <p className="text-white font-bold mt-6">{props.name}</p>
          <p className="text-white mt-3">{props.designation}</p>
          <p className="text-[#5BF0F5] text-xs mt-3">{props.experience}</p>
        </div>
        <div class="flip-box bg-transparent">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img className="h-[420px] mt-12" src={props.img} alt="line" />
            </div>
            <div class="flip-box-back mt-12 cursor-pointer">
              <div className="rounded bg-[#BFE51C] px-6 pb-16">
                <div className="flex justify-center ">
                  <img
                    className="h-[100px] w-[100px] rounded-full"
                    src={props.img}
                    alt="line"
                  />
                </div>
                <p className="text-[#000] font-bold text-center text-[19px]">
                  Wanda Mclean
                </p>
                <p className="text-[#000] font-semibold mt-1 text-[16px]">
                  Senior Business Sales Director
                </p>
                <p className="text-[#000] font-semibold mt-1 text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
