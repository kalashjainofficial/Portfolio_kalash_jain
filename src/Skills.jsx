import React from 'react'
import Header from './components/Header'
import { MdDescription } from 'react-icons/md';
const Skills = () => {
  const SkillDot = ({ position , title , description }) => (
  <div
    className="group absolute top-[10%] -translate-x-1/2"
    style={{ left: position }}
  >

    {/* DOT */}
    <div className="
      relative z-10
      w-4 h-4 rounded-full
      bg-cyan-400
      shadow-[0_0_10px_rgba(34,211,238,0.8)]
      transition-all duration-300
      group-hover:scale-150
      group-hover:bg-fuchsia-400
    "></div>

    {/* LINE */}
    <div className="
      absolute top-4 left-1/2
      w-[2px] h-16
      -translate-x-1/2
      bg-white/0
     
      group-hover:bg-gradient-to-b from-cyan-400 to-transparent
    "></div>

    {/* CARD */}
    <div className='
      absolute top-[90px] left-1/2 -translate-x-1/2
      w-[260px]
      bg-white/5 backdrop-blur-lg
      border border-white/10
      rounded-2xl
      p-5 text-white/80
      transition-all duration-300

      opacity-0 scale-90
      opacity-100 scale-100

      group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4),
                           0_0_50px_rgba(168,85,247,0.25)]
      group-hover:border-purple-400/40
    '>
<h3
  className="
    text-xl font-bold text-cyan-300 mb-4
    transition-all duration-300 ease-out

    group-hover:text-cyan-500
    group-hover:[text-shadow:0_0_6px_rgba(34,211,238,0.6)]
  "
>
  {title}
</h3>

      <div className="text-l leading-relaxed space-y-1">
  {description.map((item, index) => (
    <p className='mb-2' key={index}>• {item}</p>
  ))}
</div>

    </div>

  </div>

  
);

const skillsData = [
  {
    title: "FRONTEND",
    desc: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    position: "12.5%"
  },
  {
    title: "PROGRAMMING LANGUAGES",
    desc: ["C++", "Python", "C"],
    position: "37.5%"
  },
  {
    title: "CONCEPTS",
    desc: ["Data Structure and Algorithms (C++)", " OOP'S"],
    position: "62.5%"
  },
  {
    title: "TOOLS & OS",
    desc: ["Linux", "Git (Version Control)", " GitHub (Repository Management)"],
    position: "87.5%"
  }

];
  return (
    <div className='h-screen bg-black relative flex flex-col '>
      <Header title='Skills' />

      <div className='flex-1 bg-gradient-to-b from-[#4c28d0] to-[#000000] relative '>

  {/* center line */}
 
{skillsData.map((skill, index) => (
  <SkillDot
    key={index}
    position={skill.position}
    title={skill.title}
    description={skill.desc}
  />
))}

</div>
    </div >

  )
}

export default Skills