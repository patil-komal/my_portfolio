import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    desc: "Responsive and modern websites using React.js and Tailwind CSS.",
  },
  {
    title: "UI Development",
    desc: "Clean and interactive user interfaces with smooth animations.",
  },
  {
    title: "Website Maintenance",
    desc: "Bug fixing, updates and performance optimization of websites.",
  },
];

const Services = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
        >
          My Services
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                group
                bg-slate-900/60
                border border-white/10
                rounded-2xl
                p-6 sm:p-7 lg:p-8
                shadow-lg
                hover:-translate-y-2
                hover:border-violet-500/40
                transition-all duration-300
              "
            >
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-violet-400 group-hover:text-violet-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-3 text-sm sm:text-base leading-6">
                {service.desc}
              </p>

              {/* Accent line */}
              <div className="mt-5 w-12 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full opacity-70 group-hover:w-20 transition-all duration-300"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;