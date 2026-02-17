import React from "react";

const projects = [
  {
    title: "Live Pulse",
    repo: "https://github.com/RuthNzikwikiza/livepulse.git",
    live: "https://livepulse-3euk.vercel.app/",
    img: "/assets/livepulse.PNG",
    tech: "HTML, CSS, JS , NewsAPI integration",
  },
  {
    title: "Sky Buddy",
    repo: "https://github.com/RuthNzikwikiza/skybuddy.git",
    live: "https://skybuddy-iwgs.vercel.app/",
    img: "/assets/skybuddy.jpeg",
    tech: "HTML, CSS, JS , WeatherAPI integration",
  },
  {
    title: "Emmy's Portfolio",
    repo: "https://github.com/RuthNzikwikiza/Emmy-portfolio.git",
    live: "https://emmy-portfolio-smoky.vercel.app/",
    img: "/assets/emmy.jpeg",
    tech: "React, CSS",
  },
  {
    title: "Nagahire Fashion Hub",
    repo: "https://github.com/RuthNzikwikiza/Nagahire-FHF.git",
    live: "https://nagahire-fhf-wzoh.vercel.app/",
    img: "/assets/nagahire.jpeg",
    tech: "React, CSS, Python, Django",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <p className="projects-intro">
        Here are some of the projects I've built that showcase my growth and
        creativity as a software developer. Each project represents my dedication
        to solving problems through clean code, modern technologies and
        practical solutions.
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.img} alt={project.title} />
            <div className="project-card-top">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-small"
              >
                Live Demo
              </a>
            </div>
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <a href={project.repo} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
