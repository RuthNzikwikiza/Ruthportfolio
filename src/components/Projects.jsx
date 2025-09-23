import React from "react";

const projects = [
  {
    title: "Zoho Software Company",
    repo: "https://github.com/Latifah-Umunyana/Zoho-Software-Company.git",
    live: "https://zoho-software-company.vercel.app/",
    img: "/assets/zoho.PNG",
    tech: "HTML, CSS",
  },
  {
    title: "Simple Task Manager",
    repo: "https://github.com/RuthNzikwikiza/Drag-and-drop-app",
    live: "https://drag-and-drop-app-nu.vercel.app/",
    img: "/assets/taskmanager.PNG",
    tech: "HTML, CSS, JS",
  },
  {
    title: "Movie App",
    repo: "https://github.com/RuthNzikwikiza/movie.git",
    live: "https://movie-orcin-psi.vercel.app/",
    img: "/assets/movie.PNG",
    tech: "React, TMDB API, CSS",
  },
  {
    title: "AgriPrice",
    repo: "https://github.com/Nice-91/agriprice-info-site.git",
    live: "https://agriprice-info-site.vercel.app/",
    img: "/assets/agriprice.PNG",
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
