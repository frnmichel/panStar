import { gsap } from 'gsap';

export const microwaveSectionTimeline = () => {
  const tl = gsap
    .timeline()
    .set('.spaceBackground--01', {
      filter: 'contrast(200%)',
    })
    .set('.spaceBackground--02', {
      transform: 'scale(-1.25)',
    })
    .set('.microwaveSection', {
      autoAlpha: 0,
    })
    .set('.container:not(.detailsContainer) img', {
      autoAlpha: 0,
      transform: 'scale(0.9)',
    })
    .set('.container p', {
      autoAlpha: 0,
      y: 30,
    })
    .set('.detailsContainer img', {
      xPercent: -100,
      autoAlpha: 1,
    })
    .to(['.spaceSection'], {
      autoAlpha: 1,
      duration: 3,
    })

    .to(
      '.microwaveContainer img',
      {
        autoAlpha: 1,
        transform: 'scale(1)',
        duration: 4,
        delay: 1,
      },
      '<'
    )
    .to(
      '.microwaveContainer p',
      {
        autoAlpha: 1,
        duration: 4,
        y: 0,
      },
      '<'
    )
    .to('.microwaveContainer img', {
      delay: 10,
      autoAlpha: 0,
      transform: 'scale(.9)',
      duration: 4,
    })
    .to(
      '.microwaveContainer p',
      {
        autoAlpha: 0,
        y: 30,
        duration: 4,
      },
      '<'
    )
    .to('.fridgeContainer img', {
      autoAlpha: 1,
      transform: 'scale(1)',
      duration: 4,
    })
    .to(
      '.fridgeContainer p',
      {
        autoAlpha: 1,
        duration: 4,
        y: 0,
      },
      '<'
    )
    .to('.fridgeContainer img', {
      delay: 10,
      autoAlpha: 0,
      transform: 'scale(.9)',
      duration: 4,
    })
    .to(
      '.fridgeContainer p',
      {
        autoAlpha: 0,
        y: 30,
        duration: 4,
      },
      '<'
    )
    .to('.detailsContainer img', {
      xPercent: 0,
      duration: 4,
      delay: 1,
    })
    .to(
      '.detailsContainer p',
      {
        autoAlpha: 1,
        duration: 4,
        y: 0,
        delay: 2,
      },
      '<'
    )
    .to('.detailsContainer img', {
      ease: 'linear',
      xPercent: -100,
      duration: 4,
      delay: 10,
    })
    .to(
      '.detailsContainer p',
      {
        autoAlpha: 0,
        duration: 4,
        y: 30,
        delay: 1,
      },
      '<'
    )
    .to('.endingContainer p', {
      autoAlpha: 1,
      duration: 4,
      y: 0,
    })
    .to(
      '.endingContainer p',
      {
        autoAlpha: 0,
        y: 30,
        duration: 4,
      },
      '+=5'
    )
    .to(
      '.spaceSection',
      {
        autoAlpha: 0,
        duration: 4,
      },
      '-=1'
    );

  const parallaxTl = gsap
    .timeline({
      defaults: {
        ease: 'linear',
      },
    })
    .to(
      '.spaceBackground--01',
      {
        duration: tl.duration(),
        transform: 'scale(0.9)',
        filter: 'contrast(200%) brightness(0.8)',
      },
      '<'
    )
    .to(
      '.spaceBackground--02',
      {
        duration: tl.duration(),
        transform: 'scale(-1.5)',
      },
      '<'
    );

  tl.add(parallaxTl, 0);

  return tl;
};
