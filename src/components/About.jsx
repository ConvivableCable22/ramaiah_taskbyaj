import "./About.css";
import profilePhoto from "../assets/1.jpeg";

function About() {

  return (

    <section id="about" className="about-section">

      <h2>About Me</h2>


      <div className="about-content">


        <figure className="profile-figure">


          <img
            src={profilePhoto}
            alt="Arnav Jhawar Profile"
          />


          <figcaption>
            Arnav Jhawar - Web Developer
          </figcaption>


        </figure>



        <div className="about-text">


          <p>
I am a passionate Web Developer and AI/ML student who loves building modern, responsive web applications. Currently learning HTML, CSS, JavaScript, React, and Python.
          </p>


          <p>
            Currently I am learning HTML, CSS,
            JavaScript and React.
          </p>


        </div>


      </div>


    </section>

  );

}


export default About;