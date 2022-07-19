import React from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Profile from "./Profile";
import Skills from "./Skills";

const Main = ({ refClass }) => {
  return (
    <main className="l-main bd-container">
      <div className="side">
        <div className="a-side">
          <Education educationRef={refClass.educationRef} />

          <Contact contactRef={refClass.contactRef} />
        </div>
        <div className="b-side">
          <Profile profileRef={refClass.profileRef} />

          <Experience experienceRef={refClass.experienceRef} />

          <Skills skillsRef={refClass.skillsRef} />
        </div>
      </div>
    </main>
  );
};

export default Main;
