import React from 'react';
import './Team.css';
import bannerImage from '../assets/asian-woman.jpg';
import jyotiImage from '../assets/A537FC8D-4AE2-4D92-A66B-843DD59C99E5-e1654985129654-768x1137.jpeg';

const Team = () => {
  return (
    <div className="team-page">
      {/* Banner */}
      <div className="team-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="team-overlay-dark">
          <div className="team-content centered">
            <h1>Forged from Genuine Need</h1>
            <p>Jade Clinics was built upon a passion for hair-free living.</p>
            <p className="sub">
              At Riverstone Laser and Skin Care Inc, our journey is rooted in care and client-first innovation.
            </p>
          </div>
        </div>
        <div className="wave-divider">
          <svg className="nectar-shape-divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path d="M 1014 264 v 122 h -808 l -172 -86 s 310.42 -22.84 402 -79 c 106 -65 154 -61 268 -12 c 107 46 195.11 5.94 275 137 z" fill="#ffffff" fillOpacity="0.15" />
            <path d="M -302 55 s 235.27 208.25 352 159..." fill="#ffffff" fillOpacity="0.2" />
            <path d="M -286 255 s 214 -103 338 -129..." fill="#ffffff" fillOpacity="0.3" />
            <path d="M -24 69 s 299.68 301.66 413 245..." fill="#ffffff" fillOpacity="0.5" />
            <path d="M -12 201 s 70 83 194 57..." fill="#ffffff" fillOpacity="1" />
          </svg>
        </div>
      </div>

      {/* Main Team Section */}
      <div className="team-main">
        <div className="team-text">
          <h2>Meet the Team</h2>
          <p className="desc">
            Our Dream TEAM! <br />
            At The Riverstone Laser and Skin Care Inc, our team is respected for their experience and passion for skin health and offering laser, cosmetic and injectable treatments to patients for naturally beautiful results.
            <br /><br />
            We welcome every patient with warmth and knowledge you’ll feel comfortable and confident in.
          </p>
          <blockquote>
            “As a woman who understands the toll unwanted hair can take, I know how important safe and effective solutions are.”
            <span>— Jyoti Sharma, Esthetician</span>
          </blockquote>
        </div>
        <div className="team-photo">
          <img src={jyotiImage} alt="Jyoti Sharma" />
        </div>
      </div>
    </div>
  );
};

export default Team;
