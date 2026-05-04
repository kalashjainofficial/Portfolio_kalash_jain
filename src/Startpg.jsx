
import Orb from "./components/orb";
import fphoto from "./components/images/kalashjain_photo2.png";
import aboutme from "./components/images/logo images/aboutme_logo.png";
import experience from "./components/images/logo images/experience_logo.png";
import contact from "./components/images/logo images/phone_logo.png";
import project from "./components/images/logo images/Project_logo.png";
import skills from "./components/images/logo images/skills_logo.png";
import resume from "./components/images/resume logo.png"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "./components/Typewriter";
import { Link } from "react-scroll";
import { useEffect } from "react";



function Startpage() {

  // css of the buttons
  const buttonstyle = `
    absolute
    w-[clamp(40px,3vw,56px)]
    h-[clamp(40px,3vw,56px)]
    z-50
    rounded-full
    p-[7px]
    bg-amber-50
    cursor-pointer
    flex items-center justify-center
    transform transition-all duration-300
    hover:scale-125
    shadow-inner
    hover:shadow-[inset_0_0_20px_rgba(0,31,63,1)]
    active:shadow-[0_0_25px_rgba(119,63,236,0.97)]
    active:scale-95 active:translate-y-[2px]
transition-all duration-150
    
    
  `;







  // info of buttons
  const items = [
    { src: aboutme, alt: "about me", title: "About Me", link: "#aboutme", x: 6.5, y: 35 },
    { src: experience, alt: "experience", title: "Experience", link: "#experience", x: 5, y: 50 },
    { src: skills, alt: "skills", title: "Skills", link: "#skills", x: 8, y: 65 },
    { src: project, alt: "project", title: "Projects", link: "#projects", x: 16.5, y: 76.5 },
    { src: contact, alt: "contact", title: "Contact", link: "#contact", x: 28, y: 84.5 },
    { src: resume, alt: "resume", title: "Resume", link: "https://drive.google.com/file/d/1p6w0iL_sAE4JWtxkFVJOenyosY83HQVq/view?usp=sharing", x: 88.3, y: 50 },


    { icon: <SiLeetcode />, title: "LeetCode Profile", link: "https://leetcode.com/u/kalashjainn/", x: 66, y: 9.5 },
    { icon: <FaGithub />, title: "GitHub Profile", link: "https://github.com/kalashjainofficial", x: 79.5, y: 20 },
    { icon: <CiLinkedin />, title: "LinkedIn Profile", link: "https://www.linkedin.com/in/kalash-jain-87662927a/", x: 86.5, y: 34 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[radial-gradient(circle_at_right,_#380cbc_0%,_#000_60%)]">

      {/* img , orb , navbutton */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end pt-12 md:pt-0 md:pb-0 md:pr-10">
        <div className="relative w-[75vw] md:w-[90vw] max-w-[700px] aspect-square z-10">
          <Orb
            hue={360}
            hoverIntensity={0.5}
            rotateOnHover={true}
            backgroundColor="#00021f"
          />

          <img
            src={fphoto}
            alt="Profile"
            className="absolute top-1/2 left-1/2 w-[75%] h-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none [mask-image:radial-gradient(circle,black_35%,transparent_90%)] [-webkit-mask-image:radial-gradient(circle,black_35%,transparent_90%)]"
          />

          {items.map((item, index) => (
            <div
              key={index}
              className="absolute group"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: "translate(1/2, 1/2)",
              }}
            >
              {item.link.startsWith("#") ? (
                <Link
                  to={item.link.replace("#", "")}
                  smooth={true}
                  duration={500}
                  offset={0} // adjust if needed
                  className={`${buttonstyle} box`}
                >
                  {item.src ? (
                    <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                  ) : (
                    item.icon
                  )}
                </Link>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonstyle}
                >
                  {item.src ? (
                    <img src={item.src} alt={item.alt} className="w-full h-full object-contain" />
                  ) : (
                    item.icon
                  )}
                </a>
              )}


              <span className="
      pointer-events-none
      absolute bottom-full left-1/2 -translate-x-1/2 mb-2

      px-3 py-1 text-xs tracking-wide
      bg-white/10 backdrop-blur-md
      border border-white/20
      text-purple-300
      rounded-md

      opacity-0 scale-90
      group-hover:opacity-100 group-hover:scale-100

      transition-all duration-150
      whitespace-nowrap

      shadow-[0_0_15px_rgba(168,85,247,0.4)]
    ">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>


      {/* content of left-side */}
      <div className="
absolute top-0 left-0 z-20 md:static md:z-auto
w-full md:w-[60vw]
h-screen 
bg-transparent md:bg-white/5 md:backdrop-blur-lg 
border-none md:border-solid md:border-white/10 md:border-l md:border-purple-400/40
md:[clip-path:polygon(0_0,65%_0,100%_100%,0%_100%)]
pointer-events-none md:pointer-events-auto
">

        <div className="
pointer-events-auto
absolute top-[3%] left-[5%] md:left-[3%]
px-[20px] md:px-[28px] py-4 md:py-5
rounded-2xl
bg-white/10 backdrop-blur-md
border border-white/15
shadow-[0_0_25px_rgba(168,85,247,0.25)]
[clip-path:polygon(0_0,95%_0,100%_100%,0%_100%)] md:[clip-path:polygon(0_0,90%_0,100%_100%,0%_100%)]
w-[85vw] md:w-[45vw]
">

          <h1 className="
    text-[clamp(1.5rem,7vw,3rem)]
    font-extrabold
    tracking-[0.2em] md:tracking-[0.35em]
    uppercase
    bg-gradient-to-r from-fuchsia-300 via-violet-300 to-indigo-300
    text-transparent bg-clip-text
    drop-shadow-[0_0_12px_rgba(168,85,247,0.45)]
    mb-1
    
  ">
            Portfolio
          </h1>

          <h1 className="
    text-[clamp(1.2rem,2vw,1.7rem)]
    font-medium
    tracking-wide
    text-white/75
    
  ">
            Kalash Jain
          </h1>

        </div  >
        <h1 className="absolute top-[80%] md:top-[50%] left-[10%] md:left-[25%]
text-[clamp(1.2rem,3vw,2.5rem)] font-medium
text-slate-300 text-sm tracking-widest pointer-events-auto">
          Hi, I'm a</h1>
        <Typewriter />


      </div>



      {/* button to go to top */}
      <div className="fixed bottom-5 right-5 z-[999] relative group">
        <span className="
    pointer-events-none
    absolute bottom-15 -right-8 -translate-x-1/2 mb-2
    px-3 py-1 text-xs tracking-wide
    bg-white/10 backdrop-blur-md
    border border-white/20
    text-purple-300
    rounded-md
    opacity-0 scale-90
    group-hover:opacity-100 group-hover:scale-100
    transition-all duration-150
    whitespace-nowrap
    shadow-[0_0_15px_rgba(168,85,247,0.4)]
    fixed
  ">
          page up
        </span>

        <Link
          to="start"
          smooth={true}
          duration={500}
          className={`${buttonstyle} right-3 bottom-3 fixed`}
        >
          ↑
        </Link>
      </div>
    </div>
  );
}

export default Startpage;