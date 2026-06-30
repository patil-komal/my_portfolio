import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_745t0a1",
        "template_c99bxjc",
        form.current,
        "qHHR07b2U1jqPME-V"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold text-violet-400">
              Let's talk about your project 👋
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              I’m available for freelance work and job opportunities.
              Feel free to contact me for React development projects,
              UI design or collaboration.
            </p>

            <div className="mt-8 space-y-3 text-gray-300">
              <p>📧 Email: komal@example.com</p>
              <p>📍 Location: India</p>
              <p>💼 Open for Freelance</p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900 p-8 rounded-2xl border border-white/10"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-slate-800 rounded-lg outline-none"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-slate-800 rounded-lg outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 mb-4 bg-slate-800 rounded-lg outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-violet-600 hover:bg-violet-700 rounded-lg transition"
            >
              Send Message 🚀
            </button>
          </motion.form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12 text-gray-300">
          <a href="https://github.com" className="hover:text-violet-400">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-cyan-400">
            LinkedIn
          </a>
          <a href="mailto:komupatil814@gmail.com" className="hover:text-pink-400">
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;