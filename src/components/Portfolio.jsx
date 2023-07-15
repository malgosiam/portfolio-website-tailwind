import React from "react";
import p1 from "../assets/portfolio/P1.jpeg";
import p2 from "../assets/portfolio/P2.jpeg";
import p3 from "../assets/portfolio/P3.jpeg";
import p4 from "../assets/portfolio/P4.jpeg";
import p5 from "../assets/portfolio/P5.jpeg";
import p6 from "../assets/portfolio/P6.jpeg";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: p1 },
    { id: 2, src: p2 },
    { id: 3, src: p3 },
    { id: 4, src: p4 },
    { id: 5, src: p5 },
    { id: 6, src: p6 },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 py-24 md:py-2 md:pt-48 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline tracking-[.25em] uppercase">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="group">
              <div className="shadow-[5px_5px_rgba(255,255,255,0.4),_10px_10px_rgba(255,255,255,0.3),_15px_15px_rgba(255,255,255,0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-solid border-2 border-white rounded-lg">
                <img src={src} alt="" className="rounded-md shadow-inner" />
                <div className="hidden group-hover:block transition-transform">
                  <div className="flex items-center justify-center">
                    <button className="w-1/3 px-6 py-1 m-1 duration-200 hover:scale-105">
                      Demo
                    </button>
                    <button className="w-1/3 px-6 py-1 m-1 duration-200 hover:scale-105">
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
