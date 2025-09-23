import React from "react";
import profileImg from "/assets/ruth.PNG";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Hello, I'm <span>Ruth Nzikwikiza</span></h1>
          <p>
            I'm an software developer passionate about building
            practical and impactful digital solutions. I love coding, solving
            problems and creating apps that help people.
          </p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
        <div className="home-image">
          <img src={profileImg} alt="Ruth Nzikwikiza" />
        </div>
      </div>
    </section>
  );
}
