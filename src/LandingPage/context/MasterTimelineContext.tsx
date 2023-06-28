import { useState, createContext, useLayoutEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { IRefDependencies } from '../types';

interface IProps {
  refDependencies: IRefDependencies;
  children: ReactNode;
}

interface IMasterTimelineValue {
  timeline: GSAPTimeline;
  conditions: {
    isMobile?: boolean;
    isDesktop?: boolean;
  };
}

export const MasterTimelineCtx = createContext<IMasterTimelineValue | null>(
  null
);

const MasterTimelineContextProvider = ({
  refDependencies,
  children,
}: IProps) => {
  const [masterTimeline, setMasterTimeline] =
    useState<IMasterTimelineValue | null>(null);

  useLayoutEffect(() => {
    const { sceneRef } = refDependencies;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: '(min-width: 1024px)',
          isMobile: '(max-width: 1023px)',
        },
        (context) => {
          const { isMobile, isDesktop } = context.conditions as gsap.Conditions;

          const master = gsap.timeline({
            scrollTrigger: {
              trigger: sceneRef.current,
              start: 'top top',
              end: `bottom+=5000 top`,
              markers: true,
              scrub: 2.5,
              pin: true,
            },
          });

          master.set(['.section:not(.firstSection)'], {
            autoAlpha: 0,
          });

          return setMasterTimeline({
            timeline: master,
            conditions: {
              isDesktop,
              isMobile,
            },
          });
        }
      );
    });

    return () => ctx.revert();
  }, [refDependencies]);

  return (
    <MasterTimelineCtx.Provider value={masterTimeline}>
      {children}
    </MasterTimelineCtx.Provider>
  );
};

export default MasterTimelineContextProvider;
