import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
         My name is <strong>Ruth Nzikwikiza</strong>, and I'm an software engineer
        dedicated to creating impactful digital solutions that solve real-world problems. I'm
        passionate about coding, learning new technologies and building projects that make
        life simpler, smarter and more enjoyable. Throughout my journey in tech, I've embraced
        challenges as opportunities to grow, constantly improving my skills in both frontend
        and backend development. I enjoy collaborating on innovative projects, experimenting
        with creative ideas and writing clean, efficient code that brings real value to
        people's lives. Every day, I strive to become a versatile full-stack engineer who
        contributes meaningfully to the tech community while continuing to learn, explore and
        turn ideas into practical, user-friendly digital experiences.
      </p>
       <a
        href="/assets/Ruth-Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="resume-btn"
      >
        View Resume
      </a>
    </section>
  );
}
