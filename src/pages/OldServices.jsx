import ScrollScene from "../components/ScrollScene";
import handshake from "../assets/scenes/handshake.png";
import wireframe from "../assets/scenes/wireframe.gif";
import coding from "../assets/scenes/coding.gif";
import deploy from "../assets/scenes/deploy.gif";
import grow from "../assets/scenes/grow.png";
import support from "../assets/scenes/support.gif";
import ServicesCards from "../components/ServicesCards";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 25 });

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

        {/* Pinned ScrollScene with bidirectional fade */}
        <div className='relative min-h-[200vh]'>
          <div
            ref={ref}
            className='sticky top-1/2 -translate-y-1/2 h-screen flex items-center justify-center'
          >
            <motion.div
              style={{ y, opacity: smoothOpacity }}
              className='w-full will-change-transform'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ScrollScene
                title='It all starts with a conversation'
                description='We begin by understanding your vision, your goals, and your audience.'
                image={handshake}
              />
            </motion.div>
          </div>
        </div>

        <ScrollScene
          title='We bring ideas to life'
          description='Our team translates your goals into clean, strategic wireframes and layouts.'
          image={wireframe}
        />
        <ScrollScene
          title='We build and...'
          description='Through design, code, and optimization, we launch a site that grows your business.'
          image={coding}
        />
        <ScrollScene
          title='Launch into the world'
          description='We handle deployment with care — fast, secure, and scalable from day one.'
          image={deploy}
        />
        <ScrollScene
          title='Helping your business grow'
          description='After launch, we focus on performance, analytics, and growth strategy.'
          image={grow}
        />
        <ScrollScene
          title='We’re here when you need us'
          description='Ongoing support and updates keep your digital presence evolving.'
          image={support}
        />
      </div>
    </div>
  );
}
