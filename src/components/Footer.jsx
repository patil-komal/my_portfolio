import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Name */}
        <h2 className="text-2xl font-bold text-violet-400">
          Komal Patil
        </h2>

        <p className="text-gray-400 mt-2">
          Frontend Developer | React.js Developer
        </p>

        {/* Social */}
        <div className="flex justify-center gap-6 mt-6 text-xl">
          <a href="https://github.com" className="hover:text-violet-400">
            <FaGithub />
          </a>

          <a href="https://linkedin.com" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>

          <a href="mailto:komupatil814@gmail.com" className="hover:text-pink-400">
            <FaEnvelope />
          </a>
        </div>

        {/* Bottom text */}
        <p className="text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;