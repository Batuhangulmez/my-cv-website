import Header from "./components/header/Header";
import "./App.css";
import Main from "./components/main/Main";
import { useRef, useState } from "react";

function App() {
  const myRef = useRef(null);

  const refClass = {
    profileRef: useRef(null),
    contactRef: useRef(null),
    educationRef: useRef(null),
    skillsRef: useRef(null),
    experienceRef: useRef(null),
  };
  const executeScroll = (currentRef) => currentRef.current.scrollIntoView();
  return (
    <>
      <Header myRef={refClass} executeScroll={executeScroll} />
      <Main refClass={refClass} />
    </>
  );
}

export default App;
