import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "PHP",
  "TypeScript",
  "Spring Boot",
];

const tools = ["Git", "GitHub", "VS Code", "Figma"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
        >
          My Skills
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-violet-400 mb-5 sm:mb-6">
              Frontend & Backend Skills
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="
                    px-3 sm:px-4 py-1.5 sm:py-2
                    text-xs sm:text-sm
                    bg-slate-800
                    border border-white/10
                    rounded-full
                    text-gray-200
                    hover:bg-violet-600
                    hover:border-violet-500
                    transition
                    cursor-default
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-5 sm:mb-6">
              Tools & Platforms
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="
                    px-3 sm:px-4 py-1.5 sm:py-2
                    text-xs sm:text-sm
                    bg-slate-800
                    border border-white/10
                    rounded-full
                    text-gray-200
                    hover:bg-cyan-500
                    hover:text-black
                    transition
                    cursor-default
                  "
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;