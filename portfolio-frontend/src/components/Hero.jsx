import { motion } from "framer-motion";
import profileImg from "../assets/profileImg.jpeg";
import TypingText from "./TypingText";
import ParticlesBg from "./ParticlesBg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">

      <ParticlesBg />
      
      {/* 🔵 Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500 blur-[150px] opacity-20 rounded-full"></div>

      {/* 🔁 Rotating Ring */}
      <div className="relative flex items-center justify-center">
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute w-[620px] h-[620px] border-4 border-blue-400 rounded-full"
        />

        {/* Profile Image */}
        <div className="w-[600px] h-[600px] rounded-full border-4 border-white/20 overflow-hidden z-10">
          <img
            src={profileImg}
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Name */}
      <h1 className="text-5xl font-bold mt-6">
        I am <span className="text-blue-400">Mayura Pabasara</span>
      </h1>

      {/* Typewriter below */}
      <TypingText />
      

    </section>
  );
}