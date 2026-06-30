import { motion } from "framer-motion";

const projects = [
  {
    title: "MindCare",
    desc: "Mental Health Wellness Web App with mood tracking, journaling and meditation features.",
    tech: ["React", "springboot", "MySQL", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "WearWell",
    desc: "Real-time Ecommers website where you can easily buy a clothes and watches and footwear etc .",
    tech: ["php", "mysql", "tailwind css"],
    github: "https://github.com/patil-komal/WearWell",
    live: "#",
  },
  {
    title: "Day Dream Cafe",
    desc: "cafe website where you can order food make payment and easy to aceess",
    tech: ["JavaScript", "reactjs","bootstrape css", "node.js"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-950 border border-white/10 rounded-2xl p-6 hover:scale-105 transition"
            >

              {/* Project Title */}
              <h3 className="text-xl font-bold text-violet-400">
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
                    className="text-xs bg-slate-800 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href={project.live}
                  className="px-4 py-2 text-sm bg-violet-600 rounded-lg hover:bg-violet-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="px-4 py-2 text-sm border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
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