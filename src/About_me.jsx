import React, { useEffect } from 'react'
import Header from './components/Header'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About_me = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
       easing: "ease-out-cubic" // animation speed
         
    });
  }, []);

  // css of card
  let card = ` bg-white/5 backdrop-blur-lg
            border border-white/10
            
            rounded-2xl
            p-6 md:p-8
            leading-relaxed
            text-white/80
            shadow-[0_0_30px_rgba(168,85,247,0.15)]`
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#2f1547] text-white'>


      <Header title='About Me' />
<div className='flex'>

      {/* Timeline Container 1 */}
      <div className='max-w-[40%]  px-6 mt-13 relative'
      data-aos="fade-right">

        {/* Vertical Line */}
        <div className='
          absolute left-4 top-0
          w-[2px] h-full
          bg-gradient-to-b from-fuchsia-400 via-violet-400 to-cyan-400
          opacity-70
        '></div>

        {/* Section Title */}
        <h2 className='text-2xl md:text-3xl font-semibold mb-10 tracking-wide text-purple-300 ml-12'>
          The Journey
        </h2>

        {/* First Card */}
        <div className='relative mb-10 ml-12'>

          {/* Dot */}
          <div className='
            absolute -left-10 top-3
            w-4 h-4 rounded-full
            bg-fuchsia-400
            shadow-[0_0_10px_rgba(168,85,247,0.8)]
          '></div>

          <div className={card}>
            <p>
              I started programming in 11th grade when I chose Informatics Practices as an optional subject, purely out of curiosity to understand how computers actually work. During this time, I came across <span className="text-cyan-300 font-medium">Python</span> for the first time.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className='relative ml-12 mb-10'>

          {/* Dot */}
          <div className='
            absolute -left-10 top-3
            w-4 h-4 rounded-full
            bg-cyan-400
            shadow-[0_0_10px_rgba(34,211,238,0.8)]
          '></div>

          <div className={card}>
            <p>
              Fast forward to college, I chose BCA as my bachelor's degree to deepen my knowledge in computer applications. With multiple paths available, I explored different areas and eventually discovered <span className="text-cyan-300 font-medium">Data Structures and Algorithms</span>, which became an important part of my learning journey.
            </p>
          </div>

        </div>

        
      </div>


      {/* Timeline Container 2 */}
      <div className='max-w-[40%]  px-6 mt-13 relative ml-60'
      data-aos="fade-right">

        {/* Vertical Line */}
        <div className='
          absolute left-4 top-0
          w-[2px] h-full
          bg-gradient-to-b from-fuchsia-400 via-violet-400 to-cyan-400
          opacity-70
        '></div>

        {/* Section Title */}
        <h2 className='text-2xl md:text-3xl font-semibold mb-10 tracking-wide text-purple-300 ml-12'>
          continues...
        </h2>

        {/* First Card */}
        <div className='relative mb-10 ml-12 '>

          {/* Dot */}
          <div className='
            absolute -left-10 top-3
            w-4 h-4 rounded-full
            bg-fuchsia-400
            shadow-[0_0_10px_rgba(168,85,247,0.8)]
            '></div>

          <div className={card}>
            <p>
             During my final year of college, I landed an internship as a <span className="text-cyan-300 font-medium">full-stack developer</span> at Kuchoriya Tech Soft. That was a turning point in my life, as it was my first step into the real world of development. I got to know how real projects are built and learned technologies like <span className="text-cyan-300 font-medium">Javascript</span> and <span className="text-cyan-300 font-medium">React</span>.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className='relative ml-12 mb-10'>

          {/* Dot */}
          <div className='
            absolute -left-10 top-3
            w-4 h-4 rounded-full
            bg-cyan-400
            shadow-[0_0_10px_rgba(34,211,238,0.8)]
          '></div>

          <div className={card}>
            <p>
             To be <span className="text-cyan-300 font-medium">Continued...</span>
            </p>
          </div>

        </div>

        
      </div>

            </div>
    </div>
  )
}

export default About_me