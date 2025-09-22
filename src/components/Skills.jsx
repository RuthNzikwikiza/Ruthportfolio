import React from "react";

const technicalSkills = [
  "HTML & CSS",
  "JavaScript (ES6+)",
  "React",
  "Python",
  "Django",
  "REST API Integration",
  "Responsive Design"
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Adaptability",
  "Critical Thinking"
];

const toolsPlatforms = [
  "Git & GitHub",
  "VSCode",
  "Postman",
  "Render / Netlify / Vercel"
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <p className="skills-intro">
        Here are the skills I've developed through learning, building projects and
        collaborating with others. I continually strive to improve in technical areas,
        strengthen soft skills and master the tools and platforms used in real-world projects.
      </p>

      <div className="skills-category">
        <h3>Technical Skills</h3>
        <p className="skills-paragraph">{technicalSkills.join(", ")}.</p>
      </div>

      <div className="skills-category">
        <h3>Soft Skills</h3>
        <p className="skills-paragraph">{softSkills.join(", ")}.</p>
      </div>

      <div className="skills-category">
        <h3>Tools & Platforms</h3>
        <p className="skills-paragraph">{toolsPlatforms.join(", ")}.</p>
      </div>
    </section>
  );
}
