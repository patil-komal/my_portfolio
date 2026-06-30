import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "php",
  "typescript",
  "springboot",
];

const tools = ["Git", "GitHub", "VS Code", "Figma"];

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900 p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-violet-400 mb-6">
              Frontend Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-violet-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900 p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Tools & Platforms
            </h3>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-800 rounded-full text-sm hover:bg-cyan-500 transition"
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