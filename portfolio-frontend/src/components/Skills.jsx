export default function Skills() {
  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-600">

          <div className="p-6 bg-white rounded-xl shadow-sm">React</div>
          <div className="p-6 bg-white rounded-xl shadow-sm">Spring Boot</div>
          <div className="p-6 bg-white rounded-xl shadow-sm">Node.js</div>
          <div className="p-6 bg-white rounded-xl shadow-sm">MySQL</div>

        </div>
      </div>
    </section>
  );
}