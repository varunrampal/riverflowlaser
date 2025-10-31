import React, { useState } from 'react';
import './Home.css';
import rightImage from '../assets/logo.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaCalendarCheck } from 'react-icons/fa';
import hairRemoval from '../assets/woman-cosmetology-studio-laser-hair-removal-scaled.jpg';
import facials from '../assets/beautiful-woman-getting-beauty-treatment-scaled.jpg';
import wax from '../assets/beautiful-young-girl-beauty-salon-scaled.jpg';
import antiAging from '../assets/pexels-cottonbro-7581076-scaled.jpg';
import productsImage from '../assets/ncppmv69m1s-1024x683.jpg';
import consultationImage from '../assets/46bom4lobsa-1024x683.jpg';
import th from '../assets/th.jpeg';
import th2 from '../assets/th2.jpeg';
import th3 from '../assets/th3.jpeg';
import hydrafacial from '../assets/HydraFacial.jpg';
import hairServices from '../assets/HairServices.jpg';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setOpen(!open)}>
        <span>{open ? '−' : '+'}</span> {title}
      </div>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const ServiceBlock = ({ image, title, description, features, reverse }) => (
  <div className={`treatment-block ${reverse ? 'reverse' : ''}`}>
    <div className="treatment-img" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="treatment-text">
      <h3>{title}</h3>
      <p>{description}</p>
      {features.map((item, index) => (
        <Accordion key={index} title={item.title}>{item.content}</Accordion>
      ))}
    </div>
  </div>
);



const Home = () => {
  return (
    <>
      <div className="home-hero">
        {/* 🎨 Decorative background pattern */}
        <div className="hero-pattern"></div>

        <div className="hero-overlay">
          <div className="hero-left">
            <div className="hero-content">
              <h1>
                <span>Discover personalized treatments that</span><br />
                enhance your natural beauty.
              </h1>

              <p className="hero-description">
                At RiverFlow Laser, we believe every individual deserves to shine. Our experienced team offers luxurious skincare solutions designed to deliver real, lasting results — because you’re not just glowing, you’re truly unforgettable.
              </p>

              <a
                href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="book-btn">
                  Book Appointment <FaArrowRight className="arrow-icon" />
                </button>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <img src={rightImage} alt="Model" />
          </div>
        </div>
      </div>

      {/* ✅ SVG wave divider */}
      <div className="wave-divider">
        <svg className="nectar-shape-divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path d="M 1014 264 v 122 h -808 l -172 -86 s 310.42 -22.84 402 -79 c 106 -65 154 -61 268 -12 c 107 46 195.11 5.94 275 137 z" fill="#ffffff" fillOpacity="0.15" />
          <path d="M -302 55 s 235.27 208.25 352 159 c 128 -54 233 -98 303 -73 c 92.68 33.1 181.28 115.19 235 108 c 104.9 -14 176.52 -173.06 267 -118 c 85.61 52.09 145 123 145 123 v 74 l -1306 10 z" fill="#ffffff" fillOpacity="0.2" />
          <path d="M -286 255 s 214 -103 338 -129 s 203 29 384 101 c 145.57 57.91 178.7 50.79 272 0 c 79 -43 301 -224 385 -63 c 53 101.63 -62 129 -62 129 l -107 84 l -1212 12 z" fill="#ffffff" fillOpacity="0.3" />
          <path d="M -24 69 s 299.68 301.66 413 245 c 8 -4 233 2 284 42 c 17.47 13.7 172 -132 217 -174 c 54.8 -51.15 128 -90 188 -39 c 76.12 64.7 118 99 118 99 l -12 132 l -1212 12 z" fill="#ffffff" fillOpacity="0.5" />
          <path d="M -12 201 s 70 83 194 57 s 160.29 -36.77 274 6 c 109 41 184.82 24.36 265 -15 c 55 -27 116.5 -57.69 214 4 c 49 31 95 26 95 26 l -6 151 l -1036 10 z" fill="#ffffff" fillOpacity="1" />
        </svg>
      </div>

      






      {/* ✅ Continue with rest of the content */}


<section className="treatment-section-full" style={{ marginTop: '80px' }}>
  <ServiceBlock
    title="Laser Hair Removal"
    image={hairRemoval}
    description="If you’re not happy with shaving, tweezing, or waxing to remove unwanted hair, laser hair removal may be an option worth considering. Our lasers help remove hair from the face, leg, chin, back, arm, underarm, bikini line, and more."
    features={[
      { title: 'Precision', content: 'Lasers can selectively target dark, coarse hairs while leaving the surrounding skin undamaged.' },
      { title: 'Speed', content: 'Each pulse of the laser treats many hairs in seconds. Small areas like the upper lip can take less than a minute; larger areas like the legs may take up to an hour.' },
      { title: 'Predictability', content: 'Most patients have permanent hair loss after an average of three to seven sessions.' }
    ]}
  />
  <ServiceBlock
    title="Facials"
    image={facials}
    reverse
    description="Our facials are designed for cleansing, exfoliation, and hydration. Perfect for busy clients who want results-driven skincare focused on enhancing and maintaining healthy skin."
    features={[
      { title: 'Signature Facial', content: 'Includes deep cleanse, exfoliation, extractions, revitalizing treatment, and oxygen therapy.' },
      { title: 'Party-Prep Facial', content: 'Firming, lifting, and hydrating with muscle stimulation, hyaluronic serum, and oxygen blast.' },
      { title: 'Detox', content: 'Deep exfoliation with B3 superfoods and Vitamin C massage to relieve stress and restore glow.' }
    ]}
  />
  <ServiceBlock
    title="Microneedling"
    image={wax}
    description="Professional microneedling services that improve skin tone, reduce scars and fine lines by stimulating collagen production."
    features={[
      { title: 'Collagen Boost', content: 'Stimulates collagen and elastin naturally through micro-injuries.' },
      { title: 'Minimally Invasive', content: 'Safe and effective for all skin types with minimal downtime.' },
      { title: 'Enhanced Absorption', content: 'Improves absorption of skincare products into deeper layers.' }
    ]}
  />
  <ServiceBlock
    title="Chemical Peels"
    image={antiAging}
    reverse
    description="We offer medical-grade peels that exfoliate the skin and reduce the appearance of wrinkles, acne scars, and hyperpigmentation."
    features={[
      { title: 'Skin Renewal', content: 'Removes dead skin cells to reveal smoother, brighter skin.' },
      { title: 'Anti-Aging', content: 'Reduces fine lines and sun damage for youthful skin.' },
      { title: 'Customizable', content: 'Different intensities and acids for all skin concerns.' }
    ]}
  />
  <ServiceBlock
    title="HydraFacial"
    image={hydrafacial}
    description="HydraFacial uses patented Vortex-Fusion® technology to cleanse, extract, and hydrate, leaving your skin radiant and plump."
    features={[
      { title: 'All-in-One Treatment', content: 'Cleanses, exfoliates, extracts, and hydrates in a single session.' },
      { title: 'Gentle on Skin', content: 'Non-invasive and soothing, suitable for sensitive skin.' },
      { title: 'Immediate Glow', content: 'Results are visible after just one treatment.' }
    ]}
  />
  <ServiceBlock
    title="Hair Services"
    image={hairServices}
    reverse
    description="Expert hairstyling, cutting, and treatments tailored to your needs. We enhance your natural look with care and precision."
    features={[
      { title: 'Cuts & Styling', content: 'From trims to layered styles for all occasions.' },
      { title: 'Color Services', content: 'Balayage, root touch-up, and vibrant full-color options.' },
      { title: 'Scalp Therapy', content: 'Soothing and nourishing treatments for scalp health.' }
    ]}
  />
</section>


      {/* ✅ Machines Section */}
<section className="machines-section">
  <div className="machine-block">
    <img src={th} alt="Soprano ICE Platinum" className="machine-img" />
    <div className="machine-text">
      <h2>Soprano ICE Platinum</h2>
      <p>
        The Soprano ICE Platinum is the gold standard for laser hair removal, combining three laser wavelengths into one innovative handpiece. This technology allows simultaneous targeting of different tissue depths and anatomical structures, ensuring maximum results and comfort. It's safe for all skin tones and ideal for treating both large and small areas efficiently.
      </p>
      <p>
        This machine features SHR™ technology, which gradually heats the dermis to damage hair follicles while avoiding injury to the surrounding tissue. Treatments are virtually painless with no downtime, making it a favorite among clients seeking fast, effective, and long-term hair reduction.
      </p>
    </div>
  </div>

  <div className="machine-block reverse">
    <img src={th2} alt="XCellarisPro Twist" className="machine-img" />
    <div className="machine-text">
      <h2>XCellarisPro Twist</h2>
      <p>
        The XCellarisPro Twist is a premium microneedling device designed for professional skin rejuvenation. It uses precise needle depth control and active needle retraction to stimulate collagen and elastin production, addressing fine lines, acne scars, and enlarged pores effectively. Its German-engineered design ensures both safety and precision for optimal results.
      </p>
      <p>
        This device is suitable for all skin types and offers exceptional outcomes without damaging the epidermis. By creating controlled microchannels, it allows better absorption of active ingredients, enhancing the overall appearance, texture, and health of the skin over time.
      </p>
    </div>
  </div>

  <div className="machine-block">
    <img src={th3} alt="OxyGeneo 3-in-1 Super Facial" className="machine-img" />
    <div className="machine-text">
      <h2>OxyGeneo 3-in-1 Super Facial</h2>
      <p>
        The OxyGeneo 3-in-1 Super Facial provides a complete skin renewal experience by combining gentle exfoliation, natural skin oxygenation, and nutrient infusion. This non-invasive treatment boosts skin metabolism and leaves the complexion visibly smoother and more radiant after just one session.
      </p>
      <p>
        Unlike traditional facials, OxyGeneo treatments work from the inside out, triggering natural oxygenation processes to optimize nutrient absorption. Perfect for all skin types, it addresses dullness, fine lines, and uneven skin tone—making it a go-to solution for those wanting youthful, glowing skin.
      </p>
    </div>
  </div>
</section>


      <section className="about-section">
        <p>
          We offer a wide range of personalized treatments in a clean, safe, and welcoming environment. Below are some of our most in-demand and frequently requested services.
          <br /><br />
          <strong>We provide services to women only.</strong>
        </p>

        <div className="about-buttons">
          <Link to="/about" className="btn learn-more">
            <FaInfoCircle className="btn-icon" /> Learn More
          </Link>
          <a
            href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
            target="_blank"
            rel="noopener noreferrer"
            className="btn book-now"
          >
            <FaCalendarCheck className="btn-icon" /> Book Now
          </a>
        </div>

        

        <section className="products-section">
          <div className="products-container">
            <div
              className="product-image"
              style={{ backgroundImage: `url(${productsImage})` }}
            ></div>
            <div className="product-text">
              <h4>PRODUCTS</h4>
              <h2>We use certified skincare products at RiverFlow Laser</h2>
              <p>
                Our top-rated products range from leading skincare brands to help target specific skin
                concerns and revitalize your look.
              </p>
              <a
                href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
                target="_blank"
                rel="noopener noreferrer"
                className="btn book-now"
              >
                <FaCalendarCheck className="btn-icon" /> Book Now
              </a>
            </div>
          </div>
        </section>

        <section className="consultation-section">
          <div className="consultation-container">
            <div className="consultation-text">
              <h4>FREE CONSULTATION</h4>
              <h2>Personalized Skincare Support</h2>
              <p>
                Our team of highly trained technicians is here to guide you with expert
                skincare advice tailored to your specific needs.
              </p>
              <p>
                Whether you're new to treatments or a returning client, we ensure
                comfortable, informed, and result-driven care that puts your needs first.
              </p>
              <a
                href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
                target="_blank"
                rel="noopener noreferrer"
                className="btn book-now"
              >
                <FaCalendarCheck className="btn-icon" /> Book Now
              </a>
            </div>
            <div
              className="consultation-image"
              style={{
                backgroundImage: `url(${consultationImage})`,
              }}
            ></div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
