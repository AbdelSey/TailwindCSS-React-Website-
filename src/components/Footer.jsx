import React from "react";
import { FaAsterisk, FaAtom, FaCheckCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-5 container max-w-[400px] space-y-5 ml-4 md:flex md:flex-row md:mx-auto  md:space-x-1 md:space-y-0 md:max-w-[75%]">
      <div className="md:mr-10">
        <div className="flex font-bold items-center space-x-2">
          <FaAsterisk className="h-[15px] w-[15px]" />
          <h1 className="text-md"> Best Pricing Around! </h1>
        </div>

        <p className="text-sm">
          Our pricing plans are the best in the world. They are compeitive and
          you won't regret it! There is nothing that can beat our prices!
        </p>
      </div>

      <div className=" md:ml-10">
        <div className="flex font-bold items-center space-x-2">
          <FaAtom className="h-[15px] w-[15px]" />
          <h1 className="text-md"> Wonderful Designs! </h1>
        </div>
        <p className="text-sm">
          Access to top designs and once you buy this design - it's all yours!
          No strings attached
        </p>
      </div>

      <div>
        <div className="flex font-bold items-center space-x-2">
          <FaCheckCircle className="h-[15px] w-[15px]" />
          <h1 className="text-md"> Fast Delivery </h1>
        </div>
        <p className="text-sm">
          Don't bother waiting! Our Delivery services are the best that you can
          find! Better than Amazon!
        </p>
      </div>
    </div>
  );
};

export default Footer;
