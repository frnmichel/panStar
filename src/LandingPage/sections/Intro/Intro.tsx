import { useContext, useLayoutEffect } from 'react';
import ScrollDownCallToAction from '../../components/ScrollDownCallToAction/ScrollDownCallToAction';
import { MasterTimelineCtx } from '../../context/MasterTimelineContext';

import styles from './intro.module.css';
import useStyles from '../../hooks/useStyles';
import { introTimeline } from './IntroAnimation';
import { gsap } from 'gsap';
import { RoughEase } from 'gsap/EasePack';

const Intro = () => {
  const { setClass } = useStyles(styles);
  const timelineCtx = useContext(MasterTimelineCtx);

  useLayoutEffect(() => {
    if (!timelineCtx) return;
    timelineCtx.timeline.add(introTimeline());
  }, [timelineCtx]);

  useLayoutEffect(() => {
    gsap.registerPlugin(RoughEase);

    gsap
      .timeline()
      .set('.firstSection__bg', {
        filter: 'saturate(1.1)',
      })
      .to('.firstSection__bg', {
        ease: 'rough',
        filter: 'saturate(0)',
        duration: gsap.utils.random([1, 2, 3, 5, 0.5]),
        repeatDelay: gsap.utils.random([1, 2, 3, 4, 2.5]),
        repeat: -1,
      });
  }, []);

  return (
    <div className={setClass(['section', 'firstSection'])}>
      <img
        className={setClass('firstSection__bg')}
        src="/productLP-starwars__darthvader--desktop.jpg"
        alt="Fundo com o vilão Darth Vader da séries Star Wars, Disney"
      />
      <div className={setClass('firstSection__bg__overlay')}></div>
      <div className={setClass('firstSection__content')}>
        <p>Você não pode fugir do seu destino</p>
        <img
          src="/productLP-StarWars-Logo.png"
          alt="Star Wars, marca registrada Disney"
        />
      </div>
      <div className={setClass('firstSection__footer')}>
        <img
          src="/productLP-Starwars-Intro-Disney.png"
          alt="Disney Trademark"
        />
        <div className={setClass('firstSection__footer__lucasFilmContainer')}>
          <img
            src="/productLP-Starwars-Intro-LucasFilm-CopyRight.png"
            alt="LucasFilm Ltd. Copyrights"
          />
          <img
            src="productLP-Starwars-Intro-LucasFilm-Logo.png"
            alt="LucasFilm Ltd. Trademark"
          />
        </div>
      </div>
      <ScrollDownCallToAction />
    </div>
  );
};
export default Intro;
