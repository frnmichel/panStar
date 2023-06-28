import styles from './thirdSection.module.css';
import useStyles from '../../hooks/useStyles';
import { useContext, useLayoutEffect } from 'react';
import { MasterTimelineCtx } from '../../context/MasterTimelineContext';
import { thirdSectionTimeline } from './thirdSectionAnimation';
import { gsap } from 'gsap';

const ThirdSection = () => {
  const { setClass } = useStyles(styles);

  const timelineCtx = useContext(MasterTimelineCtx);

  // Necessary to prevent adding the same timeline,
  // multiple times in the master timenline
  useLayoutEffect(() => {
    if (!timelineCtx) return;
    timelineCtx.timeline.add(thirdSectionTimeline());

    const lightSaberAnimation = gsap
      .timeline()
      .set(
        ['.lightSaberContainer__light', '.lightSaberContainer__light__rays'],
        {
          autoAlpha: 0,
        }
      )
      .to(
        ['.lightSaberContainer__light', '.lightSaberContainer__light__rays'],
        {
          ease: 'ease.powerOut',
          y: -600,
          duration: 0.5,
        },
        '<'
      )
      .to(
        ['.lightSaberContainer__light', '.lightSaberContainer__light__rays'],
        {
          duration: 1.2,
          autoAlpha: 1,
        },
        '<'
      );

    lightSaberAnimation
      .play()
      .repeat(-1)
      .repeatDelay(gsap.utils.random(0.75, 1.75));

    const darhVaderAnimation = gsap
      .timeline()
      .set('.darthVaderContainer', {
        filter: 'brightness(100%)',
      })
      .to('.darthVaderContainer', {
        filter: 'brightness(80%)',
        ease: 'rough({strength: 1.5, clamp: true, randomize: true, points: 15 })',
        duration: 2,
      })
      .to('.darthVaderContainer', {
        filter: 'brightness(100%)',
        ease: 'rough({strength: 1.5, clamp: true, randomize: true, points: 15 })',
        duration: 2,
      });

    darhVaderAnimation.play().repeat(-1).repeatDelay(gsap.utils.random(1, 3));
  }, [timelineCtx]);

  return (
    <div className={setClass(['section', 'thirdSection'])}>
      <img
        className={setClass('thirdSection__bg')}
        src="/productLP-kitchen-starwars.jpg"
        alt="Cozinha modelo, apresentando os novos eletrodomésticos (geladeira e microondas Panasonic edição limitada Star Wars)"
      />
      <div className={setClass('headingContainer')}>
        <div>Linha</div>
        <h2>
          Black<span>Glass</span>
        </h2>
      </div>
      <div className={setClass('descriptionContainer')}>
        <p>Prepare sua cozinha</p>
        <p>para essa estreia épica</p>
      </div>
      <div className={setClass('darthVaderContainer')}>
        <img
          src="/productLP__darth-vader-thirdSection.png"
          alt="Darth Vader - Star Wars - Disney"
        />
        <div className={setClass('lightSaberContainer')}>
          <div className={setClass('lightSaberContainer__light')} />
          <div className={setClass('lightSaberContainer__light__rays')} />
        </div>
      </div>
    </div>
  );
};
export default ThirdSection;
