export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-400">
          Mayura
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

      </div>
    </nav>
  );
}