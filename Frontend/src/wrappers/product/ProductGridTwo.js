import { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper, { SwiperSlide } from '../../components/swiper';
import { useSelector } from 'react-redux';
import { getProducts } from '../../helpers/product';
import ProductGridSingleTwo from '../../components/product/ProductGridSingleTwo';
// import Slider from "../../components/carousal";
// import { slideData } from "../../components/carousal";
import BrandLogoSliderFive from '../brand-logo/BrandLogoSliderFive';

const settings = {
  loop: true,
  speed: 200,
  navigation: true,
  grabCursor: true,
  spaceBetween: 300,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};

const ProductGridTwo = ({
  spaceBottomClass,
  colorClass,
  titlePriceClass,
  tag,
  type,
  limit,
}) => {
  const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getProducts(products, tag, type, limit);

  console.log(prods, 'data');

  return (
    <Fragment>
      <div className={clsx('slider-area')}>
        <div className='slider-active nav-style-2'>
          {prods && (
            <Swiper options={settings}>
              {prods.map((product, key) => (
                <SwiperSlide key={key}>
                  <div
                    className={`col-xl-9 col-md-12 col-lg-9 col-sm-12 ${
                      key === 0
                        ? 'left-card'
                        : key === prods.length - 1
                        ? 'right-card'
                        : ''
                    }`}
                    key={product.id}
                  >
                    <ProductGridSingleTwo
                      spaceBottomClass={spaceBottomClass}
                      colorClass={colorClass}
                      product={product}
                      currency={currency}
                      cartItem={cartItems.find(
                        (cartItem) => cartItem.id === product.id
                      )}
                      wishlistItem={wishlistItems.find(
                        (wishlistItem) => wishlistItem.id === product.id
                      )}
                      compareItem={compareItems.find(
                        (compareItem) => compareItem.id === product.id
                      )}
                      titlePriceClass={titlePriceClass}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProductGridTwo.propTypes = {
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
  tag: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number,
};

export default ProductGridTwo;
