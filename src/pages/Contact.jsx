export default function Contact() {
  return (
    <div className="px-6 py-12 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-xl bg-[#1a1a2e] text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl bg-[#1a1a2e] text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full p-3 rounded-xl bg-[#1a1a2e] text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-purple-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}