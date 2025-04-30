import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <section className="px-6 py-20 bg-black text-white">
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Ground Gigs: Digital Solutions for Your Business
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            We build sleek, modern websites to help small businesses thrive online.
          </p>
        </div>
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <img src="https://t3.ftcdn.net/jpg/05/63/38/74/360_F_563387459_buRasD88E9uG4TVuTnRjvUpZRp4KMU7x.jpg" 
               alt="Developer at desk"
               className="rounded-xl shadow-lg" />
        </div>
      </motion.div>
    </section>
  )
}
export default Hero
