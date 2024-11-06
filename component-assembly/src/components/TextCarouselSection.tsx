import React, { useState, useEffect } from 'react';

const TextCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const carouselWords = [
    'MOTION',
    'UI/UX DESIGN',
    'WEBSITES',
    'PRODUCTS',
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
        {/* Left Column - Text */}
        <div className="content-column">
          <p className="hero-text">
            We specialize in creating emotional, animated interfaces and wow websites that make complex SaaS products more human and appealing to use while ensuring great UX.
          </p>
        </div>

        {/* Right Column - Titles */}
        <div className="title-column">
          <div className="titles-wrapper">
            <div className="static-row">
              <span className="tag">WE DO</span>
              <h1 className="immersive">IMMERSIVE</h1>
            </div>
            <div className="carousel-wrapper">
              {carouselWords.map((word, index) => (
                <div
                  key={index}
                  className={`carousel-word ${index === currentIndex ? 'active' : ''}`}
                >
                  {word}
                </div>
              ))}
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
    padding: 120px 32px;
  }

  .container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: 80px;
  }

  .content-column {
    grid-column: 1 / 2;
  }

  .hero-text {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 400;
    color: #fff;
    margin: 0;
    font-family: Matter, ui-sans-serif, system-ui;
  }

  .title-column {
    grid-column: 2 / 3;
  }

  .titles-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .static-row {
    display: flex;
    align-items: baseline;
    gap: 120px;
    margin-bottom: 16px;
  }

  .tag {
    font-size: 32px;
    color: #fff;
    font-weight: 400;
    font-family: Matter, ui-sans-serif, system-ui;
    white-space: nowrap;
  }

  .immersive {
    font-size: 120px;
    color: #9d9c9a;
    font-weight: 500;
    margin: 0;
    line-height: 0.9;
    letter-spacing: -0.02em;
    font-family: Matter, ui-sans-serif, system-ui;
    text-align: left;
  }

  .carousel-wrapper {
    position: relative;
    height: 140px;
    text-align: left;
    margin-left: 152px;
  }

  .carousel-word {
    position: absolute;
    width: 100%;
    font-size: 120px;
    font-weight: 500;
    color: #fff;
    margin: 0;
    line-height: 0.9;
    letter-spacing: -0.02em;
    font-family: Matter, ui-sans-serif, system-ui;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
    text-align: left;
  }

  .carousel-word.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1400px) {
    .container {
      gap: 40px;
    }
    .immersive,
    .carousel-word {
      font-size: 80px;
    }
    .static-row {
      gap: 80px;
    }
    .carousel-wrapper {
      margin-left: 112px;
    }
  }

  @media (max-width: 1024px) {
    .container {
      grid-template-columns: 1fr;
    }
    .content-column,
    .title-column {
      grid-column: 1 / -1;
    }
    .hero-text {
      font-size: 24px;
      max-width: 560px;
    }
    .static-row {
      flex-direction: column;
      gap: 40px;
    }
    .immersive,
    .carousel-word {
      font-size: 64px;
    }
    .carousel-wrapper {
      margin-left: 0;
    }
  }
`;

document.head.appendChild(style);

export default TextCarouselSection;