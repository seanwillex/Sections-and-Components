import React, { useState } from 'react';

const PlanTripSection = () => {
  const [activeSection, setActiveSection] = useState(4);

  const sections = [
    {
      title: 'Visa Information',
      background: 'https://auth.unccdcop16.org/MoreSaudiArabiaImg/e1b40f59-ed1c-42a1-97bf-f2329d5a019e.png',
      link: 'https://visa.visitsaudi.com/',
    },
    {
      title: 'Accommodation',
      background: 'https://auth.unccdcop16.org/MoreSaudiArabiaImg/2c56d0cb-9a94-4106-8ed7-c0ca0b8b0227.png',
      link: 'https://www.almosafer.com/en?partner_referer=unccdcop16&ncr=1',
    },
    {
      title: 'Virtual Tour',
      background: 'https://auth.unccdcop16.org/MoreSaudiArabiaImg/223a9114-3c7a-4c4d-af8b-a6eb97c9bc45.png',
      link: 'https://map.visitsaudi.com/en',
    },
    {
      title: 'Local Attraction',
      background: 'https://auth.unccdcop16.org/MoreSaudiArabiaImg/e30674bf-d91a-4974-b25b-e0402310e47d.png',
      link: 'https://www.visitsaudi.com/en/destinations',
    },
    {
      title: 'Transportation',
      background: 'https://auth.unccdcop16.org/MoreSaudiArabiaImg/5b80c2a2-52cb-459b-8185-03f578cb26c8.png',
      link: 'https://www.visitsaudi.com/en/getting-around',
      text: 'you can explore your transportations simply. just click explore',
    },
  ];

  return (
    <article className="news-accordion">
      {sections.map((section, index) => (
        <section
          key={index}
          className={activeSection === index ? 'active' : ''}
          style={{
            backgroundImage: `url(${section.background})`
          }}
          onClick={() => setActiveSection(index)}
        >
          <div className="content-wrapper">
            <p className="trip-title" hidden={activeSection !== index}>
              Plan your trip
            </p>
            <h2 className={activeSection === index ? 'horizontal' : 'vertical'}>
              {section.title}
            </h2>
            <div className="news-accordion-content" hidden={activeSection !== index}>
              {section.text && <p className="animated-text">{section.text}</p>}
              <a href={section.link} target="_blank" className="explore-button" rel="noopener noreferrer">
                Explore
              </a>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
};

const style = document.createElement('style');
style.textContent = `
  :root {
    --font--base: 32px;
    --spacing-4xl: 8em;
    --navy-blue: #0a0a12;
    --separator-color: rgba(128, 128, 128, 0.2);
    --animation-duration: 1.2s;
    --bezier-smooth: cubic-bezier(0.55, 0, 0.29, 1);
  }

  .news-accordion {
    display: flex;
    height: 500px;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  .news-accordion section {
    flex: 0 0 125px;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    cursor: pointer;
    padding: 50px;
    transform: translateZ(0);
    overflow: hidden;
    box-sizing: border-box;
    margin: -1px;
    outline: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .news-accordion section.active {
    flex: 1;
    margin-right: 0;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .content-wrapper {
    height: 100%;
    position: relative;
    width: 100%;
  }

  .news-accordion h2 {
    color: #fff;
    font-size: var(--font--base);
    font-weight: normal;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    white-space: nowrap;
    font-family: Matter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  .news-accordion h2.vertical {
    transform-origin: center;
    transform: rotate(-90deg) translateX(0) translateY(0);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    text-align: center;
    width: max-content;
  }

  .news-accordion h2.horizontal {
    transform: rotate(0deg);
    position: relative;
    margin-bottom: 1rem;
  }

  .trip-title {
    font-family: Matter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: var(--font--base);
    color: #fff;
    margin-bottom: 1rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .active .trip-title {
    opacity: 1;
    transform: translateY(0);
  }

  .news-accordion-content {
    position: absolute;
    bottom: 50px;
    left: 50px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .active .news-accordion-content {
    opacity: 1;
    transform: translateY(0);
  }

  .animated-text {
    color: #fff;
    font-size: var(--font--base);
    margin-bottom: 1rem;
    font-family: Matter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  .explore-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #fff;
    color: #325168;
    text-decoration: none;
    border-radius: 4px;
    font-family: Matter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 17px;
    transition: all 0.2s ease;
  }

  .explore-button:hover {
    background-color: #f5f5f5;
    transform: translateY(-2px);
  }

  section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
    pointer-events: none;
  }
`;

document.head.appendChild(style);

export default PlanTripSection;