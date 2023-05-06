import React from "react";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import phpMySql from "../assets/php&mySql.png";
import java from "../assets/java.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    {
      id: 4,
      src: sass,
      title: "Sass",
      style: "shadow-pink-500",
    },
    // {
    //   id: 5,
    //   src: firebase,
    //   title: "firebase",
    //   style: "shadow-yellow-500",
    // },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-50",
    },
    {
      id: 8,
      src: javascript,
      title: "Javascript",
      style: "shadow-amber-400",
    },
    {
      id: 9,
      src: phpMySql,
      title: "PHP&MySql",
      style: "shadow-indigo-400",
    },
    {
      id: 10,
      src: java,
      title: "Java",
      style: "shadow-red-500",
    },
    // {
    //   id: 10,
    //   src: typescript,
    //   title: "TypeScript",
    //   style: "shadow-blue-600",
    // },
    // {
    //   id: 11,
    //   src: react,
    //   title: "React",
    //   style: "shadow-sky-500",
    // },
    // {
    //   id: 12,
    //   src: redux,
    //   title: "Redux",
    //   style: "shadow-indigo-600",
    // },
    // {
    //   id: 13,
    //   src: node,
    //   title: "Node",
    //   style: "shadow-lime-500",
    // },
  ];

  return (
    <section
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-[100%]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h1 className="text-4xl font-bold border-b-4  border-gray-500 p-2 inline">
            Experience
          </h1>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid w-full md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 uppercase">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
