import React, { useState } from "react";
import ScrollScene from "../components/ScrollScene";
import handshake from "../assets/scenes/handshake.png";
import WireframeAnimation from "../components/WireFrameAnimation";

export default function Services() {
  // Scene progress tracking
  const [progressMap, setProgressMap] = useState({});
  const handleProgress = (id, p) => setProgressMap((m) => ({ ...m, [id]: p }));
  // Determine active scene
  const activeEntry =
    Object.entries(progressMap).find(([, p]) => p > 0.05 && p < 0.95) || [];
  const [activeId, activeProgress] = activeEntry;
  return (
    <div>
      {/* Top spacer: initial viewport-height */}
      <div style={{ height: "100vh" }} />
      {/* Scrollytelling Scene */}
      <ScrollScene
        id='scene1'
        onProgress={handleProgress}
        // height=''
        imageSrc={handshake}
        title='It all starts with a conversation'
        description='We begin by understanding your vision, your goals, and your audience.'
        // imageStyle={{}}
        // titleStyle={{}}
        // descStyle={{}}
      />
      <ScrollScene
        id='scene2'
        onProgress={handleProgress}
        // height=''
        customComponent={<WireframeAnimation />}
        title='Wireframing example'
        description='We carefully craft and plan out the vision for you site'
        // imageStyle={{}}
        // titleStyle={{}}
        // descStyle={{}}
      />
      <ScrollScene
        id='scene3'
        onProgress={handleProgress}
        // height=''
        imageSrc={handshake}
        title='It all starts with a conversation'
        description='We begin by understanding your vision, your goals, and your audience.'
        // imageStyle={{}}
        // titleStyle={{}}
        // descStyle={{}}
      />
      <ScrollScene
        id='scene4'
        onProgress={handleProgress}
        // height=''
        imageSrc={handshake}
        title='It all starts with a conversation'
        description='We begin by understanding your vision, your goals, and your audience.'
        // imageStyle={{}}
        // titleStyle={{}}
        // descStyle={{}}
      />
      <ScrollScene
        id='scene5'
        onProgress={handleProgress}
        // height=''
        imageSrc={handshake}
        title='It all starts with a conversation'
        description='We begin by understanding your vision, your goals, and your audience.'
        // imageStyle={{}}
        // titleStyle={{}}
        // descStyle={{}}
      />
      <ScrollScene
        id='scene6'
        onProgress={handleProgress}
        // height=''
        imageSrc={handshake}
        title='It all starts with a conversation'
        description='We begin by understanding your vision, your goals, and your audience.'
        // imageStyle={{}}
        // titleStyle={{}}
        // descStyle={{}}
      />
      {/* Bottom spacer: extra scroll length */}
      <div style={{ height: "200vh" }} />
      {/* Dynamic Debug Overlay */}
      <div
        style={{
          position: "fixed",
          textAlign: "center",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(29, 28, 28, 0.33)",
          color: "#fff",
          border: "2px rgba(29, 28, 28) solid",
          padding: "24px 48px",
          pointerEvents: "none",
          fontFamily: "sans-serif",
          fontSize: "0.875rem",
        }}
      >
        {activeId || "none"} <br /> <br /> Progress:{" "}
        {(activeProgress || 0).toFixed(2)}
      </div>
    </div>
  );
}
