import React, { useEffect } from "react";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

const About_me = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  // reusable card style
  const card = `
    w-full
    max-w-[clamp(280px,90vw,500px)]

    bg-white/5
    backdrop-blur-lg

    border border-white/10

    rounded-2xl

    p-4 sm:p-6 md:p-8

    leading-relaxed
    text-white/80

    shadow-[0_0_30px_rgba(168,85,247,0.15)]

    transition-all duration-300

    hover:border-cyan-400/30
    hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#2f1547] text-white overflow-hidden">

      <Header title="About Me" />

      {/* MAIN CONTAINER */}
      <div className="
        max-w-7xl
        mx-auto

        px-4 sm:px-6 lg:px-10
        py-10

        flex flex-col
        xl:flex-row

        gap-16
        xl:gap-24

        items-start
        justify-center
      ">

        {/* ================= LEFT TIMELINE ================= */}
        <div
          className="relative w-full xl:w-1/2"
          data-aos="fade-right"
        >

          {/* vertical line */}
          <div className="
            absolute left-2 sm:left-4 top-0
            w-[2px] h-full

            bg-gradient-to-b
            from-fuchsia-400
            via-violet-400
            to-cyan-400

            opacity-70
          "></div>

          {/* title */}
          <h2 className="
            text-2xl sm:text-3xl
            font-semibold

            mb-10
            tracking-wide
            text-purple-300

            ml-10 sm:ml-12
          ">
            The Journey
          </h2>

          {/* CARD 1 */}
          <div className="relative mb-10 ml-10 sm:ml-12">

            {/* dot */}
            <div className="
              absolute
              -left-8 sm:-left-10
              top-3

              w-4 h-4
              rounded-full

              bg-fuchsia-400

              shadow-[0_0_10px_rgba(168,85,247,0.8)]
            "></div>

            <div className={card}>
              <p className="text-sm sm:text-base">
                It all started when I was in 11th grade and chose Informatics Practices as an optional subject, purely out of curiosity to understand how computers actually work.

                During this time, I came across{" "}
                <span className="text-cyan-300 font-medium">
                  Python
                </span>{" "}
                for the first time.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative mb-10 ml-10 sm:ml-12">

            {/* dot */}
            <div className="
              absolute
              -left-8 sm:-left-10
              top-3

              w-4 h-4
              rounded-full

              bg-cyan-400

              shadow-[0_0_10px_rgba(34,211,238,0.8)]
            "></div>

            <div className={card}>
              <p className="text-sm sm:text-base">
                Fast forward to college, I chose BCA as my bachelor's
                degree to deepen my knowledge in computer applications.

                I explored multiple domains and eventually discovered{" "}
                <span className="text-cyan-300 font-medium">
                  Data Structures and Algorithms
                </span>,
                which became an important part of my learning journey.
              </p>
            </div>
          </div>

        </div>

        {/* ================= RIGHT TIMELINE ================= */}
        <div
          className="relative w-full xl:w-1/2"
          data-aos="fade-left"
        >

          {/* vertical line */}
          <div className="
            absolute left-2 sm:left-4 top-0
            w-[2px] h-full

            bg-gradient-to-b
            from-fuchsia-400
            via-violet-400
            to-cyan-400

            opacity-70
          "></div>

          {/* title */}
          <h2 className="
            text-2xl sm:text-3xl
            font-semibold

            mb-10
            tracking-wide
            text-purple-300

            ml-10 sm:ml-12
          ">
            Continues...
          </h2>

          {/* CARD 1 */}
          <div className="relative mb-10 ml-10 sm:ml-12">

            {/* dot */}
            <div className="
              absolute
              -left-8 sm:-left-10
              top-3

              w-4 h-4
              rounded-full

              bg-fuchsia-400

              shadow-[0_0_10px_rgba(168,85,247,0.8)]
            "></div>

            <div className={card}>
              <p className="text-sm sm:text-base">

                During my final year of college, I landed an internship
                as a{" "}

                <span className="text-cyan-300 font-medium">
                  Full-Stack Developer
                </span>{" "}

                at Kuchoriya Tech Soft.

                That experience became a turning point in my life because
                it was my first step into real-world development.

                I learned how production-level projects are built and
                gained hands-on experience with technologies like{" "}

                <span className="text-cyan-300 font-medium">
                  JavaScript
                </span>{" "}
                and{" "}

                <span className="text-cyan-300 font-medium">
                  React
                </span>.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative mb-10 ml-10 sm:ml-12">

            {/* dot */}
            <div className="
              absolute
              -left-8 sm:-left-10
              top-3

              w-4 h-4
              rounded-full

              bg-cyan-400

              shadow-[0_0_10px_rgba(34,211,238,0.8)]
            "></div>

            <div className={card}>
              <p className="text-sm sm:text-base">
                That same curious boy has now solved {" "}
                <span className="text-cyan-300 font-medium">
                  100+ LeetCode problems
                </span>
                , gained{' '}

                <span className="text-cyan-300 font-medium">
                  3+ months
                </span>

                {' '}of real-world development experience, and built {' '}
                <span className="text-cyan-300 font-medium">
                  Multiple projects
                </span>
                . What started as curiosity has now turned into skill—and this is just the beginning

                .
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About_me;