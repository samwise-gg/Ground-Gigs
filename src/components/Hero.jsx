import heroImage from "../assets/hero-notext2.jpg";
import mobileHeroImage from "../assets/mobile-hero.jpg";

const Hero = () => {
  return (
    <>
      {/* Desktop Hero */}
      <section
        className='hidden md:block w-full h-[70vh] md:h-screen bg-cover bg-center text-white'
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className='flex flex-col justify-center h-full px-6 md:pl-[10%] max-w-6xl mx-auto'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg'>
            Digital Solutions <br /> for Your Business
          </h1>
          <p className='mt-4 text-lg md:text-xl text-textSecondary max-w-xl drop-shadow-md'>
            Creating custom websites to grow your online presence
          </p>
        </div>
      </section>

      {/* Mobile Hero */}
      <section
        className='md:hidden w-full h-screen bg-cover bg-center text-white'
        style={{ backgroundImage: `url(${mobileHeroImage})` }}
      >
        <div className='flex flex-col justify-start items-center text-center h-full pt-48 px-6 max-w-xl mx-auto'>
          <h1 className='text-4xl font-bold leading-tight drop-shadow-lg'>
            Digital Solutions <br /> for Your Business
          </h1>
          <p className='mt-4 text-lg text-textSecondary drop-shadow-md'>
            Creating custom websites to grow your online presence
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
