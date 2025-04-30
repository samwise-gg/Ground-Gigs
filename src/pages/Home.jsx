export default function Home() {
  return (
    <section className="text-center px-6 py-20 max-w-3xl mx-auto">
      <h2 className="text-4xl font-extrabold text-blue-400 mb-4">Your Website, Done Right</h2>
      <p className="text-lg text-gray-300 mb-8">
        Ground Gigs builds sleek, modern websites for small businesses. Fast, responsive, and built to convert.
      </p>
      <button className="bg-blue-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition">
        Get Started
      </button>
      <div className="mt-12">
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328b6b5b?auto=format&fit=crop&w=800&q=80"
          alt="Professional"
          className="mx-auto rounded-2xl shadow-lg w-full max-w-md"
        />
      </div>
    </section>
  );
}