import React, { useState } from "react";
import { useForm } from "react-hook-form";

const VerifyOTP = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
  const [otpError, setOtpError] = useState('');
  const watchOtp = watch('otp', '');

  const formatOTP = (value) => {
    return value.replace(/[^\d]/g, '').slice(0, 6); // Only allow numeric input and limit to 6 digits
  };

  const handleOtpChange = (e) => {
    const { value } = e.target;
    const formattedOtp = formatOTP(value); // Filter out non-numeric characters
    setValue('otp', formattedOtp); // Update the form value with the formatted OTP
  };

  const onKeyPress = (e) => {
    // Prevent non-numeric input
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const onSubmit = (data) => {
    const correctOtp = '123456'; // This is just for example, you'd verify this with a server

    if (data.otp === correctOtp) {
      setOtpError('');
      alert('OTP Verified Successfully!');
    } else {
      setOtpError('Invalid OTP, please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-black p-5">
      <h2 className="text-4xl font-bold text-white mb-4">Verify OTP</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full max-w-sm">
        <input
          type="text"
          value={watchOtp}
          onChange={handleOtpChange}
          onKeyPress={onKeyPress} // Prevent non-numeric characters
          className={`w-full p-3 text-lg bg-transparent tracking-widest  rounded text-white text-center rounded-md focus:outline-none focus:ring-2 focus:ring-none ${errors.otp || otpError ? 'border-red-500' : 'border-white border'}`}
          placeholder="Enter 6 digit OTP"
          maxLength="6"
          {...register('otp', {
            required: 'OTP is required',
            validate: (value) => value.length === 6 || 'Enter a valid 6-digit OTP',
          })}
        />
        {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>}
        {otpError && <p className="text-red-500 text-sm mt-1">{otpError}</p>}

        <button
          type="submit"
          className="w-full mt-4 p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
