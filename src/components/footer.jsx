import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer className="w-full bg-[#1a1d4a] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/assets/home/logo.png" alt="DeepVision Logo" className="h-24 w-auto mb-2" />
            <p className="text-white text-2xl font-bold tracking-wider">DeepVision</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:col-span-2">
            <nav className="flex flex-wrap justify-center gap-8 mb-8">
              <Link to="/about" className="text-white hover:text-blue-300 transition font-medium">
                About us
              </Link>
              <Link to="/" className="text-white hover:text-blue-300 transition font-medium">
                Home
              </Link>
              <Link to="/detection" className="text-white hover:text-blue-300 transition font-medium">
                Detection Lab
              </Link>
              <Link to="/feedback" className="text-white hover:text-blue-300 transition font-medium">
                Feedback
              </Link>
              <Link to="/about" className="text-white hover:text-blue-300 transition font-medium">
                About us
              </Link>
            </nav>

            {/* Divider */}
            <div className="w-full max-w-2xl h-px bg-white/30 mb-8"></div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 bg-[#252a5c] rounded-lg flex items-center justify-center hover:bg-[#2f3668] transition">
                <span className="text-white text-xl">🌐</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#252a5c] rounded-lg flex items-center justify-center hover:bg-[#2f3668] transition">
                <span className="text-white text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#252a5c] rounded-lg flex items-center justify-center hover:bg-[#2f3668] transition">
                <span className="text-white text-xl">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#252a5c] rounded-lg flex items-center justify-center hover:bg-[#2f3668] transition">
                <span className="text-white text-xl">✉</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;