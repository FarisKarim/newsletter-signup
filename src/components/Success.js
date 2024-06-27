import React from "react";
import iconss from "../../public/icon-success.svg";
import Image from "next/image";

const Success = ({ email }) => {
  return (
    <div className="w-96 h-96 rounded-lg py-10 px-10 bg-white">
      <div className="h-full flex flex-col gap-4 w-full">
        <Image height={48} width={48} src={iconss} alt="iconss" />
        <p className="text-4xl mt-4 font-bold text-wrap">
          Thanks for subscribing!
        </p>
        <p className="text-sm">
          A confirmation has been sent to{" "}
          <span className="font-bold">{email}</span> Please open it and click
          the button inside to confirm your subscription.
        </p>
        <button className="w-full rounded-lg bg-orange-600 font-bold text-sm text-white h-11 transition transform hover:scale-105 hover:shadow-lg hover:shadow-orange-600/50">
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default Success;
