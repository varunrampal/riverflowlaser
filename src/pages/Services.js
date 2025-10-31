import React, { useState } from 'react';
import './Services.css';
import bannerImage from '../assets/legs-scaled.jpg';
import hairRemoval from '../assets/woman-cosmetology-studio-laser-hair-removal-scaled.jpg';
import facials from '../assets/beautiful-woman-getting-beauty-treatment-scaled.jpg';
import wax from '../assets/beautiful-young-girl-beauty-salon-scaled.jpg';
import antiAging from '../assets/pexels-cottonbro-7581076-scaled.jpg';
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

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="services-overlay-dark">
          <div className="services-content centered">
            <h1>RiverFlow Laser</h1>
            <p>Your source for the finest skin treatments</p>
            <p className="sub">
              Confidence begins with self-care. Experience tailored skincare designed to make you feel radiant and renewed.
            </p>
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

      <section className="services-intro">
        <h2>It’s your skin. Your body. Be proud of it.</h2>
        <p>
          At RiverFlow Laser, we provide innovative treatments including laser hair removal,
          skin revitalization, and body contouring. Our mission is to help you feel confident
          and beautiful in your own skin through professional, personalized care.
        </p>
      </section>

      <section className="treatment-section-full">
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
            { title: 'Signature Facial', content: 'Includes deep cleanse, exfoliation, extractions, revitalizing treatment, and oxygen therapy for smooth, hydrated skin in 30 minutes.' },
            { title: 'Party-Prep Facial', content: 'Cleansing, firming, lifting, and hydrating with muscle stimulation, hyaluronic serum, and oxygen blast for radiant skin.' },
            { title: 'Detox', content: 'Deep exfoliation with B3 superfoods and Vitamin C massage to relieve stress and restore glow.' }
          ]}
        />

        <ServiceBlock
          title="Microneedling"
          image={wax}
          description="We’re a full-service speed-waxing salon delivering premium service. Our waxologists use refined techniques to leave your skin glowing."
          features={[
            { title: 'Proprietary Waxing Technique', content: 'A 3-step process using all-natural soft wax and quality products for optimal comfort and results.' },
            { title: 'Boutique Experience', content: 'A sensory-focused environment that offers care, authenticity, and comfort.' },
            { title: 'Sole Focus On Waxing', content: 'A spa-like setting with specialized professionals solely focused on waxing for maximum satisfaction.' }
          ]}
        />

        <ServiceBlock
          title="Chemical Peels"
          image={antiAging}
          reverse
          description="We are Canada’s leading anti-aging facility offering expert solutions including HGH therapy, fillers, laser toning, and more."
          features={[
            { title: 'Laser Toning', content: 'Targets pigmentation and dull skin using customizable laser settings to stimulate collagen and rejuvenate tone.' },
            { title: 'Fillers', content: 'Hyaluronic fillers to plump under-eye hollows, cheeks, and define the jawline with lasting effects.' },
            { title: 'Botulinum Toxin Injections', content: 'Reduces forehead lines, frown wrinkles, and crow’s feet with muscle-relaxing injections.' }
          ]}
        />
        <ServiceBlock
  title="HydraFacial"
  image={hydrafacial}
  description="HydraFacial uses a patented Vortex-Fusion® delivery system to cleanse, extract, and hydrate the skin. It’s a non-invasive, customizable facial treatment that delivers real results instantly."
  features={[
    { title: 'Multi-Step Process', content: 'Combines cleansing, exfoliation, extraction, hydration, and antioxidant protection.' },
    { title: 'Gentle Yet Powerful', content: 'Safe for sensitive skin and delivers deep hydration with zero irritation or downtime.' },
    { title: 'Instant Results', content: 'Leaves your skin dewy, plump, and glowing after just one session.' }
  ]}
/>

<ServiceBlock
  title="Hair Services"
  image={hairServices}
  reverse
  description="From trims to full transformations, our hair services include professional styling, coloring, and treatment options tailored to you. Trust our expert stylists to enhance your natural beauty."
  features={[
    { title: 'Haircuts & Styling', content: 'Precision cuts, blowouts, and styling for everyday or special occasions.' },
    { title: 'Color & Highlights', content: 'Rich, dimensional color services including balayage, root touch-ups, and fashion shades.' },
    { title: 'Scalp & Hair Treatments', content: 'Rejuvenating treatments that nourish the scalp and restore shine and strength.' }
  ]}
/>
      </section>
    </div>
  );
};

export default Services;
