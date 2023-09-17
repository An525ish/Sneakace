import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
import sliderData from "../../data/hero-sliders/hero-slider-twenty-one.json";
import HeroSliderTwentyOneSingle from "../../components/hero-slider/HeroSliderTwentyOneSingle.js";
import { useEffect } from 'react';


const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: false,
  autoHeight: false
};

const HeroSliderTwentyOne = () => {

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth', 
      });
    }, 3000);
    return () => clearTimeout(scrollTimeout);
  }, []);


  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {sliderData && (
          <Swiper options={params}>
            {sliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderTwentyOneSingle
                  data={single}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderTwentyOne;
