import React, { useEffect } from 'react'
import Header from './components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic"
    });
  }, []);

  const dot = `absolute w-4 h-4 rounded-full
      
  bg-cyan-400
  transition-all duration-300 ease-out
  shadow-[0_0_10px_rgba(34,211,238,0.8)]

  group-hover:scale-150
 
  hover:shadow-[0_0_20px_rgba(168,85,247,0.7),
                0_0_40px_rgba(168,85,247,0.5),
                0_0_60px_rgba(168,85,247,0.3)]`

  const AboveCard = ({ title, company, date, total_time, desc ,className }) => (
    <div className={`group absolute flex justify-center items-center ${className}`} 
    >

      <div className={`${dot}
      group-hover:scale-150
      group-hover:bg-fuchsia-400
    `}></div>

{/* line */}
<div className="
  bottom-full mb-10
  w-[2px] h-9
  bg-white/0
  group-hover:bg-gradient-to-b from-cyan-400 to-transparent
"></div>


      <div className='
      absolute bottom-full 
      w-[300px]
      bg-white/5 backdrop-blur-lg
      border border-white/10
      rounded-2xl
      p-6 text-white/80
      transition-all duration-300
      group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4),
                           0_0_50px_rgba(168,85,247,0.25)]
      group-hover:border-purple-400/40
      group-hover:scale-[1.03]
    '
    data-aos="fade-up"
     data-aos-duration="1000">

        <h3 className="text-lg font-semibold text-purple-300 mb-2">
          {title}
        </h3>
        <span className="text-xs text-cyan-300 bg-cyan-400/10 px-2 py-1  rounded-md absolute top-2 right-2">
            {total_time}
          </span>

        <p className="text-sm text-white/60 mb-2">
          {company}
        </p>

        <p className="text-xs text-purple-300 mb-3">
          {date}
          
        </p>

        <p className="text-sm leading-relaxed">
          {desc}
        </p>

      </div>

    </div>
  );

  const BelowCard = ({ title, company, date, total_time, desc ,className }) => (
    <div className={`group absolute flex justify-center items-center ${className}`}
    >

      <div className={`${dot}
      group-hover:scale-150
      group-hover:bg-fuchsia-400
    `}></div>

    
{/* line */}
<div className="
  top-full mt-10
  w-[2px] h-9
  bg-white/0
  group-hover:bg-gradient-to-b from-transparent to-cyan-400
"></div>

      <div className='
      absolute top-full 
      w-[300px]
      bg-white/5 backdrop-blur-lg
      border border-white/10
      rounded-2xl
      p-6 text-white/80
      transition-all duration-300
      group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4),
                           0_0_50px_rgba(168,85,247,0.25)]
      group-hover:border-purple-400/40
      group-hover:scale-[1.03]
    '
    data-aos="fade-down"
     data-aos-duration="1000">

        <h3 className="text-lg font-semibold text-purple-300 mb-2">
          {title}
        </h3>
        <span className="text-xs text-cyan-300 bg-cyan-400/10 px-2 py-1  rounded-md absolute top-2 right-2">
            {total_time}
          </span>

        <p className="text-sm text-white/60 mb-2">
          {company}
        </p>

        <p className="text-xs text-purple-300 mb-3">
          {date}
          
        </p>

        <p className="text-sm leading-relaxed">
          {desc}
        </p>

      </div>

    </div>
  );
  return (
    <div className='h-screen bg-black flex flex-col'>

      <Header title='Experience' />

      <div className='flex-1 bg-gradient-to-b from-[#000000] via-[#4c28d0] to-[#000000] z-50 relative'>

        <div
  className="
    absolute

    left-1/2 top-0
    -translate-x-1/2

    w-[2px] h-full

    sm:left-0
    sm:top-1/2
    sm:translate-x-0
    sm:-translate-y-1/2

    sm:w-full
    sm:h-[3px]

    bg-gradient-to-b
    sm:bg-gradient-to-r

    from-fuchsia-400
    via-violet-400
    to-cyan-400

    flex justify-center items-center
  "
>
{/* card 1 kuchoriya techsoft */}
         <AboveCard
         className='left-[15%]'
  title="Full Stack Intern"
  company="Kuchoriya Tech Soft"
  date="April 2026 – Present"
  total_time="3 Months"
desc={
  <>
    Worked on multiple projects using{" "}
    <span className="text-cyan-300 font-medium">
      HTML, CSS (Tailwind), JavaScript, and React
    </span>
    , gaining hands-on experience in building responsive user interfaces and developing dynamic web applications.
  </>
}
/>

   <BelowCard
         className='left-[45%]'
  title="Full Stack Intern"
  company="Kuchoriya Tech Soft"
  date="April 2026 – Present"
  total_time="3 Months"
desc={
  <>
    Worked on multiple projects using{" "}
    <span className="text-cyan-300 font-medium">
      HTML, CSS (Tailwind), JavaScript, and React
    </span>
    , gaining hands-on experience in building responsive user interfaces and developing dynamic web applications.
  </>
}
/>




        </div>

      </div>

    </div>
  )
}

export default Experience