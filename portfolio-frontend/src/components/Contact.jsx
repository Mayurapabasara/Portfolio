export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      
      <h2 className="text-4xl font-bold text-center mb-10">
        Get In Touch
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Info */}
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded-lg">Email: pabasara2523@gmail.com</div>
          <div className="bg-white/5 p-4 rounded-lg">Phone: 0717975625</div>
        </div>

        {/* Form */}
        <div className="bg-white/5 p-6 rounded-xl">
          <input placeholder="Name" className="w-full mb-3 p-3 bg-transparent border border-white/20 rounded"/>
          <input placeholder="Email" className="w-full mb-3 p-3 bg-transparent border border-white/20 rounded"/>
          <textarea placeholder="Message" className="w-full mb-3 p-3 bg-transparent border border-white/20 rounded"/>
          
          <button className="w-full py-3 bg-blue-600 rounded">
            Send Message
          </button>
        </div>

      </div>
    </section>
  );
}