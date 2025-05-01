import heroImage from "../assets/hero-notext2.jpg";
import mobileHeroImage from "../assets/mobile-hero.jpg";

const Hero = () => {
  return (
    <>
      <section
        className='w-full h-screen bg-cover bg-center flex items-center -mt-60 sm:block hidden'
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className='max-w-6xl px-6 text-white mx-[2%] md:ml-[10%] sm:ml-[5%] sm:pt-[24rem] lg:pt-[28rem] -pt-40'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg'>
            Digital Solutions <br /> for Your Business
          </h1>
          <p className='mt-4 text-lg md:text-xl text-textSecondary max-w-xl drop-shadow-md'>
            Creating custom websites to grow your online presence
          </p>
        </div>
      </section>
      <section
        className='w-full h-screen bg-cover bg-center flex items-center -mt-[15%] sm:hidden block '
        style={{ backgroundImage: `url(${mobileHeroImage})` }}
      >
        <div className='max-w-6xl px-6 text-white mx-auto -mt-[20rem]'>
          <h1 className='text-4xl text-center md:text-6xl font-bold leading-tight drop-shadow-lg mt-[115px]'>
            Digital Solutions <br /> for Your Business
          </h1>
          <p className='mt-4 text-lg text-center md:text-xl text-textSecondary max-w-xl drop-shadow-md'>
            Creating custom websites to grow your online presence
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
