import { motion } from "framer-motion";
import profile from "../assets/images/about.png"

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.6}}
          className="text-4xl font-bold text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

          <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
          >

            <img
              src={profile}
              alt="komal"
              className="rounded-3xl"
            />

          </motion.div>

          <motion.div
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
          >

            <h3 className="text-3xl font-semibold">

              Frontend Developer

            </h3>

            <p className="text-gray-400 mt-6 leading-8">

              I am an MCA graduate passionate about building
              responsive web applications using React.js,
              JavaScript, HTML, CSS and Tailwind CSS.

              I enjoy learning modern technologies and creating
              user-friendly digital experiences.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-slate-800 rounded-2xl p-6">
                <h1 className="text-4xl font-bold text-violet-400">
                  10+
                </h1>

                <p className="mt-2">
                  Technologies
                </p>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h1 className="text-4xl font-bold text-cyan-400">
                  3+
                </h1>

                <p className="mt-2">
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