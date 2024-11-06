import React, { useState, useEffect } from 'react';

const TextCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const carouselWords = [
    'WEBSITES',
    'PRODUCTS',
    'UI/UX DESIGN',
    'MOTION',
    'WEB APPS',
    'MOBILE APPS'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % carouselWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="two-column-grid">
          {/* Left Column */}
          <div className="content-column">
            <p className="hero-text">
              We specialize in creating emotional, animated interfaces and wow websites that make complex SaaS products more human and appealing to use while ensuring great UX.
            </p>
          </div>

          {/* Right Column */}
          <div className="title-column">
            <div className="title-wrapper">
              <div className="title-header">
                <span className="section-tag">WE DO</span>
                <span className="static-title">IMMERSIVE</span>
              </div>
              <div className="carousel-wrapper">
                {carouselWords.map((word, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add styles
const style = document.createElement('style');
style.textContent = `
  .hero-section {
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
    padding: 0 32px;
    display: flex;
    align-items: center;
  }

  .container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  .two-column-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .content-column {
    max-width: 500px;
  }

  .hero-text {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 400;
    margin: 0;
    color: #fff;
    font-family: Matter, ui-sans-serif, system-ui;
  }

  .title-column {
    justify-self: end;
  }

  .title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .title-header {
    display: flex;
    align-items: baseline;
    gap: 24px;
    margin-bottom: -16px;
  }

  .section-tag {
    font-size: clamp(24px, 2vw, 32px);
    font-weight: 400;
    color: #9d9c9a;
    font-family: Matter, ui-sans-serif, system-ui;
  }

  .static-title {
    font-size: clamp(64px, 8vw, 120px);
    font-weight: 500;
    color: #9d9c9a;
    letter-spacing: -0.02em;
    font-family: Matter, ui-sans-serif, system-ui;
    line-height: 0.9;
  }

  .carousel-wrapper {
    position: relative;
    height: 140px;
    overflow: hidden;
  }

  .carousel-item {
    position: absolute;
    width: 100%;
    font-size: clamp(64px, 8vw, 120px);
    font-weight: 500;
    color: #fff;
    letter-spacing: -0.02em;
    font-family: Matter, ui-sans-serif, system-ui;
    line-height: 0.9;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .carousel-item.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    .two-column-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .content-column,
    .title-column {
      justify-self: start;
    }

    .hero-text {
      font-size: 24px;
    }

    .title-header {
      flex-direction: column;
      gap: 8px;
      margin-bottom: 0;
    }
  }
`;

document.head.appendChild(style);

export default TextCarouselSection;