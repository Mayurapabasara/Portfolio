export default function Hero() {
  return (
    <section className="bg-[#f8f9fc] py-28 text-center">
      
      <p className="text-sm text-gray-500 mb-2">
        👋 Hello, I'm
      </p>

      <h1 className="text-5xl font-bold mb-4">
        Mayura Pabasara
      </h1>

      <h2 className="text-2xl text-gray-600 mb-6">
        Full Stack Developer
      </h2>

      <p className="max-w-xl mx-auto text-gray-500">
        Building scalable web applications with modern technologies.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80"
        >
          View Projects
        </a>

        <a
          href="/cv.pdf"
          className="px-6 py-3 border rounded-full hover:bg-black hover:text-white"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}