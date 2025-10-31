import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Particles } from "react-tsparticles";

export default function ParticlesBG() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: { color: "transparent" },
        particles: {
          color: { value: ["#00BFFF", "#00FFFF", "#FF005C"] },
          move: { enable: true, speed: 1 },
          number: { value: 60 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            color: "#00FFFF",
            distance: 150,
            opacity: 0.2,
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
