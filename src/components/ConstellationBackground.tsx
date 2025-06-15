import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ConstellationBackground: React.FC = () => {
  const particlesInit = async (engine: any) => {
    await loadLinksPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-20"
      options={{
        preset: "links",
        background: {
          color: "#000000",
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
          },
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          size: {
            value: 2,
            random: true,
          },
          opacity: {
            value: 0.3,
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ConstellationBackground;
