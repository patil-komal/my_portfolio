import { motion } from "framer-motion";

const education = [
  {
    year: "2024 - 2026",
    degree: "Master of Computer Applications (MCA)",
    place: "Dr D Y Patil Technical Campus, Varale Talegaon Pune",
  },
  {
    year: "2021 - 2024",
    degree: "Bachelor of Computer Applications (BCA)",
    place: "Udhana Citizen Commerce College, Surat",
  },
  {
    year: "2021",
    degree: "Higher Secondary (12th)",
    place: "Chhatrapati Shivaji High School, Udhana Surat",
  },
  {
    year: "2019",
    degree: "SSC (10th)",
    place: "Suman High School No. 6, Udhana Surat",
  },
];

const Education = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-violet-500/40 ml-3 sm:ml-6 lg:ml-10">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 sm:mb-12 ml-6 sm:ml-10 relative"
            >

              {/* Dot */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 bg-violet-500 rounded-full border-2 border-slate-900"></span>

              {/* Card */}
              <div className="
                bg-slate-950/60
                border border-white/10
                rounded-2xl
                p-5 sm:p-6 lg:p-7
                shadow-lg
                hover:-translate-y-1
                transition-all duration-300
              ">

                {/* Year */}
                <p className="text-sm text-cyan-400 font-medium">
                  {item.year}
                </p>

                {/* Degree */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">
                  {item.degree}
                </h3>

                {/* Place */}
                <p className="text-gray-400 text-sm sm:text-base mt-2 leading-6">
                  {item.place}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;