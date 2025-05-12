import { motion } from "framer-motion";

export default function ScrollScene({ title, description, image }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 sm:py-32 relative'
    >
      <img
        src={image}
        alt={title}
        className='w-full max-w-md md:max-w-xl mb-10 object-contain rounded-2xl shadow-2xl'
      />
      <h2 className='text-4xl md:text-5xl font-extrabold text-blue-500 mb-4'>
        {title}
      </h2>
      <p className='text-gray-300 max-w-2xl text-lg'>{description}</p>
    </motion.section>
  );
}
