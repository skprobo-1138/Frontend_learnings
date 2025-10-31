import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-glow mb-4">
        <ReactTyped
          strings={[
            "Engineer. Innovator. Crewmate.",
            "Building intelligent systems ⚙️",
            "Exploring the future of AI 🤖",
          ]}
          typeSpeed={50}
          backSpeed={25}
          loop
        />
      </h1>
      <p className="text-text-muted text-lg mt-2">
        React + Robotics + Among-Us Energy
      </p>
    </div>
  );
}
