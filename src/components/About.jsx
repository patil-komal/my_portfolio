import { motion } from "framer-motion";
import profile from "../assets/images/about.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 lg:py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center"
        >
          About Me
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mt-12 lg:mt-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">

              <img
                src={profile}
                alt="komal"
                className="
                  w-64 h-64
                  sm:w-80 sm:h-80
                  lg:w-[420px] lg:h-[420px]
                  object-cover
                  rounded-3xl
                  shadow-2xl
                  hover:scale-105
                  transition duration-300
                "
              />

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-violet-500/10 blur-2xl rounded-3xl -z-10"></div>

            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Frontend Developer
            </h3>

            <p className="text-gray-400 mt-4 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base">
              I am an MCA graduate passionate about building responsive web
              applications using React.js, JavaScript, HTML, CSS and Tailwind CSS.
              I enjoy learning modern technologies and creating user-friendly digital experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">

              <div className="bg-slate-800 rounded-2xl p-5 sm:p-6 text-center hover:scale-105 transition">
                <h1 className="text-3xl sm:text-4xl font-bold text-violet-400">
                  10+
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-300">
                  Technologies
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-5 sm:p-6 text-center hover:scale-105 transition">
                <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400">
                  3+
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-300">
                  Projects
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;