import React from "react";
import gutoJpg from "../assets/guto.jpg";
import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";

const About = () => {
  return (
    <section
      name="about"
      className=" bg-black flex justify-center items-center bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="flex flex-col md:flex-row w-full h-full py-3 max-w-screen-lg">
        <div className="flex md:flex-1 md:basis-[30%] justify-center md:justify-end items-center mb-5 md:mb-0">
          <img
            src={gutoJpg}
            alt="Agostinho_Soberano"
            className="w-[50%] rounded-[50%] "
          />
        </div>
        <div className="flex md:flex-1  px-3  md:px-20 md:basis-[70%] flex-col justify-center items-center">
          <h1 className="font-bold text-white text-4xl text-center capitalize border-b-4 border-gray-500">
            About
          </h1>
          <p className="text-start px-6 sm:px-0 font-normal sm:p-0 mt-5 text-gray-500 leading-6 ">
            My name is Agostinho Soberano and I am passionate about the areas of
            technology so I decided to be a programmer. I am attending the
            Degree in Computer Engineering and Telecommunications. Currently, I
            am focusing on Frontend technologies but my current goal is to be a
            Full Stack Developer. In my spare time I like to analyze the
            financial market using a profitable strategy called SMC "Smart Money
            Concepts".
          </p>
          <div className="flex flex-row mt-5 md:hidden">
            <div className="text-white ">
              <a href="https://github.com/GutoAS" type="_blank">
                <FaGithub size={30} />
              </a>
            </div>
            <div className="text-white px-3">
              <FaLinkedinIn size={30} />
            </div>
            <div className="text-white px-3">
              <a href="https://twitter.com/yesagostinho" type="_blank">
                <FaTwitter size={30} />
              </a>
            </div>
            <div className="text-white px-3">
              <a href="mailto:agostinhosoberano2@gmail.com" type="_blank">
                <FaEnvelope size={30} />
              </a>
            </div>
            <div className="text-white px-3">
              <AiOutlinePaperClip size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
