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
    <section className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My Services
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-violet-400">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-6">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;