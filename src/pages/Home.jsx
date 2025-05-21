import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ServicesCards from "../components/WhyChooseUs";
import logo from "../assets/logo.jpg";
// import ServicesCarousel from "../components/ServicesCarousel";
import ServicesCarousel from "../components/OldServicesCarousel";
import TierPlans from "../components/TierPlans";

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
      <h2 className='text-[1.4rem] sm:text-[2.5rem] font-bold text-center mb-4 text-purple-300'>
        Explore the Possibilities
      </h2>
      <ServicesCarousel />
      <div className='mt-20 max-w-fit mx-auto group transition-all duration-300'>
        <img
          src={logo}
          alt='Ground Gigs'
          className='group transition-all duration-300 h-[6.5rem] group-hover:animate-spin-once  transition-transform duration-500 ease-in-out'
        />
      </div>
      <h2 className='text-center mt-10 mb-4 text-purple-300 text-[1.4rem] font-bold'>
        Why Choose Us?
      </h2>
      <ServicesCards />
      <TierPlans />
    </>
  );
}
