import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

import profile from "../assets/images/profile.png";
import resume from "../data/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 blur-3xl opacity-30"></div>

              <img
                src={profile}
                alt="Komal Sonawane"
                className="
                  relative
                  object-cover
                  rounded-full
                  border-4
                  border-violet-500
                  shadow-2xl

                  w-56 h-56
                  sm:w-72 sm:h-72
                  md:w-80 md:h-80
                  lg:w-[420px] lg:h-[420px]
                "
              />
            </div>
          </motion.div>

          {/* ================= TEXT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p className="text-cyan-400 text-base sm:text-lg mb-4">
              👋 Hello, I'm
            </p>

            <h1
              className="
                font-extrabold
                leading-tight

                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Komal{" "}
              <span className="text-violet-500">
                Sonawane
              </span>
            </h1>

            <div className="mt-4">

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
                className="
                  font-semibold
                  text-cyan-300

                  text-xl
                  sm:text-2xl
                  md:text-3xl
                "
              />

            </div>

            <p
              className="
                mt-6
                text-gray-400
                leading-8

                max-w-xl
                mx-auto
                lg:mx-0
              "
            >
              Passionate React Developer with a strong interest in
              building modern, responsive and user-friendly web
              applications using React.js, JavaScript and Tailwind CSS.
              I enjoy creating clean interfaces and continuously learning
              new technologies.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href={resume}
                download
                className="
                  w-full
                  sm:w-auto

                  px-8
                  py-3

                  rounded-full
                  text-center
                  font-medium

                  bg-violet-600
                  hover:bg-violet-700

                  transition
                "
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="
                  w-full
                  sm:w-auto

                  px-8
                  py-3

                  rounded-full
                  text-center
                  font-medium

                  border
                  border-cyan-400

                  hover:bg-cyan-400
                  hover:text-slate-900

                  transition
                "
              >
                Contact Me
              </a>

            </div>

            {/* Social Icons */}

            <div className="mt-10 flex justify-center lg:justify-start gap-4">

              <a
                href="https://github.com/patil-komal"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-slate-900

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  text-xl

                  hover:text-violet-400
                  hover:border-violet-400
                  hover:-translate-y-1

                  transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/komal-sonawane-104364376"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12
                  h-12

                  rounded-full

                  bg-slate-900

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  text-xl

                  hover:text-cyan-400
                  hover:border-cyan-400
                  hover:-translate-y-1

                  transition
                "
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

        </div>

      </div>

      {/* Scroll Down */}

      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

        <FaArrowDown className="text-2xl text-cyan-400" />

      </div>
    </section>
  );
};

export default Hero;