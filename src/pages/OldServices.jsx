import ScrollScene from "../components/ScrollScene";
import handshake from "../assets/scenes/handshake.gif";
import wireframe from "../assets/scenes/wireframe.gif";
import coding from "../assets/scenes/coding.gif";

export default function Services() {
  return (
    <div className='bg-[#0b0f19] text-white'>
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
  );
}
