import React from "react";
import iconss from "../../public/icon-success.svg";
import Image from "next/image";

const Success = ({ email, handleSubmit }) => {
  return (
    <div className="h-full flex flex-col-reverse sm:block sm:w-96 sm:h-96 sm:rounded-xl px-8 py-10 sm:px-10 bg-white">
      <div className="h-4/5 sm:h-auto flex flex-col gap-4 w-full">
        <Image height={48} width={48} src={iconss} alt="iconss" />
        <p className="text-4xl mt-4 font-bold text-wrap">
          Thanks for subscribing!
        </p>
        <p className="text-sm">
          A confirmation has been sent to{" "}
          <span className="font-bold">{email}</span> Please open it and click
          the button inside to confirm your subscription.
        </p>
        <button onClick={handleSubmit} className="w-full rounded-lg mt-auto sm:mt-0 mb-3 sm:mb-0 bg-neutral-darkSlateGrey hover:bg-primary-tomato font-bold text-sm text-white h-11 transition transform hover:scale-105 hover:shadow-lg hover:shadow-orange-600/50">
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default Success;
