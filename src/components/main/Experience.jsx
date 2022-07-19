import React, { useRef } from "react";

const Experience = ({ experienceRef }) => {
  return (
    <section ref={experienceRef} className="experience section">
      <h2 className="section-title">DENEYİM</h2>
      <div className="experience-container bd-grid">
        <div className="experience-content">
          <div className="experience-time">
            <span className="experience-rounder"></span>
            <span className="experience-line"></span>
          </div>
          <div className="experience-side">
            <div className="experience-data bd-grid">
              <span className="experience-year">Haziran 2022</span>
              <span className="experience-company">
                Sakarya Teknokent Casemice
              </span>
            </div>
            <div className="experience-data bd-grid">
              <h3 className="experience-title"> Staj - Front End Developer</h3>
              <p className="experience-description">
                Api verilerine entegre dinamik yapılı proje geliştirme (ReactJS,
                RESTful, npm, webpack, styled-components, ...)
              </p>
            </div>
          </div>
        </div>
        <div className="experience-content">
          <div className="experience-time">
            <span className="experience-rounder"></span>
            <span className="experience-line"></span>
          </div>
          <div className="experience-side">
            <div className="experience-data bd-grid">
              <span className="experience-year">Mayıs 2021</span>
              <span className="experience-company">
                Sakarya Teknokent Casemice
              </span>
            </div>
            <div className="experience-data bd-grid">
              <h3 className="experience-title"> Staj - Front End Developer</h3>
              <p className="experience-description">
                HTML, Css, Javascript, Git, Temellerini öğrenme. ReactJs,
                Firebase ile Proje Geliştirme (Redux, Router, Auth, Database
                işlemleri, ...)
              </p>
            </div>
          </div>
        </div>
        <div className="experience-content">
          <div className="experience-time">
            <span className="experience-rounder"></span>
            <span className="experience-line"></span>
          </div>
          <div className="experience-side">
            <div className="experience-data bd-grid">
              <span className="experience-year">2016 - 2020</span>
              <span className="experience-company">Vivent Photo & Camera</span>
            </div>
            <div className="experience-data bd-grid">
              <h3 className="experience-title"> Fotoğraf / Kamera Operatörü</h3>
              <p className="experience-description">
                Video kurgu, Düğün, Albüm, Kısa Film Fotoğraf ve Kamera
                çekimleri
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
