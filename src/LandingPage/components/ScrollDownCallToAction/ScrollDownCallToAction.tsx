import React, { useLayoutEffect } from 'react';
import styles from './scrollDownCallToAction.module.css';
import { gsap } from 'gsap';

// import { Container } from './styles';
const isMobile = window.matchMedia('(max-width: 1023px)').matches;

const ScrollDownCallToAction: React.FC = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.set(['.arrows svg'], {
      autoAlpha: 0,
    });
    tl.to(
      '.arrows svg',
      {
        ease: 'power3.easeOut',
        stagger: 0.25,
        duration: 0.6,
        autoAlpha: 1,
        y: 20,
        repeat: -1,
        repeatDelay: 1,
      },
      '<'
    );
  }, []);

  return (
    <div className={`${styles.scrollCta} scrollCta`}>
      <div>{isMobile ? 'Arraste' : 'Role'} para conhecer</div>
      <div className={`${styles.arrows} arrows`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 84 32"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <path
            d="M43.313 31.427a3.09 3.09 0 0 1-1.742.532 3.09 3.09 0 0 1-1.742-.532L1.29 5.318C-.08 4.39-.411 2.566.551 1.244S3.404-.396 4.774.531l36.797 24.931L78.368.531c1.37-.927 3.261-.608 4.222.713s.632 3.146-.738 4.074L43.313 31.427z"
            fill="#fff"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 84 32"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <path
            d="M43.313 31.427a3.09 3.09 0 0 1-1.742.532 3.09 3.09 0 0 1-1.742-.532L1.29 5.318C-.08 4.39-.411 2.566.551 1.244S3.404-.396 4.774.531l36.797 24.931L78.368.531c1.37-.927 3.261-.608 4.222.713s.632 3.146-.738 4.074L43.313 31.427z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollDownCallToAction;
