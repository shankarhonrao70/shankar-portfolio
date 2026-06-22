export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-20 max-w-5xl mx-auto text-white"
    >
      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-3 text-cyan-400">
        Get in Touch
      </h2>

      {/* TAGLINE */}
      <p className="text-gray-400 mb-10 max-w-2xl">
        Let’s build something amazing together — robotics, automation, or AI-driven systems.
        I’m always open to meaningful collaborations and innovative ideas.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* CONTACT INFO */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">
            Contact Information
          </h3>

          <div className="p-4 border border-white/10 rounded-xl bg-white/5">
         📧 Email:{" "}
         <a
          href="mailto:shankarhonrao70@gmail.com"
         className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_#22d3ee] transition"
         >
         shankarhonrao70@gmail.com
        </a>
        </div>

          <div className="p-4 border border-white/10 rounded-xl bg-white/5">
            📞 Phone: +91 9373171998
          </div>

          <div className="p-4 border border-white/10 rounded-xl bg-white/5">
            📍 Location:  Pune, India
          </div>
        </div>

        {/* MESSAGE FORM */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}