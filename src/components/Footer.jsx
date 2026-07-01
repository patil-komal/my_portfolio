import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Name */}
        <h2 className="text-xl sm:text-2xl font-bold text-violet-400">
          Komal Sonawane
        </h2>

        {/* Role */}
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Frontend Developer | React.js Developer
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-6">

          <a
            href="https://github.com/patil-komal"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-11 h-11 sm:w-12 sm:h-12
              flex items-center justify-center
              rounded-full
              bg-slate-800
              border border-white/10
              text-xl
              text-gray-300
              hover:text-violet-400
              hover:border-violet-500
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/komal-sonawane-104364376"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-11 h-11 sm:w-12 sm:h-12
              flex items-center justify-center
              rounded-full
              bg-slate-800
              border border-white/10
              text-xl
              text-gray-300
              hover:text-cyan-400
              hover:border-cyan-400
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:komupatil814@gmail.com"
            className="
              w-11 h-11 sm:w-12 sm:h-12
              flex items-center justify-center
              rounded-full
              bg-slate-800
              border border-white/10
              text-xl
              text-gray-300
              hover:text-pink-400
              hover:border-pink-400
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-violet-500/40 mx-auto mt-8 rounded-full"></div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-xs sm:text-sm mt-6">
          © {new Date().getFullYear()} Komal Sonawane. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;