import { motion } from "framer-motion";

const projects = [
  {
    title: "MindCare",
    desc: "Mental Health Wellness Web App with mood tracking, journaling and meditation features.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind"],
    github: "https://github.com/patil-komal",
  },
  {
    title: "WearWell",
    desc: "E-commerce website for clothes, watches and footwear with smooth shopping experience.",
    tech: ["PHP", "MySQL", "Tailwind CSS"],
    github: "https://github.com/patil-komal/WearWell",
  },
  {
    title: "Day Dream Cafe",
    desc: "Cafe website where users can order food, make payments and explore menu easily.",
    tech: ["JavaScript", "React", "Bootstrap", "Node.js"],
    github: "https://github.com/patil-komal",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
        >
          My Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                group
                bg-slate-950/70
                border border-white/10
                rounded-2xl
                p-5 sm:p-6
                shadow-lg
                hover:-translate-y-2
                hover:border-violet-500/40
                transition-all duration-300
              "
            >

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-violet-400 group-hover:text-violet-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-3 text-sm leading-6">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      text-xs
                      px-3 py-1
                      rounded-full
                      bg-slate-800
                      border border-white/10
                      text-gray-300
                      hover:bg-violet-600
                      transition
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full sm:w-auto
                    text-center
                    px-4 py-2
                    text-sm
                    rounded-lg
                    border border-cyan-400
                    text-cyan-300
                    hover:bg-cyan-400
                    hover:text-black
                    transition
                  "
                >
                  GitHub
                </a>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;