import PropTypes from "prop-types";
import clsx from "clsx"
import Swiper, { SwiperSlide } from "../../components/swiper";
import testimonialData from "../../data/testimonial/testimonial-one.json";
import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";
import SectionTitle from "../../components/section-title/SectionTitle";

// swiper slider settings
const settings = {
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },
  loop: true,
  autoplay:{
    delay:15000,
  },
  speed:2000,
};

const TestimonialOne = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  testimonialClass,
}) => {
  return (
    <div className={clsx("testimonial-area",  bgColorClass)}>
      {/* <SectionTitle
      className="title"
          titleText="What our Customers Say"
          positionClass="text-center"
          spaceClass="mb-55"
        /> */}
        <div className="title-cont">
          <h2 className="title">What our Customers Say</h2>
        </div>

        {/* <h1 className="title">What our customers say</h1> */}
      <div className="container testimonial-container">
    
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="testimonial-active nav-style-1 nav-testi-style">
              {testimonialData && (
                <Swiper options={settings}>
                  {testimonialData.map((single, key) => (
                      <SwiperSlide key={key}>
                        <TestimonialOneSingle
                          data={single}
                          testimonialClass={testimonialClass}
                        />
                      </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialOne.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string
};

export default TestimonialOne;
