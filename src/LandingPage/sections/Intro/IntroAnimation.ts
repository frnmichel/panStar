import { gsap } from 'gsap';

export const introTimeline = () =>
  gsap
    .timeline()
    .to(
      ['.scrollCta'],
      {
        y: -110,
        duration: 5,
        ease: 'power3.easeOut',
      },
      '<'
    )
    .to(
      '.firstSection__content',
      {
        yPercent: -30,
        duration: 5,
        ease: 'power3.easeOut',
      },
      '<'
    )
    .to(
      '.firstSection__bg',
      {
        yPercent: -2,
        duration: 5,
        ease: 'power3.easeOut',
      },
      '<'
    )
    .to(
      [
        '.scrollCta',
        '.firstSection__content',
        '.firstSection__bg',
        '.firstSection__footer',
      ],
      {
        delay: 1.5,
        autoAlpha: 0,
        stagger: 1,
        duration: 3,
      },
      '<'
    )
    .set('.firstSection', {
      autoAlpha: 0,
    });
