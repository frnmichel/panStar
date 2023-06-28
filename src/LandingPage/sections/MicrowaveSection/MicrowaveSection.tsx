import styles from './microwaveSection.module.css';
import useStyles from '../../hooks/useStyles';
import { useContext, useLayoutEffect } from 'react';
import { MasterTimelineCtx } from '../../context/MasterTimelineContext';
import { microwaveSectionTimeline } from './microwaveSectionAnimation';

const MicrowaveSection = () => {
  const { setClass } = useStyles(styles);

  const timelineCtx = useContext(MasterTimelineCtx);

  // Necessary to prevent adding the same timeline,
  // multiple times in the master timenline
  useLayoutEffect(() => {
    if (!timelineCtx) return;
    timelineCtx.timeline.add(microwaveSectionTimeline());
  }, [timelineCtx]);

  return (
    <div className={setClass(['section', 'spaceSection'])}>
      <img
        className={setClass(['spaceBackground', 'spaceBackground--01'])}
        src="/productLP__spaceBG--01.jpg"
        alt="Space background"
      />
      <img
        className={setClass(['spaceBackground', 'spaceBackground--02'])}
        src="/productLP__spaceBG--02.jpg"
        alt="Space background"
      />
      <div className={setClass(['microwaveContainer', 'container'])}>
        <img
          src="/productLP__microwave--starWars.png"
          alt="Microondas Panasonic - Edição limitada Star Wars - Disney"
        />
        <p>Acabamento Exclusivo</p>
      </div>
      <div className={setClass(['fridgeContainer', 'container'])}>
        <img
          src="/productLP__fridge--starWars.png"
          alt="Geladeira Panasonic - Edição limitada Star Wars - Disney"
        />
        <p>Design integrado com toda a linha Black Glass</p>
      </div>
      <div className={setClass(['detailsContainer', 'container'])}>
        <img
          src="/productLP__details--starWars.png"
          alt="Geladeira Panasonic - Edição limitada Star Wars - Disney"
        />
        <p>Detalhes internos customizados</p>
      </div>
      <div className={setClass(['endingContainer', 'container'])}>
        <p>Criados pra você mostrar seu amor pela saga</p>
      </div>
    </div>
  );
};
export default MicrowaveSection;
