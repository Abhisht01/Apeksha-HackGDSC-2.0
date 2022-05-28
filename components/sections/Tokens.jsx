/* eslint-disable @next/next/no-img-element */
import React from "react";

const Tokens = (props) => {
  return (
    <div className="bg-[#000] w-full flex flex-row-reverse  gap-2 justify-between text-white">
      <div className="w-[50%] flex flex-col px-10 pr-24 mr-20 justify-center">
        <h2 className="text-5xl font-bold font-pop">How Tokens Work?</h2>
        <p className="pt-10 font-sora text-xl">
        Individual halls display the total number of available slots for a hall on a daily basis. Each user has a total of 6 Tokens. A user can visit any site for 1 token in return for a ticket for the time frame they have chosen. Users can book slots this way.
        </p>
      </div>
      <div className="w-[40%] ml-32 pl-10 pt-16 pb-10">
        <img src="/static/images/ETH 1.png" alt="" className="w-[65%]" />
      </div>
    </div>
  );
};

export default Tokens;
