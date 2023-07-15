import clsx from "clsx";
import SectionTitle from "../../components/section-title/SectionTitle";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../../helpers/product";
// import ProductGridSingleTwo from "../../components/product/ProductGridSingleTwo";
import ProductGridSingleFive from "../../components/product/ProductGridSingleFive";


const RelatedProductSlider = ({
  // sliderClassName,
  spaceBottomClass,
  tag,
  type,
  limit,
}) => {
  const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getProducts(products, tag, type, limit)

  return (
    <Fragment>
      <div className={clsx("related-product-area", spaceBottomClass)}>
        <div className="container">
          <SectionTitle
            titleText="Related Products"
            positionClass="text-center"
            spaceClass="mb-50"
          />
          <div className="related-products">
            {prods?.map(product => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 " key={product.id}>
                <ProductGridSingleFive
                  // // sliderClassName={sliderClassName}
                  spaceBottomClass={spaceBottomClass}
                  product={product}
                  currency={currency}
                  cartItem={
                    cartItems.find((cartItem) => cartItem.id === product.id)
                  }
                  wishlistItem={
                    wishlistItems.find(
                      (wishlistItem) => wishlistItem.id === product.id
                    )
                  }
                  compareItem={
                    compareItems.find(
                      (compareItem) => compareItem.id === product.id
                    )
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

RelatedProductSlider.propTypes = {
  // sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  tag: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};

export default RelatedProductSlider;
