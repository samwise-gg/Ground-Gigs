import { motion } from 'framer-motion'
const services = [
  {
    icon: "🌐",
    title: "Custom Websites",
    desc: "Unique websites tailored to your brand and goals."
  },
  {
    icon: "⚡",
    title: "Responsive Design",
    desc: "Looks great on any device or screen size."
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    desc: "Online stores designed for growth and conversions."
  },
]

const Services = () => {
  return (
    <section className="py-20 px-6 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-400 text-sm font-bold uppercase mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              className="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-blue-500/30 transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Services
