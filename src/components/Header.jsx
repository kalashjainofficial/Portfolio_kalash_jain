import React from "react";

const Header = ({title = "section"}) => {
  return (
    <div className="relative w-full overflow-hidden px-6 sm:px-10 py-8 h-[17%]">
      {/* soft glow */}
      <div className="absolute -left-24 top-[-2rem] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
      <div className="absolute -right-24 top-[-2rem] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />

      {/* header content */}
      <div className="relative flex flex-col ">
        

        <h1 className="text-[clamp(2.4rem,3vw,4.5rem)] font-extrabold uppercase tracking-[0.22em] bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]">
          {title}
        </h1>

        <div className="mt-1 h-[1px] w-32 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 shadow-[0_0_14px_rgba(168,85,247,0.45)]" />
      </div>
    </div>
  );
};

export default Header;