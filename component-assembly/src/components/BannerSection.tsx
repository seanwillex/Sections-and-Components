import React, { useState } from 'react';

// Add this type declaration at the top of the file
type CSSProperties = React.CSSProperties & {
  '--mouse-x'?: string;
  '--mouse-y'?: string;
};

const ArrowIcon = () => (
  <svg width="132" height="63" viewBox="0 0 132 63" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Icon / Arrow">
      <path 
        id="Line 2" 
        d="M2 31.5H127.85" 
        stroke="currentColor"
        strokeWidth="3.15" 
        strokeLinecap="round" 
        style={{ strokeOpacity: 1 }}
      />
      <path 
        id="Rectangle 3" 
        d="M112.324 8.94928L120.342 16.9679C125.332 21.9577 127.827 24.4526 128.762 27.3295C129.584 29.8602 129.584 32.5861 128.762 35.1168C127.827 37.9937 125.332 40.4886 120.342 45.4784L112.324 53.497" 
        stroke="currentColor"
        strokeWidth="3.15" 
        strokeLinecap="round"
        style={{ strokeOpacity: 1 }}
      />
    </g>
  </svg>
);

const MarqueeContent = ({ title }) => (
  <>
    <div className="pl-8">
      <div>
        <h2 className="text-[64px]">{title}</h2>
      </div>
    </div>
    <div className="fh-item--banner__seperator"><ArrowIcon /></div>
  </>
);

const Banner = ({ color, title, href }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsHovering(true);
  };

  return (
    <div 
      className={`banner-${color} fh-section--banners-banner`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="fh-item--banner">
        {isHovering && (
          <div 
            className="hover-circle" 
            style={{
              '--mouse-x': `${coords.x}px`,
              '--mouse-y': `${coords.y}px`
            } as CSSProperties}
          />
        )}
        <div className="fh-item--banner__marquee">
          <div>
            <MarqueeContent title={title} />
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <div>
                  <h2 className="text-[64px]">{title}</h2>
                </div>
                <div className="fh-item--banner__seperator"><ArrowIcon /></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="service-banner-text">
          <h2 className="text-[64px]">{title}</h2>
        </div>
        <a 
          href={href} 
          className="absolute top-0 size-full left-0" 
          aria-label={title}
        />
      </div>
    </div>
  );
};

const BannerSection = () => {
  const banners = [
    {
      color: 'orange',
      title: 'Showroom Experiences',
      href: '/en/value/branding'
    },
    {
      color: 'purple',
      title: 'Brand Strategy',
      href: '/en/value/branding'
    },
    {
      color: 'red',
      title: 'Immersive Websites',
      href: '/en/value/websites'
    },
    {
      color: 'green',
      title: 'Web & Mobile Applications',
      href: '/en/value/app-development'
    }
  ];

  return (
    <div className="fh-section--banners">
      {banners.map((banner, index) => (
        <Banner key={index} {...banner} />
      ))}
    </div>
  );
};

// Update the styles
const style = document.createElement('style');
style.textContent = `
  :root {
    --font--base: 70px;
    --spacing-4xl: 8em;
    --navy-blue: #0a0a12;
    --separator-color: rgba(128, 128, 128, 0.2);
    --animation-duration: 1.0s;
    --bezier-smooth: cubic-bezier(0.55, 0, 0.29, 1);
  }

  .fh-section--banners-banner {
    position: relative;
    overflow: hidden;
    height: 135px;
    background-color: var(--navy-blue);
  }

  .hover-circle {
    position: absolute;
    top: var(--mouse-y);
    left: var(--mouse-x);
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    animation: circle-expand var(--animation-duration) var(--bezier-smooth) forwards;
    z-index: 1;
  }

  @keyframes circle-expand {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: 300%;
      height: 300%;
    }
  }

  .banner-orange .hover-circle { background-color: #f3996e; }
  .banner-purple .hover-circle { background-color: #8981ee; }
  .banner-red .hover-circle { background-color: #eb6273; }
  .banner-green .hover-circle { background-color: #96ffd9; }

  .fh-item--banner {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    overflow: visible;
  }

  .service-banner-text {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    z-index: 2;
    padding-left: 2rem;
    text-align: left;
    transform: translateY(0);
    transition: transform var(--animation-duration) var(--bezier-smooth);
    will-change: transform;
  }

  .fh-section--banners-banner:hover .service-banner-text {
    transform: translateY(-100%);
  }

  .fh-section--banners-banner:hover .service-banner-text h2 {
    color: var(--navy-blue);
    transition: color var(--animation-duration) var(--bezier-smooth);
  }

  .fh-item--banner__marquee {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    opacity: 0;
    z-index: 1;
    transform: translateY(100%);
    transition: transform var(--animation-duration) var(--bezier-smooth),
                opacity var(--animation-duration) var(--bezier-smooth);
  }

  .fh-section--banners-banner:hover .fh-item--banner__marquee {
    opacity: 1;
    transform: translateY(0);
  }

  .fh-item--banner__marquee > div {
    display: flex;
    align-items: center;
    white-space: nowrap;
    animation: marquee 20s linear infinite;
    text-align: left;
    padding-left: 2rem;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .fh-item--banner__seperator {
    display: flex;
    align-items: center;
    margin: 0 2rem;
    color: var(--navy-blue);
  }

  h2 {
    font-size: var(--font--base);
    color: white;
    font-weight: normal;
    margin: 0;
    text-align: left;
    transition: color var(--animation-duration) var(--bezier-smooth);
  }

  .service-banner-text h2 {
    padding-left: 0;
  }

  .fh-section--banners-banner:hover .fh-item--banner__marquee h2 {
    color: var(--navy-blue);
  }

  .fh-section--banners-banner:hover h2 {
    color: var(--navy-blue);
  }
`;
document.head.appendChild(style);

export default BannerSection;