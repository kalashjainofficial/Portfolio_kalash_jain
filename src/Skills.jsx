import React from "react";
import Header from "./components/Header";

const Skills = () => {
  const skillsData = [
    {
      title: "FRONTEND",
      desc: ["HTML", "Tailwind CSS", "JavaScript", "React"],
      position: "12.5%",
    },
    {
      title: "PROGRAMMING LANGUAGES",
      desc: ["C++", "Python", "C"],
      position: "37.5%",
    },
    {
      title: "CONCEPTS",
      desc: ["Data Structure and Algorithms (C++)", "OOPs"],
      position: "62.5%",
    },
    {
      title: "TOOLS & OS",
      desc: ["Linux", "Git (Version Control)", "GitHub (Repository Management)"],
      position: "87.5%",
    },
  ];

  const MobileSkillCard = ({ title, description }) => (
    <div className="flex items-start gap-4">
      <div className="relative mt-2 flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        <div className="absolute left-1/2 top-4 w-[2px] h-full -translate-x-1/2 bg-gradient-to-b from-cyan-400 to-transparent" />
      </div>

      <div className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-white/80 shadow-[0_0_20px_rgba(0,0,0,0.25)]">
        <h3 className="text-lg font-bold text-cyan-300 mb-3">
          {title}
        </h3>

        <div className="text-base leading-relaxed space-y-1">
          {description.map((item, index) => (
            <p key={index}>• {item}</p>
          ))}
        </div>
      </div>
    </div>
  );

  const DesktopSkillDot = ({ position, title, description }) => (
    <div
      className="group absolute top-[10%] -translate-x-1/2 flex flex-row items-center"
      style={{ left: position }}
    >
      <div className="relative z-10 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300 group-hover:scale-150 group-hover:bg-fuchsia-400" />

      <div className="absolute top-4 left-1/2 w-[2px] h-16 -translate-x-1/2 bg-gradient-to-b from-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[260px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-white/80 transition-all duration-300 opacity-100 shadow-[0_0_25px_rgba(168,85,247,0.15)]">
        <h3 className="text-xl font-bold text-cyan-300 mb-4 transition-all duration-300 ease-out group-hover:text-cyan-500 group-hover:[text-shadow:0_0_6px_rgba(34,211,238,0.6)]">
          {title}
        </h3>

        <div className="text-base leading-relaxed space-y-1">
          {description.map((item, index) => (
            <p className="mb-2" key={index}>
              • {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      <Header title="Skills" />

      <div className="flex-1 bg-gradient-to-b from-[#4c28d0] to-[#000000] relative px-4 py-8 sm:px-6 lg:px-10">
        {/* Mobile layout */}
        <div className="md:hidden relative">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-8 pl-6">
            {skillsData.map((skill, index) => (
              <MobileSkillCard
                key={index}
                title={skill.title}
                description={skill.desc}
              />
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block relative h-full min-h-[500px]">
          <div className="absolute left-0 right-0 top-[10%] h-[2px] bg-white/10" />

          {skillsData.map((skill, index) => (
            <DesktopSkillDot
              key={index}
              position={skill.position}
              title={skill.title}
              description={skill.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;