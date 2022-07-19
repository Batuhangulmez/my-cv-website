import React from "react";

const Skills = () => {
  return (
    <section className="skills section">
      <h2 className="section-title">BECERİLER</h2>
      <div className="skills-content bd-grid">
        <ul className="skills-data">
          <li className="skills-name">
            <span className="skills-circle"></span>HTML/CSS/JavaScrpit
          </li>
          <li className="skills-name">
            <span className="skills-circle"></span>ReactJS/React-native/NodeJS
          </li>
        </ul>
        <ul className="skills-data">
          <li className="skills-name">
            <span className="skills-circle"></span>Git/npm/Webpack
          </li>
          <li className="skills-name">
            <span className="skills-circle"></span>RESTful API/JWT
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
