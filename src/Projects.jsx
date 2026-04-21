import React from "react";
import Header from "./components/Header";

function Projects() {

  const projectsData = [
    {
      title: "Portfolio Website",
      desc: "A modern animated portfolio built using React and Tailwind CSS with smooth UI and interactive elements.",
      tech: ["React", "Tailwind", "JavaScript"],
      github: "https://github.com/your-link",
      live: "https://your-site-link",
      image: "/images/portfolio.png",
    },
    {
      title: "Task Manager App",
      desc: "A full-stack task manager with authentication and CRUD operations.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/your-link",
      live: "",
      image: "/images/task.png",
    },
  ];

  const ProjectCard = ({ title, desc, tech, github, live, image }) => (
    <div
      className="
      group relative overflow-hidden
      bg-white/5 backdrop-blur-lg
      border border-white/10
      rounded-2xl
      p-6
      text-white/80

      transition-all duration-300
      hover:scale-[1.04]
      hover:border-purple-400/40
      hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
    "
    >

      {/* 🔥 IMAGE PREVIEW */}
      <div
        className="
        absolute inset-0
        opacity-0 group-hover:opacity-100
        transition duration-500
        z-0
      "
      >
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            scale-110 group-hover:scale-100
            transition duration-700
          "
        />

        {/* overlay */}
        <div
          className="
          absolute inset-0
          bg-gradient-to-t from-black via-black/70 to-transparent
        "
        ></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* Title */}
        <h3
          className="
          text-xl font-bold mb-3
          text-cyan-300
          transition-all duration-300
          group-hover:text-cyan-400
        "
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm mb-4 leading-relaxed">
          {desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <span
              key={i}
              className="
              text-xs px-2 py-1
              bg-cyan-400/10
              text-cyan-300
              rounded-md
            "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 absolute -bottom-80 left-0">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 transition"
            >
              GitHub →
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-400 transition"
            >
              Live →
            </a>
          )}
        </div>

      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white bg-black -z-10 flex flex-col"
    >

      <Header title="Projects" />

      <div
        className="
        flex-1
        px-6 py-16
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-10
         
      "
      style={{
    background: "linear-gradient(to bottom, #000000, #1e126d, #000000, #1e126d, #000000)"
  }}
      
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </div>
  );
}

export default Projects;