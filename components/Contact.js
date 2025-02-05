export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">Contact Us</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
  