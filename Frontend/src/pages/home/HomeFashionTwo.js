import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import BannerOne from "../../wrappers/banner/BannerOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
import TabProductFive from "../../wrappers/product/TabProductFive";
import Newsletter from "../../wrappers/newsletter/Newsletter";
import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import TestimonialThree from "../../wrappers/testimonial/TestimonialThree";
import TestimonialTwo from "../../wrappers/testimonial/TestimonialTwo";
import TestimonialFour from "../../wrappers/testimonial/TestimonialFour";

import CountDownTwo from "../../wrappers/countdown/CountDownTwo";
import BannerFive from "../../wrappers/banner/BannerFive";
import HeroSliderEleven from "../../wrappers/hero-slider/HeroSliderEleven";
import HeroSliderThirteen from "../../wrappers/hero-slider/HeroSliderThirteen";
import HeroSliderEight from "../../wrappers/hero-slider/HeroSliderEight";
import HeroSliderTwo from "../../wrappers/hero-slider/HeroSliderTwo";
import SliderBanner from "../../wrappers/slider-banner/SliderBanner";
import HeroSliderSix from "../../wrappers/hero-slider/HeroSliderSix";
import HeroSliderFive from "../../wrappers/hero-slider/HeroSliderFive";
import HeroSliderTwentyOne from "../../wrappers/hero-slider/HeroSliderTwentyOne";

const HomeFashionTwo = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        {/* <HeroSliderEleven /> */}
        <HeroSliderTwentyOne />

        {/* banner */}
        <BannerFive />

        {/* tab product */}
        <TabProductFive spaceBottomClass='pb-40' tag='accessories' />

        {/* cutomized */}
        <CountDownTwo
          spaceTopClass="pt-80"
          spaceBottomClass="pb-95"
          dateTime="November 13, 2023 12:12:00"
        />
        
        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        />
      
       

        {/* newsletter */}
        {/* <NewsletterTwo
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="green-subscribe"
        /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
