import { useMemo } from "react";
import "./Hero.css";
import profilePhoto from "../assets/2.jpeg";

function Hero() {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-left">

        <p className="hero-greeting">
          {greeting} 👋
        </p>

        <h1>
          Hi, I'm <span>Arnav Jhawar</span>
        </h1>

        <h2>Web Developer</h2>

        <p className="hero-description">
        I am a B.Tech student specializing in Artificial Intelligence and Machine Learning with a passion for Web Development and 
        Software Engineering. I build responsive, user-friendly web applications using HTML, CSS, JavaScript, React, Python, and C. 
        Passionate about learning new technologies, I enjoy solving real-world problems and creating innovative digital solutions through 
        clean, efficient, and scalable code.

        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>

        </div>
      </div>

      <div className="hero-right">
        <img
          src={profilePhoto}
          alt="Arnav Jhawar"
        />
      </div>
    </section>
  );
}

export default Hero;