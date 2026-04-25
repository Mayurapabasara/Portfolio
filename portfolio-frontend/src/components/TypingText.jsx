import { useEffect, useState } from "react";

const roles = ["Problem Solver", "Full Stack Developer"];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (forward) {
      if (subIndex < roles[index].length) {
        setTimeout(() => setSubIndex(subIndex + 1), 80);
      } else {
        setForward(false);
        setTimeout(() => {}, 1000);
      }
    } else {
      if (subIndex > 0) {
        setTimeout(() => setSubIndex(subIndex - 1), 40);
      } else {
        setForward(true);
        setIndex((index + 1) % roles.length);
      }
    }
  }, [subIndex, forward]);

  useEffect(() => {
    setText(roles[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <p className="text-lg text-gray-400 mt-3 h-6">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}