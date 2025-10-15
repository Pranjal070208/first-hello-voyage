import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833]">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-flow animate-bounce-in">404</h1>
        <p className="mb-6 md:mb-8 text-xl md:text-2xl text-gray-200 animate-fade-up stagger-1">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block px-8 py-4 rounded-full font-semibold text-lg text-gray-900 bg-gradient-flow shadow-lg hover:shadow-[0_0_25px_rgba(255,255,200,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-zoom-in stagger-2"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
