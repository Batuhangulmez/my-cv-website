import React from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import About from "./About";
import Skills from "./Skills";
import ProfileImg from "../profile/ProfileImg";
import ProfileTitle from "../profile/ProfileTitle";

const Main = ({ refClass }) => {
  return (
    <main className="l-main bd-container">
      <div className="side">
        <div className="a-side">
          <ProfileImg profileRef={refClass.profileRef} />

          <Education educationRef={refClass.educationRef} />

          <Contact contactRef={refClass.contactRef} />
        </div>
        <div className="b-side">
          <ProfileTitle />

          <About aboutRef={refClass.aboutRef} />

          <Experience experienceRef={refClass.experienceRef} />

          <Skills skillsRef={refClass.skillsRef} />
        </div>
      </div>
    </main>
  );
};

export default Main;
