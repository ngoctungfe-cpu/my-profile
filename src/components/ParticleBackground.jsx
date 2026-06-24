import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },

        particles: {
          number: {
            value: 60,
          },

          size: {
            value: 2,
          },

          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
}