import { gsap } from 'gsap';

export const secondSectionTimeline = () =>
  gsap
    .timeline({
      onStart: () => {
        const videoEl: HTMLVideoElement | null = document.querySelector(
          '.secondSection video'
        );
        if (!videoEl) return;
        videoEl.currentTime = 0;
        videoEl?.play();
      },
    })
    .set(
      '.secondSection',
      {
        autoAlpha: 1,
      },
      '<'
    )
    .set('.secondSection video', {
      autoAlpha: 0,
    })
    .set(
      [
        '.secondSection__container__textContent__title',
        '.secondSection__container__textContent p',
        '.secondSection__container__textContent button',
      ],
      {
        y: 30,
        autoAlpha: 0,
      },
      '<'
    )
    .to(
      [
        '.secondSection__container__textContent__title',
        '.secondSection__container__textContent p',
        '.secondSection__container__textContent button',
        '.secondSection video',
      ],
      {
        y: 0,
        autoAlpha: 1,
        duration: 5,
      }
    )
    .to('.secondSection', {
      duration: 5,
    })
    .to(
      [
        '.secondSection__container__textContent__title',
        '.secondSection__container__textContent p',
        '.secondSection__container__textContent button',
        '.secondSection video',
      ],
      {
        delay: 10,
        autoAlpha: 0,
        duration: 3,
      }
    )
