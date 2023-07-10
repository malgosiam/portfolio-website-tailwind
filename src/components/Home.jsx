import React from "react";
import Image from "../assets/portfolio/S1.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 font-mono"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-around h-full p-4 pt-24 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Coding has been one of my major interests for years. It gives me the
            freedom to express my creativity and enthusiasm to the world.
          </p>
          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={Image}
            alt="my-title-project"
            className="rounded-2xl mx-auto w-2/3 md:w-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;