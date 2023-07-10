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
import CountDownTwo from "../../wrappers/countdown/CountDownTwo";
import BannerFive from "../../wrappers/banner/BannerFive";

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
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" spaceBottomClass="mb-10"/>

{/* {all categories} */}
        <BannerFive />

        {/* Category */}
        <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-65" />

        
        {/* tab product */}
        <TabProductFive spaceBottomClass="pb-40" tag="accessories" />
       
       

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
        <NewsletterTwo
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="green-subscribe"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;