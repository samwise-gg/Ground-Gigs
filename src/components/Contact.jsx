import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-blue-400 text-sm font-semibold uppercase mb-4">Contact Us</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Let’s discuss your project</h3>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Get in Touch
        </button>
      </motion.div>
    </section>
  )
}
export default Contact
