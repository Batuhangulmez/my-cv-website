import React, { useRef } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Profile from "./Profile";
import Skills from "./Skills";

const Main = () => {
  const myRef = useRef(null);
  const eS = () => myRef.current.scrollIntoView();
  return (
    <main className="l-main bd-container">
      <div className="side">
        <div className="a-side">
          <Education myRef={myRef} eS={eS} />

          <Contact myRef={myRef} eS={eS} />
        </div>
        <div className="b-side">
          <Profile />

          <Experience myRef={myRef} eS={eS} />

          <Skills />
        </div>
      </div>
    </main>
  );
};

export default Main;
