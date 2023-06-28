import { gsap } from 'gsap';

export const thirdSectionTimeline = () =>
  gsap
    .timeline()
    .set(['.headingContainer', '.descriptionContainer'], {
      autoAlpha: 0,
      y: 30,
    })
    // .set('.thirdSection', {
    //   filter: 'brightness(50%)',
    // })
    .set('.darthVaderContainer', {
      xPercent: 100,
    })
    .to('.thirdSection', {
      autoAlpha: 1,
      duration: 3,
    })
    .to(
      '.thirdSection',
      {
        filter: 'brightness(100%) saturate(100%)',
        ease: 'rough',
        delay: 0.5,
        duration: 0.55,
      },
      '<'
    )
    .to('.thirdSection', {
      filter: 'brightness(70%) saturate(100%)',
      ease: 'rough',
      duration: 0.55,
      delay: 1,
    })
    .to('.thirdSection', {
      filter: 'brightness(100%) saturate(100%)',
      ease: 'rough',
      delay: 0.5,
      duration: 0.55,
    })
    .to('.thirdSection', {
      filter: 'brightness(70%) saturate(100%)',
      ease: 'rough',
      duration: 0.55,
      delay: 1,
    })
    .to('.thirdSection', {
      filter: 'brightness(100%) saturate(102%)',
      ease: 'rough',
      duration: 0.56,
    })
    .to(
      ['.headingContainer', '.descriptionContainer'],
      {
        delay: 0,
        autoAlpha: 1,
        duration: 5,
        stagger: 0.25,
        y: 0,
      },
      '>'
    )
    .set(
      '.darthVaderContainer',
      {
        autoAlpha: 0,
      },
      '<'
    )
    .to(
      '.darthVaderContainer',
      {
        autoAlpha: 1,
        xPercent: 0,
        duration: 5,
      },
      '<'
    )
    .to('.thirdSection', {
      delay: 10,
      autoAlpha: 0,
      duration: 4,
    });
