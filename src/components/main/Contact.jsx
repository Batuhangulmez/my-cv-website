import React from "react";
import clickIcon from "../../assets/icon/click.png";

const Contact = ({ contactRef }) => {
  return (
    <section ref={contactRef} className="contact section">
      <h2 className="section-title">İLETİŞİM</h2>
      <div className="contact-container bd-grid">
        <div className="contact-content">
          <div className="contact-data bd-grid">
            <h3 className="contact-title">Telefon</h3>
            <span className="contact-studies">0537 540 5783</span>
          </div>
        </div>
        <div className="contact-content">
          <div className="contact-data bd-grid">
            <h3 className="contact-title"> Email</h3>
            <span className="contact-studies">batuhanngulmez@gmail.com</span>
          </div>
        </div>
        <div className="contact-content">
          <div className="contact-data bd-grid">
            <h3 className="contact-title">Adres</h3>
            <span className="contact-studies">Serdivan / Sakarya</span>
            <span className="contact-studies">Avcılar / İstanbul</span>
          </div>
        </div>
        <div className="contact-content">
          <div className="contact-data bd-grid">
            <h3 className="contact-title  ">
              <a
                href="https://www.linkedin.com/in/batuhangülmez"
                target="_blank"
              >
                LinkedIn
              </a>{" "}
              /{" "}
              <a href="https://github.com/Batuhangulmez" target="_blank">
                GitHub
              </a>
              <img className="clickIcon" src={clickIcon} />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
