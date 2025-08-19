import React from 'react';
import './Contact.css';
import bannerImage from '../assets/leaves-bg.jpg';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Banner */}
      <div className="contact-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="contact-overlay-dark">
          <div className="contact-content centered">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you. Let’s start a conversation today.</p>
          </div>
        </div>
        <div className="wave-divider">
          <svg className="nectar-shape-divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path d="M 1014 264 v 122 h -808 l -172 -86 s 310.42 -22.84 402 -79 c 106 -65 154 -61 268 -12 c 107 46 195.11 5.94 275 137 z" fill="#ffffff" fillOpacity="0.15" />
            <path d="M -302 55 s 235.27 208.25 352 159 c 128 -54 233 -98 303 -73 c 92.68 33.1 181.28 115.19 235 108 c 104.9 -14 176.52 -173.06 267 -118 c 85.61 52.09 145 123 145 123 v 74 l -1306 10 z" fill="#ffffff" fillOpacity="0.2" />
            <path d="M -286 255 s 214 -103 338 -129 s 203 29 384 101 c 145.57 57.91 178.7 50.79 272 0 c 79 -43 301 -224 385 -63 c 53 101.63 -62 129 -62 129 l -107 84 l -1212 12 z" fill="#ffffff" fillOpacity="0.3" />
            <path d="M -24 69 s 299.68 301.66 413 245 c 8 -4 233 2 284 42 c 17.47 13.7 172 -132 217 -174 c 54.8 -51.15 128 -90 188 -39 c 76.12 64.7 118 99 118 99 l -12 132 l -1212 12 z" fill="#ffffff" fillOpacity="0.5" />
            <path d="M -12 201 s 70 83 194 57 s 160.29 -36.77 274 6 c 109 41 184.82 24.36 265 -15 c 55 -27 116.5 -57.69 214 4 c 49 31 95 26 95 26 l -6 151 l -1036 10 z" fill="#ffffff" fillOpacity="1" />
          </svg>
        </div>
      </div>

      {/* Info + Map Section */}
      <div className="contact-info-section">
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p><strong>Phone:</strong> <a href="tel:+16046218311">604-621-8311</a></p>
          <p><strong>Address:</strong><br />2961 Townline Rd<br />Abbotsford, BC V2T 5J8<br />Canada</p>
          <p><strong>Business Hours:</strong><br />
            Mon: 09:00 AM – 8:00 PM<br />
            Tue: Closed<br />
            Wed–Sun: 09:00 AM – 8:00 PM
          </p>
          <div className="button-row">
  <a href="tel:+16046218311" className="call-button">Click to Call</a>
  <a
    href="https://www.google.com/maps/dir//2961+Townline+Rd+Abbotsford,+BC+V2T+5J8+Canada/@49.055742,-122.3603043,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x5485cacc737afdf5:0x560589a16251f5fe"
    target="_blank"
    rel="noopener noreferrer"
    className="call-button"
  >
    Get Directions
  </a>
</div>

        </div>
        <div className="contact-right">
          <iframe
  title="Map"
  src="https://maps.google.com/maps?ll=49.05590406014491,-122.36034559315844&z=15&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>
<div className="map-marker-blink"></div>

          <div className="map-marker-blink"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
