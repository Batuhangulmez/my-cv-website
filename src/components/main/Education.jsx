import React, { useRef } from "react";

const Education = ({ educationRef }) => {
  return (
    <section ref={educationRef} className="education section">
      <h2 className="section-title">EĞİTİM</h2>
      <div className="education-container bd-grid">
        <div className="education-content">
          <div className="education-data bd-grid">
            <h3 className="education-title">Bilgisayar Mühendisliği</h3>
            <span className="education-studies">Sakarya Üniversitesi</span>
            <span className="education-year">2018 - 2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
