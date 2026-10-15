import { Briefcase, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar2 = () => {


  return (
    <nav className="absolute top-0 w-full flex items-center justify-between px-6 md:px-12 py-6 text-white z-70">
      <div className="flex items-center gap-2 font-bold text-2xl">
        <Briefcase size={28} />
        <span>QuickStay</span>
      </div>
      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:text-blue-200">
          Home
        </Link>
        <Link to="/roomInfo" className="hover:text-blue-200" >
          Hotels
        </Link>
        <a href="/rooms" className="hover:text-blue-200">
          Guesthouse
        </a>
        <a href="#" className="hover:text-blue-200">
          About
        </a>
      </div>
      <div className="flex items-center gap-6">
        <Search className="w-5 h-5 cursor-pointer hover:text-blue-200" />
        <User className="w-5 h-5 cursor-pointer hover:text-blue-200" />
        <button className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-slate-800 transition">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
