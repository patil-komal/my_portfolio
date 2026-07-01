import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_745t0a1",
        "template_c99bxjc",
        form.current,
        "qHHR07b2U1jqPME-V"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-violet-400">
              Let’s build something amazing 🚀
            </h3>

            <p className="text-gray-400 mt-4 leading-7 text-sm sm:text-base">
              I’m available for freelance work and job opportunities.
              Feel free to contact me for React development, UI design or collaboration.
            </p>

            <div className="mt-8 space-y-3 text-gray-300 text-sm sm:text-base">
              <p>📧 komupatil814@gmail.com</p>
              <p>📍 India</p>
              <p>💼 Open for Freelance / Internship</p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="
              bg-slate-900/60
              border border-white/10
              rounded-2xl
              p-5 sm:p-6 lg:p-8
              shadow-lg
            "
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="
                w-full
                p-3 sm:p-4
                mb-4
                bg-slate-800
                border border-white/10
                rounded-lg
                outline-none
                focus:border-violet-500
                text-sm sm:text-base
              "
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="
                w-full
                p-3 sm:p-4
                mb-4
                bg-slate-800
                border border-white/10
                rounded-lg
                outline-none
                focus:border-violet-500
                text-sm sm:text-base
              "
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="
                w-full
                p-3 sm:p-4
                mb-4
                bg-slate-800
                border border-white/10
                rounded-lg
                outline-none
                focus:border-violet-500
                text-sm sm:text-base
              "
              required
            ></textarea>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-400 mb-3 text-sm">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 mb-3 text-sm">
                ❌ Something went wrong. Try again.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-3 sm:py-4
                bg-violet-600
                hover:bg-violet-700
                rounded-lg
                transition
                text-sm sm:text-base
                font-medium
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;