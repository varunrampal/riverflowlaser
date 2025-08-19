import React from 'react';
import './Testimonials.css';
import bannerImage from '../assets/smiling-blond.jpg'; // Background banner image
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      {/* Banner */}
      <div className="testimonials-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="testimonials-overlay-dark">
          <div className="testimonials-content centered">
            <h1>Client Testimonials</h1>
            <p>Words from those who trusted Riverstone Laser for radiant results.</p>
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

      {/* New Intro Section */}
      <section className="testimonial-intro">
        <h2>Testimonials</h2>
        <p>
          We are honored to share with you our growing list of satisfied clients. Check out client
          testimonials and see for yourself why everyone’s buzzing about <strong>Riverstone Laser</strong>.
        </p>
        <h3 className="testimonial-subheading">What Our Clients Are Saying</h3>
      </section>
   

<section className="testimonial-slider-section">
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    centeredSlides={true}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      768: { slidesPerView: 1.3 },
      1024: { slidesPerView: 2.2 },
    }}
  >
    {[
      { name: 'Sharon', text: 'I have had the pleasure of seeing all of the staff members at the Burlington location. They are incredibly knowledgeable, warm and welcoming. If you are nervous they will truly put you at ease. You won’t be sorry.' },
      { name: 'Brenda Thorne', text: 'I have gone to Laser Esthetics for years. The staff are professional yet down to earth. Sue is a wealth of knowledge and performs procedures with excellence. The Clinic gives you $50 off on your birthday! The Practitioner starts on time! This means so much to me.' },
      { name: 'Laurie Sinclair', text: 'Expert knowledge and a stress-free environment. I am very pleased with the before and after results from the Belotera and Xeomen products offered here.' },
      { name: 'Debbie', text: 'After 2 sessions of IPL my red vessels are almost gone. I feel so much better about myself. I hardly wear any makeup now and my skin looks bright and fresh.' },
      { name: 'Liz', text: 'I haven\'t worn a bathing suit in 9 years. After 6 sessions of laser hair removal I have no more bikini hair and no more ingrowns. Thanks Sue!' },
      { name: 'Karen', text: 'I had noticeable lines, large pores and dull skin. After 3 pixel laser treatments, I look great and feel amazing. The results were beyond my expectations.' },
      { name: 'Carol', text: 'I had two photofacial treatments for my rosacea. What a difference it made! I look great in the wedding photos. All my colleagues asked where I went!' }
    ].map((t, index) => (
      
      
      
<SwiperSlide key={index}>
  <div className="testimonial-slide-wrapper">
    <div className="testimonial-slide">
      <p className="testimonial-text">“{t.text}”</p>
      <div className="stars">★★★★★</div>
    </div>
    <div className="testimonial-meta">
      <div className="initial-circle">{t.name[0]}</div>
      <div className="testimonial-author">{t.name}</div>
    </div>
  </div>
</SwiperSlide>

    ))}
  </Swiper>
</section>











    </div>
  );
};

export default Testimonials;
