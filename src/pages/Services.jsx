import ScrollScene from "../components/ScrollScene";
import handshake from "../assets/scenes/handshake.gif";
import wireframe from "../assets/scenes/wireframe.gif";
import coding from "../assets/scenes/coding.gif";

export default function Services() {
  return (
    <div className='relative'>
      {/* Fixed Background Layer */}
      <div className='fixed inset-0 z-0'>
        <div className='w-full h-full bg-gradient-to-b from-[#00001f] to-[#0d1835] absolute inset-0'></div>
      </div>

      {/* Scrollable Foreground Scenes */}
      <div className='relative z-10 text-white'>
        <ScrollScene
          title='It all starts with a conversation'
          description='We begin by understanding your vision, your goals, and your audience.'
          image={handshake}
        />
        <ScrollScene
          title='We bring ideas to life'
          description='Our team translates your goals into clean, strategic wireframes and layouts.'
          image={wireframe}
        />
        <ScrollScene
          title='We build and launch'
          description='Through design, code, and optimization, we launch a site that grows your business.'
          image={coding}
        />
      </div>
    </div>
  );
}
