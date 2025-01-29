import React from "react";
import Button from "./reuseable/Button";
import HeroImg from "../assets/image/Group 11 1.png";

const Hero = () => {
  return (
    <div className="bg-[#F5FCFF] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 items-center justify-center text-center lg:text-left py-20 gap-5">
      <div className="w-full lg:w-full flex flex-col gap-3 order-2 lg:order-1">
        <h4 className="font-bold">Hey, I am John</h4>
        <h1 className="text-[48px] font-bold leading-[1.2]">I develop dynamic and User-Centered Web Applications</h1>
        <p>
          My expertise spans both front-end and back-end development, enabling
          me to build comprehensive solutions that meet diverse client needs.
        </p>
        <Button content="Get in Touch" bgColor="#5E3BEE" typeColor="White" mt='1.5rem'/>
      </div>
      <div className="w-ful lg:w-full order-1 lg:order-2">
        <img src={HeroImg} alt="Hero-img" />
      </div>
    </div>
  );
};

export default Hero;
