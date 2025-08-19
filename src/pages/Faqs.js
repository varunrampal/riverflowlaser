import React from 'react';
import './Faqs.css';
import bannerImage from '../assets/male-back.jpg'; // ✅ Import the background image
import laserProcessImage from '../assets/Hair-Removal-Process-1-1024x522.jpg';
import facePrepImage from '../assets/7187195-1024x683.jpg'; // Replace with actual image later
import processImage from '../assets/Hair-Removal-Process-1-1024x522.jpg';
import resultImage from '../assets/5069611-683x1024.jpg';


const Faqs = () => {
  return (
    <div className="faqs-page">
      {/* Banner */}
      <div className="faqs-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="faqs-overlay-dark">
          <div className="faqs-content centered">
            <h1>Frequently Asked Questions</h1>
            <p>Answers to common questions about Riverstone Laser services and care.</p>
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
    <section className="laser-faq-intro">
  <h2>Laser Hair Removal FAQs: <span>13 Questions You’ve Been Dying to Ask</span></h2>
  <p>
    People have been plucking, waxing, and tweezing unwanted hair for decades. But when laser hair
    removal technology came to be in the mid-1990s, it changed the way that we groom.
  </p>
  <p>
    Over the past twenty years, laser hair removal has become the go-to method for stopping unwanted
    hair growth.
  </p>
  <p>
    And even though it’s been around for quite some time, people still have lots of questions about it.
  </p>
  <p className="highlight">
    Today, we’re answering all of your laser hair removal FAQs. Here are the answers to some questions
    you’ve been dying to ask.
  </p>
</section>

<section className="faq-toggles">
  {[
    {
      title: '1. Does Laser Hair Removal Hurt?',
      content: 'For most people, laser hair removal does not hurt. However, it all depends on your threshold for pain. Most people say that it feels like snapping a rubber band against the skin. But if you’re overly sensitive to pain, you may experience some minor discomfort. Fortunately, there are ways to reduce the discomfort. Prepare properly and follow a strict aftercare program. This will reduce pain and provide the most effective results.'
    },
    {
      title: '2. Is Laser Hair Removal Safe?',
      content: 'The answer is yes. The U.S Food and Drug Administration approved it as a safe method for hair removal in 1997. However, laser hair removal is only safe when a licensed technician performs the procedure. During your consultation, make sure your technician has the proper certifications as required by your state.'
    },
    {
  title: '3. How Does Laser Hair Removal Work?',
  content: (
    <div className="faq-split-content">
      <div className="faq-split-text">
        <p>
          Laser hair removal involves the use of laser pulses. These pulses emit light into the skin that
          destroys the root and follicle of the hair. When the root and follicle are destroyed, hair can no
          longer grow.
        </p>
        <p>
          For this process to work, the hair must be targeted during an active growth phase. However,
          individual hairs usually grow at different rates. Therefore, it takes several treatment sessions
          to capture every hair in the growth phase and produce optimal results.
        </p>
      </div>
      <div className="faq-split-image">
        <img src={laserProcessImage} alt="Laser Hair Removal Process" />
      </div>
    </div>
  )
}
,
    {
  title: '4. How Much Does Laser Hair Removal Cost?',
  content: (
    <>
      <p>
        The cost of laser hair removal varies depending upon the area of the body you want to treat and how many sessions you need.
        The larger the area, the more time it will require. The amount of time will determine the exact price of treatment.
      </p>
    </>
  )
},
{
  title: '5. How Long Does Laser Hair Removal Last?',
  content: (
    <>
      <p>
        Some people see permanent results, while some may need a touch-up treatment every six to twelve months.
        Results vary depending on your hair type and skin type. Proper preparation and aftercare can also affect how long the results last.
      </p>
    </>
  )
},
{
  title: '6. How Old Do You Have to Be to Get Laser Hair Removal?',
  content: (
    <>
      <p>
        There is no specific age minimum, but it is important to wait until you’ve gone through puberty to begin laser treatments.
        Females should not begin treatment unless they’ve already started their menstrual cycle. Generally, fourteen is the earliest
        age that people should begin laser hair removal.
      </p>
    </>
  )
}
,
    {
  title: '7. How Do You Prepare for Laser Hair Removal?',
  content: (
    <div className="faq-img-row">
      <div className="faq-img-text">
        <p>
          To prepare for laser hair removal, avoid plucking, waxing, and tanning for six weeks prior to your first treatment.
          In the days before treatment, avoid taking medications such as blood thinners, NSAIDs, and pain relievers.
          Take a shower and shave right before your treatment, but don’t apply any lotions, moisturizers, or sunscreens to the skin.
        </p>
      </div>
      <div className="faq-img-box">
        <img src={facePrepImage} alt="Facial Treatment" />
      </div>
    </div>
  )
},

{
  title: '8. Can You Get Laser Hair Removal if You’re Pregnant?',
  content: (
    <p>
      It is best to play it safe and avoid laser hair removal while you’re pregnant. There is no evidence to suggest that it is unsafe, but there have not been long-term studies to analyze the effect of the laser on an unborn child.
      <br /><br />
      To protect your unborn baby, wait until after you’ve given birth to begin laser hair removal treatment.
    </p>
  )
},
{
  title: '9. Do You Leave a Tip After Laser Hair Removal?',
  content: (
    <p>
      As with anyone in any service industry, laser technicians always appreciate tips and gratuities. But instead of tipping a certain percentage like you would tip a waiter, tip a specific dollar amount.
      <br /><br />
      For example, tip $10–$20 on a small area, $20–$50 on a medium area, $50+ on a large area.
    </p>
  )
},
{
  title: '10. Can You Get Laser Hair Removal on Any Part of the Body?',
  content: (
    <div className="faq-media-layout">
      <div className="faq-text">
        <h4>Can You Get Laser Hair Removal on Any Part of the Body?</h4>
        <p>
          Laser removal can be performed on any area of the body except the eyelids. The most popular treatment areas are the legs, back, arms, chest, upper lip, underarms, and bikini area.
          <br /><br />
          You can also get laser hair removal on your ears, nose, scalp, forehead, eyebrows, and other parts of your face.
        </p>
      </div>
      <div className="faq-image">
        <img src={resultImage} alt="Treatment Areas" />
      </div>
    </div>
  )
},
{
  title: '11. Can Anybody Get Laser Hair Removal?',
  content: (
    <p>
      Anyone can get laser hair removal, regardless of skin color or hair type. However, people with light skin and dark hair tend to see faster and better results than people with light hair or a darker skin tone.
      <br /><br />
      Any man or woman can have the treatments, though pregnant women should wait until after they’ve given birth to begin their sessions.
    </p>
  )
},
{
  title: '12. Are There Side Effects to Laser Hair Removal?',
  content: (
    <p>
      The side effects are minimal. This is one of the primary benefits of laser hair removal.
      <br /><br />
      Some people experience temporary redness, itching, and swelling of the skin right after treatment. These side effects usually go away within a few hours and most can be soothed by applying aloe vera to the treated area.
      <br /><br />
      In rare cases, some people may see scars, burns, or blisters. But these side effects usually occur only in people who do not follow the proper aftercare plan.
    </p>
  )
},
{
  title: '13. How Many Laser Hair Removal Treatments Do You Need to Get?',
  content: (
    <p>
      In most cases, you’ll need between six and twelve treatments. These treatments are spaced out four to eight weeks apart. The waiting period is necessary to target every hair follicle while it’s in an active stage of the growth cycle.
    </p>
  )
}

  ].map((item, i) => (
    <details key={i} className="faq-item">
      <summary>{item.title}</summary>
      <div className="faq-content">{item.content}</div>
    </details>
  ))}
</section>






    </div>
  );
};

export default Faqs;
