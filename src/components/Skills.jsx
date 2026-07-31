import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Python", level: 80 },
    { name: "C", level: 85 },
    { name: "SQL", level: 80 },
    { name: "Git & GitHub", level: 85 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <p className="skills-subtitle">
        Here are the technologies I use to build responsive and modern web applications.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;