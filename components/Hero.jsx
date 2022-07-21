import Link from "next/link";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { logoM } from "./public/assets/THCLogo.png";
import Image from "next/image";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-[-15px] bg-black/60 z-[2]" />

      <div className=" text-white z-[2]  mt-[-2rem] items-center ">
        <h2 className="mb-5 text-5xl sm:text-7xl md:text-[100px] text-center font-weight-900">
          {heading}
        </h2>
        <div className="mb-5 items-center flex justify-center align-middle hover:scale-110 ease-in duration-300">
          <Image
            src={logoM}
            alt="main logo"
            width={170}
            height={170}
          />
        </div>
        <h4 className="py-5 mt-[2.5rem] sm:text-xl text-center font-bold">{message}</h4>
        <a href="https://instagram.com/thc_lanzarotecsc?igshid=YmMyMTA2M2Y=">
          <div className="items-center flex justify-center align-middle cursor-pointer hover:scale-110 ease-in duration-300">
            <GrInstagram size={45} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
