"use client";

import { useState } from "react";
import illustration from "../../public/illustration-sign-up-desktop.svg";
import iconList from "../../public/icon-list.svg";
import Image from "next/image";
const SignUp = ({handleSubmit, email, setEmail, error}) => {

  return (
    <div className="sm:w-1/2 w-full bg-white h-full flex flex-col-reverse sm:flex-row sm:rounded-xl sm:pl-6 sm:pr-4 sm:py-4 sm:h-auto">
      <div className="sm:w-3/5 p-8">
        <div className="flex flex-col text-wrap h-full">
          <p className="text-4xl font-bold mb-4">Stay Updated!</p>
          <p className="text-sm mb-4">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="flex mb-8 flex-col gap-4">
            <div className="flex gap-4">
              <Image src={iconList} alt="icon" />
              <p className="text-sm">
                Product discovery and building what matters
              </p>
            </div>
            <div className="flex gap-4">
              <Image src={iconList} alt="icon" />
              <p className="text-sm">
                Measuring to ensure updates are a success
              </p>
            </div>
            <div className="flex gap-4">
              <Image src={iconList} alt="icon" />
              <p className="text-sm">And much much more!</p>
            </div>
          </div>
          <p className="text-xs mb-2 font-bold">Email Address</p>
          <input onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className={`w-full mb-3 px-5 rounded-lg border h-11 ${error ? 'border-red-500 bg-red-100': 'border-gray-400'}`}
          ></input>
          <button onClick={handleSubmit} className="w-full text-white text-sm font-bold rounded-lg text-center h-11 bg-neutral-darkSlateGrey hover:bg-primary-tomato transition transform hover:scale-105 hover:shadow-lg">
            Subscribe to monthly newsletter
          </button>
          <div className="h-2 mt-1">

          {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
          </div>
        </div>
      </div>
      <Image
        src={illustration}
        alt="Sign Up photo"
        className="border mt-10 sm:mt-0 h-2/5 sm:h-auto sm:w-2/5 rounded-xl object-cover"
      />
    </div>
  );
};

export default SignUp;
