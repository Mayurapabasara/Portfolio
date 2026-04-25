import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      className="absolute inset-0 -z-10"
      options={{
        background: { color: { value: "#020617" } },
        particles: {
          number: { value: 40 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
          links: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.3,
          },
        },
      }}
    />
  );
}