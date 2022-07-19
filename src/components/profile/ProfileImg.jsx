import React from "react";
import photo from "../../assets/img/ProfilPhoto.jpg";

const ProfileImg = ({ profileRef }) => {
  return (
    <section ref={profileRef} className="profileImg section">
      <div className="profileImg-container bd-grid">
        <img className="profileImg-photo" src={photo} />
        {/* mobile screen visible */}
        <div className="profileTitle-container">
          <h1 className="profileTitle-title">Batuhan Gülmez</h1>
          <span className="profileTitle-field">Front End Developer</span>
        </div>
      </div>
    </section>
  );
};

export default ProfileImg;
