import ScrollScene from "../components/ScrollScene";
import handshake from "../assets/scenes/handshake.png";
import wireframe from "../assets/scenes/wireframe.gif";
import coding from "../assets/scenes/coding.gif";
import deploy from "../assets/scenes/deploy.gif";
import grow from "../assets/scenes/grow.png";
import support from "../assets/scenes/support.gif";
import ServicesCards from "../components/ServicesCards";
import { motion } from "framer-motion";

export default function Services() {
  const fadeVariant = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1,
      },
    },
  };

  return (
    <div className='relative'>
      {/* Fixed Background Layer */}
      <div className='fixed inset-0 z-0'>
        <div className='w-full h-full bg-gradient-to-b from-[#00001f] to-[#0d1835] absolute inset-0'></div>
      </div>

      {/* Scrollable Foreground Scenes */}
      <div className='relative z-10 text-white pt-36'>
        <div className='pb-48 mb-40'>
          <ServicesCards />
        </div>

        {/* Scroll-animated Scene using motion.div */}
        <motion.div
          className='w-full flex justify-center items-center mb-60'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeVariant}
        >
          <ScrollScene
            title='It all starts with a conversation'
            description='We begin by understanding your vision, your goals, and your audience.'
            image={handshake}
          />
        </motion.div>

        <motion.div
          className='w-full flex justify-center items-center mb-60'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeVariant}
        >
          <ScrollScene
            title='We bring ideas to life'
            description='Our team translates your goals into clean, strategic wireframes and layouts.'
            image={wireframe}
          />
        </motion.div>

        <motion.div
          className='w-full flex justify-center items-center mb-60'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeVariant}
        >
          <ScrollScene
            title='We build and...'
            description='Through design, code, and optimization, we launch a site that grows your business.'
            image={coding}
          />
        </motion.div>

        <motion.div
          className='w-full flex justify-center items-center mb-60'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeVariant}
        >
          <ScrollScene
            title='Launch into the world'
            description='We handle deployment with care — fast, secure, and scalable from day one.'
            image={deploy}
          />
        </motion.div>

        <motion.div
          className='w-full flex justify-center items-center mb-60'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeVariant}
        >
          <ScrollScene
            title='Helping your business grow'
            description='After launch, we focus on performance, analytics, and growth strategy.'
            image={grow}
          />
        </motion.div>

        <motion.div
          className='w-full flex justify-center items-center mb-60'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeVariant}
        >
          <ScrollScene
            title='We’re here when you need us'
            description='Ongoing support and updates keep your digital presence evolving.'
            image={support}
          />
        </motion.div>
      </div>
    </div>
  );
}
