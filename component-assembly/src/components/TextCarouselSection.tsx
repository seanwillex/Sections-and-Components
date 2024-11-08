import React, { useState, useEffect } from 'react';

const TextCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const carouselWords = [
    'WEBSITES',
    'UI/UX DESIGN',
    'MOTION',
    'WEB APPS',
    'MOBILE APPS',
    'PRODUCTS'
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
        <div className="left-content">
          <p className="description">
            We specialize in creating emotional, animated interfaces and wow websites 
            that make complex SaaS products more human and appealing to use while 
            ensuring great UX.
          </p>
        </div>
        
        <div className="right-content">
          <div className="top-line">
            <span className="tag-we-do">WE DO</span>
            <span className="text-immersive">IMMERSIVE</span>
          </div>
          <div className="bottom-line">
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
    display: flex;
    align-items: center;
    padding: 120px 0;
    overflow: hidden;
  }

  .container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 32px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
  }

  .left-content {
    grid-column: 1 / 2;
    align-self: start;
    padding-top: 20px;
  }

  .description {
    font-size: clamp(24px, 2vw, 32px);
    line-height: 1.2;
    color: #fff;
    margin: 0;
    max-width: 560px;
    font-family: Matter, ui-sans-serif, system-ui;
    font-weight: 400;
  }

  .right-content {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: flex-end;
  }

  .top-line {
    display: flex;
    align-items: flex-end;
    gap: 32px;
    margin-bottom: -20px;
    width: 100%;
    justify-content: flex-end;
    position: relative;
  }

  .tag-we-do {
    font-size: clamp(24px, 2vw, 32px);
    color: #fff;
    font-family: Matter, ui-sans-serif, system-ui;
    font-weight: 400;
    position: absolute;
    right: calc(100% - 32px);
    bottom: calc(100% - 24px);
    transform: none;
    white-space: nowrap;
  }

  .text-immersive {
    font-size: clamp(64px, 8vw, 120px);
    color: #9d9c9a;
    font-family: Matter, ui-sans-serif, system-ui;
    font-weight: 500;
    line-height: 0.9;
    letter-spacing: -0.02em;
    text-align: right;
    margin-left: auto;
  }

  .bottom-line {
    position: relative;
    height: 120px;
    margin-top: 20px;
    width: 100%;
    text-align: right;
  }

  .carousel-word {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    font-size: clamp(64px, 8vw, 120px);
    color: #fff;
    font-family: Matter, ui-sans-serif, system-ui;
    font-weight: 500;
    line-height: 0.9;
    letter-spacing: -0.02em;
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: right;
  }

  .carousel-word.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    .container {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .left-content,
    .right-content {
      grid-column: 1 / -1;
    }

    .description {
      font-size: 24px;
    }

    .top-line {
      flex-direction: row;
      align-items: baseline;
      gap: 16px;
    }

    .tag-we-do {
      position: static;
      right: auto;
      bottom: auto;
      transform: none;
    }

    .text-immersive,
    .carousel-word {
      font-size: 64px;
    }

    .right-content,
    .top-line,
    .bottom-line,
    .carousel-word {
      text-align: left;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .carousel-word {
      left: 0;
      right: auto;
    }
  }
`;

document.head.appendChild(style);

export default TextCarouselSection;