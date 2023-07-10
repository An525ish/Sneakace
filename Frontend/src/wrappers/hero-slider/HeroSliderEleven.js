import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from '../../components/swiper';
import HeroSliderElevenSingle from '../../components/hero-slider/HeroSliderElevenSingle';
import sliderData from '../../data/hero-sliders/hero-slider-eleven.json';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const params = {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  // pagination: true,
  autoHeight: false,
  navigation: true,
  slidesPerView: 1,
  spaceBetween: 10
};

const HeroSliderEleven = () => {
  return (
    <div className='slider-area'>
      <div className='container'>
        <div className='slider-active slider-hm8 nav-style-1'>
          {sliderData && (
            <Swiper options={params} className='preview-slide centered-slides'>
              {sliderData.map((single, key) => (
                <SwiperSlide key={key}>
                  <HeroSliderElevenSingle data={single} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSliderEleven;
