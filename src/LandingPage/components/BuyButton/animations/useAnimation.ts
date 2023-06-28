import { useLayoutEffect } from 'react';
import { IRefDependencies } from '../../../types';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useAnimation = (refDependencies: IRefDependencies) => {
  useLayoutEffect(() => {
    const { buyButtonContainerRef } = refDependencies;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isMobile } = context.conditions as gsap.Conditions;

          const tl = gsap.timeline();
          tl.to(buyButtonContainerRef.current, {
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 90%)',
            duration: 0.6,
          }).to(
            '.buyButton',
            {
              ease: 'back',
              startAt: {
                yPercent: 250,
                autoAlpha: 0,
              },
              yPercent: 0,
              autoAlpha: 1,
              duration: 0.65,
            },
            '<'
          );

          const master = gsap.timeline({
            scrollTrigger: {
              trigger: '.thirdSection',
              start: 'top top',
              end: `bottom center`,
              markers: true,
              // scrub: 2.5,
              // pin: true,
              onLeave: () => {
                if (!buyButtonContainerRef.current) return;
                buyButtonContainerRef.current.style.display = 'none';
              },
              onLeaveBack: () => {
                if (!buyButtonContainerRef.current) return;
                buyButtonContainerRef.current.style.display = 'none';
              },
              onEnter: () => {
                if (!buyButtonContainerRef.current) return;
                buyButtonContainerRef.current.style.display = 'block';
              },
            },
          });

          // master.to(buyButtonContainerRef.current, {
          //   yPercent: 10,
          // });
        }
      );
    });

    return () => ctx.revert();
  }, [refDependencies]);
};

export default useAnimation;
