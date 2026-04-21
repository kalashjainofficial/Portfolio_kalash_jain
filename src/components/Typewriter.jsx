import { useEffect, useState } from "react";
import '../index.css'
function Typewriter() {
  const words = [
    "CODER.",
    "DEVELOPER.",
    "FREELANCER."
  ];

  const [i, setI] = useState(0); // word index
  const [j, setJ] = useState(0); // letter index
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[i];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, j - 1));
        setJ(j - 1);

        if (j === 0) {
          setIsDeleting(false);
          setI((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, j + 1));
        setJ(j + 1);

        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? 50 : 100); // faster deleting

    return () => clearTimeout(timeout);
  }, [j, isDeleting, i]);

  return (
    <div className="w-full h-full flex justify-center items-center absolute top-[12%] left-[0%]">
      <div className="flex items-center">
        <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold
bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-400
text-transparent bg-clip-text
drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
          {text}
        </h1>
        <span className="text-purple-300 text-[clamp(1.5rem,4vw,3rem)] font-bold ml-1" style={{ animation: "flicker 0.5s infinite" }}>|</span>
      </div>
    </div>
  );
}

export default Typewriter;