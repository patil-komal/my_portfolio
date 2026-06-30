import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import profile from "../assets/images/profile.png";
import resume from "../data/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Komal <span className="text-violet-500">Sonawane</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "MCA Graduate",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-cyan-300 font-semibold"
          />

          <p className="text-gray-400 mt-6 max-w-lg leading-8">
            Passionate React Developer who loves building beautiful,
            responsive and user-friendly web applications with modern
            technologies.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href={resume}
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-5 mt-8 text-2xl">
            <a href="https://github.com/patil-komal">
              <FaGithub className="hover:text-violet-400 transition" />
            </a>

            <a href="https://www.linkedin.com/in/komal-sonawane-104364376">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-rfrom-violet-600 to-cyan-500 blur-3xl opacity-40"></div>

            <img
              src={profile}
              alt="Komal Patil"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-violet-500 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <FaArrowDown className="text-2xl text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;