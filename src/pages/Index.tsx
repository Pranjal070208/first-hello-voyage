// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#020617] via-[#08122B] to-[#0A1833]">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-flow animate-fade-down">
          Welcome to Your Blank App
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 animate-fade-up stagger-1">
          Start building your amazing project here!
        </p>
        <div className="mt-8 flex justify-center gap-4 animate-zoom-in stagger-2">
          <div className="w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse-glow"></div>
          <div className="w-16 h-16 bg-yellow-300/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: "-1s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
