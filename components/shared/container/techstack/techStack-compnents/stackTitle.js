const StackTitle = () => {
    return (
      <div className="relative">
        <h1
          className="flex items-center justify-center font-mono text-xl font-extrabold text-left text-[white] mb-4"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Skills
        </h1>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#865DFF] opacity-100 transition-opacity duration-300 glow-bar"></div>
      </div>
    );
  };
  
  export default StackTitle;
  