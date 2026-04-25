import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative">

      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-blue-500 blur-[150px] opacity-20 rounded-full right-10 top-10"></div>

      <h2 className="text-4xl font-bold text-center mb-16">
        Get In <span className="text-blue-400">Touch</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* 🔹 LEFT: CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >

          {/* Email */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition">
            <FaEnvelope className="text-blue-400 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white">pabasara2523@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition">
            <FaPhone className="text-green-400 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-white">0717975625</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank"
              className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
            >
              <FaLinkedin />
            </a>
          </div>

        </motion.div>

        {/* 🔹 RIGHT: FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md"
        >

          <h3 className="text-xl font-semibold mb-4">
            Send Message
          </h3>

          <input
            placeholder="Your Name"
            className="w-full mb-4 p-3 bg-transparent border border-white/20 rounded-lg focus:border-blue-400 outline-none"
          />

          <input
            placeholder="Your Email"
            className="w-full mb-4 p-3 bg-transparent border border-white/20 rounded-lg focus:border-blue-400 outline-none"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full mb-4 p-3 bg-transparent border border-white/20 rounded-lg focus:border-blue-400 outline-none"
          />

          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
            Send Message
          </button>

        </motion.div>

      </div>
    </section>
  );
}