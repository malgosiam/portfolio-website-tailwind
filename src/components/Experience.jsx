import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { DiNpm } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: <AiFillHtml5 size={50} className="mx-auto" />,
      title: "HTML",
    },
    {
      id: 2,
      src: <BiLogoCss3 size={50} className="mx-auto" />,
      title: "CSS",
    },
    {
      id: 3,
      src: <AiFillHtml5 size={50} className="mx-auto" />,
      title: "JavaScript",
    },
    {
      id: 4,
      src: <BiLogoReact size={50} className="mx-auto" />,
      title: "React",
    },
    {
      id: 5,
      src: <SiNextdotjs size={50} className="mx-auto" />,
      title: "Next.js",
    },
    {
      id: 6,
      src: <DiNpm size={50} className="mx-auto" />,
      title: "npm",
    },
    {
      id: 7,
      src: <AiFillGithub size={50} className="mx-auto" />,
      title: "GitHub",
    },
    {
      id: 8,
      src: <BiLogoTailwindCss size={50} className="mx-auto" />,
      title: "Tailwind",
    },
    {
      id: 9,
      src: <BiLogoMongodb size={50} className="mx-auto" />,
      title: "MongoDB",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b  to-indigo-500 from-pink-500 w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 py-24 md:pt-36 flex flex-col justify-center w-fill h-full text-white">
        <div>
          <p className="text-4xl font-bold tracking-[.25em] uppercase p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className="border-solid border-2 border-white shadow-[5px_5px_0px_0px_rgba(255,255,255)] hover:scale-105 duration-500 py-2 rounded-lg"
            >
              {src}
              <img src="src" alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
