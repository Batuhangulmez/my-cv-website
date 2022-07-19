import React from "react";

const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="about section">
      <h2 className="section-title">HAKKIMDA</h2>
      <p className="about-description">
        React ile Web uygulamaları tasarlayıp geliştiriyorum. Yazdığım kodların
        sade, dinamik ve verimli olmasına Dikkat eden, takım çalışmasına yatkın
        biriyim. Kendimi geliştirmeye özen gösteriyorum.
      </p>
    </section>
  );
};

export default About;
