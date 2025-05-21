// components/ServicesCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    title: "Custom Web Design",
    description: "Tailored designs that reflect your brand identity.",
    icon: "🎨",
  },
  {
    title: "Responsive Development",
    description: "Websites that look great on all devices.",
    icon: "📱",
  },
  {
    title: "SEO Optimization",
    description: "Improve your site’s visibility on search engines.",
    icon: "🔍",
  },
  {
    title: "Performance Tuning",
    description: "Fast-loading websites for better user experience.",
    icon: "⚡",
  },
  {
    title: "Accessibility Compliance",
    description: "Inclusive designs accessible to all users.",
    icon: "♿",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support to keep your site up-to-date.",
    icon: "🛠️",
  },
];

export default function ServicesCarousel() {
  return (
    <section className='w-full py-12 flex justify-center items-center bg-transparent'>
      <div className='w-full max-w-5xl h-[60vh] bg-transparent rounded-2xl shadow-lg p-12'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          className='w-full h-full'
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className='h-full flex flex-col justify-center items-center text-center bg-blue-900 sm:rounded-xl p-8'>
                <div className='text-6xl mb-6'>{service.icon}</div>
                <h3 className='text-3xl font-bold text-gray-800 mb-4'>
                  {service.title}
                </h3>
                <p className='text-lg text-gray-600 max-w-xl'>
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
