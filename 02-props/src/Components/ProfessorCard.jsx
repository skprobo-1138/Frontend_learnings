import { useState } from "react";
import "./ProfessorCard.css";

const ProfessorCard = ({
  name,
  image,
  email,
  department,
  specialization,
  researchAreas = [],
  profileLink,
  scholarLink,
  linkedIn,
  meetingLink,
}) => {
  const [showBio, setShowBio] = useState(false);

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="prof-card">
      <img src={image} alt={name} className="prof-img" />

      <h2 className="prof-name">{name}</h2>
      <p className="prof-role">{department}</p>
      <p className="prof-spec">{specialization}</p>

      {/* Research Tags */}
      <div className="tags-container">
        {researchAreas.map((area, index) => (
          <span key={index} className="tag">
            {area}
          </span>
        ))}
      </div>

      {/* Collapsible Bio */}
      <button className="toggle-bio-btn" onClick={() => setShowBio(!showBio)}>
        {showBio ? "Hide Bio ▲" : "Show Bio ▼"}
      </button>

      {showBio && (
        <p className="prof-bio">
          {name} is a professor in the {department} department specializing in{" "}
          {specialization}. Their research spans {researchAreas.join(", ")}.
        </p>
      )}

      {/* Action Buttons */}
      <div className="btn-group">
        <button className="email-btn" onClick={handleEmailClick}>
          Email
        </button>

        {profileLink && (
          <a href={profileLink} target="_blank" className="view-btn">
            View Profile
          </a>
        )}

        {meetingLink && (
          <a href={meetingLink} target="_blank" className="meet-btn">
            Book Meeting
          </a>
        )}
      </div>

      {/* Social Links */}
      <div className="social-links">
        {scholarLink && (
          <a href={scholarLink} target="_blank">
            📚
          </a>
        )}
        {linkedIn && (
          <a href={linkedIn} target="_blank">
            🔗
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfessorCard;
