import React, { useState } from "react";
import Img4 from "../../assets/Group10000062671.png";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Paypal from "../../components/paypal/paypal";

const Homepagesec7 = () => {
  const buttonGradient =
    "linear-gradient(90.57deg, #0A194E 9.91%, #344DA5 53.29%, #0A194E 91.56%)";
  const CLIENT_ID = "YOUR_CLIENT_ID";
  const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
  };
  const [amount, setAmount] = useState(false);
  return (
    <>
      <div
        className="bg-[#1a2242] pb-[44px] md:bg-cover bg-contain"
        id="targetDiv5"
        style={{ backgroundImage: `url(${Img4})` }}
      >
        <div className="flex justify-center">
          <div className="container max-w-[1200px] mt-16">
            <div className="flex justify-center">
              <div>
              <h1 className="border-b border-[#d9d9d9] text-white border-b-4 text-center font-bold text-5xl">
                  Donation Request
                </h1>
              </div>
            </div>
            <div className="flex justify-center mt-12 ">
              <div className="border rounded-xl pt-8 pb-6 md:w-[500px] w-full px-16 bg-white">
                <div className="flex justify-between items-center text-[#0C1A4C]">
                  <i className="fa fa-angle-left text-[50px] font-bold"></i>
                  <p className="text-[50px] font-bold"> $150</p>
                  <i className="fa fa-angle-right text-[50px] font-bold"></i>
                </div>
                <div className="flex justify-center mt-12 gap-8">
                  <button className="py-1 px-8 border border-[#0C1A4C] rounded-xl text-[20px] text-[#0C1A4C]">
                    One Time
                  </button>
                  <button className="py-1 px-8 border border-[#0C1A4C] rounded-xl text-[20px] bg-[#0C1A4C] text-white">
                    Monthly
                  </button>
                </div>
                <div className="flex items-center">
                  <hr className="w-full border-t border-[#0C1A4C] border-2 my-12" />
                  <p className="px-2 text-[#0C1A4C] font-semibold text-xl">
                    or
                  </p>
                  <hr className="w-full border-t border-[#0C1A4C] border-2 my-12" />
                </div>
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider>
                ,
                <button
                  className="w-full border border-[#0C1A4C] rounded-xl text-[20px] text-[#0C1A4C] py-1"
                  onClick={() => setAmount(true)}
                >
                  Enter Price Manually
                </button>
                {amount && (
                  <input
                    className="rounded pl-2 py-4 w-full border mt-3 border-2"
                    placeholder="e.g $ 150"
                  />
                )}
                <button
                  className="w-full mt-16 font-bold rounded-xl text-white font-bold py-3 text-[20px]"
                  style={{ background: buttonGradient }}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepagesec7;
