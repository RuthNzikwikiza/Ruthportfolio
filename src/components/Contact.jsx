import React from "react";

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I'm always open to discuss new projects, opportunities or collaborations. 
        Feel free to reach out!
      </p>
      <p>Email: <a href="mailto:ruthnzikwikiza7@gmail.com">ruthnzikwikiza7@gmail.com</a></p>
      <p className="contact-links">
        <a href="https://github.com/ruth-nzikwikiza" target="_blank" rel="noreferrer">GitHub</a> |
        <a href="https://www.linkedin.com/in/ruth-nzikwikiza-67482536b/" target="_blank" rel="noreferrer"> LinkedIn</a>
      </p>
      <p className="footer-note">© {new Date().getFullYear()} Ruth Nzikwikiza | Built with ❤️ using React</p>
    </footer>
  );
}
