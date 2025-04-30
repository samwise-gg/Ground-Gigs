export default function Services() {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {['Web Design', 'Responsive Development', 'SEO Optimization'].map((service, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a2e] p-6 rounded-2xl shadow-md border border-purple-700"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-2">{service}</h3>
            <p className="text-gray-400 text-sm">
              We craft solutions tailored to your business goals — fast, responsive, and effective.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}