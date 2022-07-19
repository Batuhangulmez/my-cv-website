import React from "react";

const Profile = ({ profileRef }) => {
  return (
    <section ref={profileRef} className="profile section">
      <h2 className="section-title">HAKIMDA</h2>
      <p className="profile-description">
        React ile Web uygulamaları tasarlayıp geliştiriyorum. Yazdığım kodların
        sade, dinamik ve verimli olmasına Dikkat eden, takım çalışmasına yatkın
        biriyim. Kendimi geliştirmeye özen gösteriyorum.
      </p>
    </section>
  );
};

export default Profile;
