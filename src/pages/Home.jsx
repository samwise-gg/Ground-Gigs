import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ServicesCards from "../components/ServicesCards";

export default function Home() {
  return (
    <>
      <Hero />
      <section className='text-center px-6 py-20 max-w-3xl mx-auto'>
        <h2 className='text-4xl font-extrabold text-blue-600 mb-4'>
          Your Website, Done Right
        </h2>
        <p className='text-lg text-gray-300 mb-8'>
          Ground Gigs builds sleek, modern websites for small businesses. Fast,
          responsive, and built to convert.
        </p>
        <Link to='/contact'>
          <button
            aria-label='Contact Ground Gigs'
            className='bg-blue-700 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition'
          >
            Get Started
          </button>
        </Link>
      </section>
      <ServicesCards />
      <div className='mb-24'></div>
    </>
  );
}
