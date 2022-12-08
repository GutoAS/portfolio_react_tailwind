import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
      className="w-[100%] min-h-screen flex flex-wrap justify-center items-center bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="text-center flex flex-col justify-center items-center max-w-screen-lg w-full h-full">
        <h1 className="font-bold mb-2 uppercase text-3xl sm:text-4xl text-white hover:scale-105 duration-200 p-3 md:p-0">
          Agostinho Soberano
        </h1>
        <p className=" font-semibold text-md uppercase  sm:text-2xl text-gray-500 mb-10">
          Front-End Developer | SMC trader
        </p>
        <Link
          to="portfolio"
          duration={600}
          smooth
          className="group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Portfolio
          <span className="group-hover:rotate-90 duration-500">
            <MdKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Home;
