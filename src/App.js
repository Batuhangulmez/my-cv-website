import Header from "./components/header/Header";
import "./App.css";
import Main from "./components/main/Main";
import { useRef } from "react";

function App() {
  const refClass = {
    aboutRef: useRef(null),
    contactRef: useRef(null),
    educationRef: useRef(null),
    skillsRef: useRef(null),
    experienceRef: useRef(null),
    profileRef: useRef(null),
  };

  const executeScroll = (currentRef) => currentRef.current.scrollIntoView();

  return (
    <>
      <Header refClass={refClass} executeScroll={executeScroll} />
      <Main refClass={refClass} />
    </>
  );
}

export default App;
