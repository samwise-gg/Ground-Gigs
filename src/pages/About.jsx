import HeroImage from "../assets/AboutpageHero-removebg-preview.png";

export default function About() {
  return (
    <div className="text-white min-h-screen bg-gradient-to-b from-[#00001f] to-[#22386e]">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 md:flex-row md:gap-12">
        {/* Left - Cartoon Image */}
        <div className="w-full md:w-1/2 flex justify-end">
          <img
            src={HeroImage}
            alt="Team of Developers"
            className="max-w-[750px] w-full h-auto"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left sm:pl-[4rem]">
          <h1 className="text-4xl font-extrabold mb-6 text-blue-400">Meet the Squad</h1>
          <p className="text-lg text-gray-300 max-w-md">
            A tight crew of creative builders — design-forward, code-savvy, and startup-minded.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3 text-center py-24 px-8">
        {/* You */}
        <div>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-700"></div>
          <h2 className="text-xl font-bold text-blue-300">Sam W.</h2>
          <p className="text-gray-400">Founder & Lead Developer</p>
          <p className="text-sm mt-2 text-gray-500">
            A full-stack engineer with a passion for clean code and building elegant solutions from the ground up.
          </p>
        </div>

        {/* UI/UX Designer */}
        <div>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-purple-700"></div>
          <h2 className="text-xl font-bold text-purple-300">Alex D.</h2>
          <p className="text-gray-400">UI/UX Designer</p>
          <p className="text-sm mt-2 text-gray-500">
            Transforms ideas into pixel-perfect interfaces, blending usability with aesthetics.
          </p>
        </div>

        {/* Content Strategist */}
        <div>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-pink-700"></div>
          <h2 className="text-xl font-bold text-pink-300">Taylor R.</h2>
          <p className="text-gray-400">Content Strategist</p>
          <p className="text-sm mt-2 text-gray-500">
            Shapes brand voice, writes engaging copy, and ensures every word supports your business goals.
          </p>
        </div>
      </section>
    </div>
  );
}
