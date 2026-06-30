import { motion } from "framer-motion";

const education = [
  {
    year: "2024 - 2026",
    degree: "Master of Computer Applications (MCA)",
    place: "Dr D Y patil technical campus varale talegaon pune ",
  },
  {
    year: "2021 - 2024",
    degree: "Bachelor of Computer Applications (BCA)",
    place: "Udhana citizen commerce college surat",
  },
  {
    year: "2021",
    degree: "Higher Secondary (12th)",
    place: "Chhatrapati shivaji high school udhana surat",
  },
  {
    year: "2019",
    degree: " SSC (10th)",
    place: "Suman high school 06 udhana surat",
  },
];

const Education = () => {
  return (
    <section className="py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l border-violet-500 ml-6">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-10 ml-6"
            >

              {/* Dot */}
              <span className="absolute -left-2 w-4 h-4 bg-violet-500 rounded-full"></span>

              <h3 className="text-xl font-semibold text-white">
                {item.degree}
              </h3>

              <p className="text-cyan-400 text-sm">{item.year}</p>

              <p className="text-gray-400 text-sm mt-1">
                {item.place}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Education;