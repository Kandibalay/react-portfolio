import React from "react";
import aboutImg from '../assets/image/About Me.png'

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 lg:px-10 py-20">
      <div>
        <img  src={aboutImg} alt="About-me" className="w-full lg:w-[90%] h-[90%]"/>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <h5 className="font-bold text-sm">About</h5>
          <h2 className="font-bold text-4xl">About Me</h2>
        </div>
        <div className="flex flex-col gap-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque.</p>
            <p>
            Sit turpis pretium
          eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
          Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
            </p>
           
        </div>
      </div>
    </div>
  );
};

export default About;
