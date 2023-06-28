import { gsap } from 'gsap';

export const sliderSectionTimeline = () =>
  gsap.timeline().to(
    '.sliderSection',
    {
      autoAlpha: 1,
      duration: 4,
    },
    '<'
  );
