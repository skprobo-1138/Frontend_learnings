import UserCard from "./Components/UserCard";
import ProfessorCard from "./Components/ProfessorCard";
const professors = [
  {
    name: "Dr. Ananya Mehta",
    email: "ananya.mehta@univ.edu",
    department: "Information Technology",
    specialization: "Cybersecurity",
    researchAreas: ["Network Security", "Blockchain Security", "Cryptography"],
    image: "data:image/jpeg;base64,...",
  },
  {
    name: "Dr. Vivek Rangarajan",
    email: "vivek.r@univ.edu",
    department: "Mechanical Engineering",
    specialization: "Thermodynamics",
    researchAreas: ["Heat Transfer", "Fluid Mechanics", "Renewable Energy"],
    image: "data:image/jpeg;base64,...",
  },
  {
    name: "Dr. Sophia Fernandes",
    email: "sophia.f@univ.edu",
    department: "Computer Science",
    specialization: "Data Science",
    researchAreas: ["Big Data", "Predictive Analytics", "Visualization"],
    image: "data:image/jpeg;base64,...",
  },
  {
    name: "Dr. Rohan Iyer",
    email: "rohan.iyer@univ.edu",
    department: "Electronics & Communication",
    specialization: "Signal Processing",
    researchAreas: ["Image Processing", "Radar Systems", "DSP"],
    image: "data:image/jpeg;base64,...",
  },
  {
    name: "Dr. Kavita Deshpande",
    email: "kavita.d@univ.edu",
    department: "Artificial Intelligence",
    specialization: "Computer Vision",
    researchAreas: ["Object Detection", "3D Vision", "Medical Imaging"],
    image: "data:image/jpeg;base64,...",
  },
  {
    name: "Dr. Arjun Banerjee",
    email: "arjun.banerjee@univ.edu",
    department: "Electrical Engineering",
    specialization: "Power Systems",
    researchAreas: ["Smart Grid", "Power Electronics", "High Voltage Systems"],
    image: "data:image/jpeg;base64,...",
  },
  {
    name: "Dr. Neha Kapoor",
    email: "neha.kapoor@univ.edu",
    department: "Biotechnology",
    specialization: "Genomics",
    researchAreas: ["DNA Sequencing", "Bioinformatics", "Genetic Engineering"],
    image: "data:image/jpeg;base64,...",
  },
  {
    name: "Dr. Sameer Khan",
    email: "sameer.khan@univ.edu",
    department: "Mathematics",
    specialization: "Applied Mathematics",
    researchAreas: ["Optimization", "Statistics", "Game Theory"],
    image: "data:image/jpeg;base64,...",
  },
  {
    name: "Dr. Aditi Joshi",
    email: "aditi.joshi@univ.edu",
    department: "Physics",
    specialization: "Quantum Mechanics",
    researchAreas: ["Quantum Computing", "Particle Physics", "Nanophysics"],
    image: "data:image/jpeg;base64,...",
  },
  {
    name: "Dr. Manish Agarwal",
    email: "manish.a@univ.edu",
    department: "Management Studies",
    specialization: "Business Analytics",
    researchAreas: [
      "Supply Chain Analytics",
      "Marketing Analytics",
      "AI in Business",
    ],
    image: "data:image/jpeg;base64,...",
  },  
];

function App() {  
  return (
    <div> 
      
      <div className="prof-container">
        {professors.map((prof, index) => (
          console.log(prof),
          <ProfessorCard key={index} {...prof} />
        ))}
      </div>
    </div>
  );
}

export default App;
