import styles from './sliderSection.module.css';
import useStyles from '../../hooks/useStyles';
import { useLayoutEffect, useContext } from 'react';

import { MasterTimelineCtx } from '../../context/MasterTimelineContext';
import { sliderSectionTimeline } from './sliderSectionAnimation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const SliderSection = () => {
  const { setClass } = useStyles(styles);

  const timelineCtx = useContext(MasterTimelineCtx);
  // Necessary to prevent adding the same timeline,
  // multiple times in the master timenline
  useLayoutEffect(() => {
    timelineCtx?.timeline.add(sliderSectionTimeline());
  }, [timelineCtx]);

  return (
    <div className={setClass(['section', 'sliderSection'])}>
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation={{
          enabled: true,
          prevEl: '.sliderSection__slider--prevButton',
          nextEl: '.sliderSection__slider--nextButton',
          disabledClass: setClass(
            'sliderSection__slider__navigationButton--disabled'
          ),
        }}
      >
        <SwiperSlide>
          <img src="/cozinha-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cozinha-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cozinha-3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cozinha-4.png" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className={setClass(['sliderSection__slider--prevButton'])}></div>
      <div className={setClass(['sliderSection__slider--nextButton'])}></div>
    </div>
  );
};
export default SliderSection;
