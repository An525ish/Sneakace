import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { getProductCartQuantity } from "../../helpers/product";
import Rating from "./sub-components/ProductRating";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare } from "../../store/slices/compare-slice";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";
import ProductImageFixed from "../../components/product/ProductImageFixed";

const ProductDescriptionInfo = ({
  spaceTopClass,
  spaceBottomClass,
  product,
  discountedPrice,
  currency,
  finalDiscountedPrice,
  finalProductPrice,
  cartItems,
  wishlistItem,
  compareItem,
  galleryType
}) => {
  const dispatch = useDispatch();
  const [selectedID, setSelectedID] = useState(0);
  const [selectPattern,setSelectPattern]=useState(0);
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock
  );
  const [quantityCount, setQuantityCount] = useState(1);

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  console.log(selectPattern, "id");

  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container" >
        <div className="row">
      <div className="col-lg-6 col-md-6" style={{width:'40%'}}>
        {/* product image gallery */}
        {galleryType === "leftThumb" ? (
          <ProductImageGallerySideThumb
            product={product}
            thumbPosition="left"
          />
        ) : galleryType === "rightThumb" ? (
          <ProductImageGallerySideThumb product={product} />
        ) : galleryType === "fixedImage" ? (
          <ProductImageFixed product={product} />
        ) : (
          <ProductImageGallery product={product} id={selectedID} pattern={selectPattern} />
        )}
      </div>
      <div className="product-details-content ml-70" style={{width:'50%'}}>
        <h2>{product.name}</h2>
        <div className="product-details-price">
          {discountedPrice !== null ? (
            <Fragment>
              <span>{currency.currencySymbol + finalDiscountedPrice}</span>{" "}
              <span className="old">
                {currency.currencySymbol + finalProductPrice}
              </span>
            </Fragment>
          ) : (
            <span>{currency.currencySymbol + finalProductPrice} </span>
          )}
        </div>
        {product.rating && product.rating > 0 ? (
          <div className="pro-details-rating-wrap">
            <div className="pro-details-rating">
              <Rating ratingValue={product.rating} />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="pro-details-list">
          <p>{product.shortDescription}</p>
        </div>

        {product.variation ? (
          <div className="pro-details-size-color">
            <div className="pro-details-color-wrap">
              <span>Color</span>
              <div className="pro-details-color-content">
                {product.variation.map((single, key) => {
                  return (
                    <label
                      className={`pro-details-color-content--single ${single.color}`}
                      key={key}
                    >
                      <input
                        type="radio"
                        value={single.color}
                        name="product-color"
                        checked={
                          single.color === selectedProductColor ? "checked" : ""
                        }
                        onChange={() => {
                          setSelectedID(key);
                          setSelectedProductColor(single.color);
                          setSelectedProductSize(single.size[0].name);
                          setProductStock(single.size[0].stock);
                          setQuantityCount(1);
                        }}
                      />
                      <span className="checkmark"></span>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="pro-details-size">
              <span>Pattern</span>
              <div className="pro-details-size-content">
                {product.variation &&
                  product.variation.map(single => {
                    return single.color === selectedProductColor
                      ? single.size.map((singleSize, key) => {
                        return (
                          <label
                            className={`pro-details-size-content--single`}
                            key={key}
                          >
                            <input
                              type="radio"
                              value={singleSize.name}
                              checked={
                                singleSize.name === selectedProductSize
                                  ? "checked"
                                  : ""
                              }
                              onChange={() => {
                                setSelectPattern(key)
                                setSelectedProductSize(singleSize.name);
                                setProductStock(singleSize.stock);
                                setQuantityCount(1);
                              }}
                            />
                            <span className="size-name">{singleSize.name}</span>
                          </label>
                        );
                      })
                      : "";
                  })}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {product.affiliateLink ? (
          <div className="pro-details-quality">
            <div className="pro-details-cart btn-hover ml-0">
              <a
                href={product.affiliateLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                Buy Now
              </a>
            </div>
          </div>
        ) : (
          <div className="pro-details-quality">
            <div className="cart-plus-minus">
              <button
                onClick={() =>
                  setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                }
                className="dec qtybutton"
              >
                -
              </button>
              <input
                className="cart-plus-minus-box"
                type="text"
                value={quantityCount}
                readOnly
              />
              <button
                onClick={() =>
                  setQuantityCount(
                    quantityCount < productStock - productCartQty
                      ? quantityCount + 1
                      : quantityCount
                  )
                }
                className="inc qtybutton"
              >
                +
              </button>
            </div>
            <div className="pro-details-cart btn-hover">
              {productStock && productStock > 0 ? (
                <button
                  onClick={() =>
                    dispatch(addToCart({
                      ...product,
                      quantity: quantityCount,
                      selectedProductColor: selectedProductColor ? selectedProductColor : product.selectedProductColor ? product.selectedProductColor : null,
                      selectedProductSize: selectedProductSize ? selectedProductSize : product.selectedProductSize ? product.selectedProductSize : null
                    }))
                  }
                  disabled={productCartQty >= productStock}
                >
                  {" "}
                  Add To Cart{" "}
                </button>
              ) : (
                <button disabled>Out of Stock</button>
              )}
            </div>
            <div className="pro-details-wishlist">
              <button
                className={wishlistItem !== undefined ? "active" : ""}
                disabled={wishlistItem !== undefined}
                title={
                  wishlistItem !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                onClick={() => dispatch(addToWishlist(product))}
              >
                <i className="pe-7s-like" />
              </button>
            </div>
            <div className="pro-details-compare">
              <button
                className={compareItem !== undefined ? "active" : ""}
                disabled={compareItem !== undefined}
                title={
                  compareItem !== undefined
                    ? "Added to compare"
                    : "Add to compare"
                }
                onClick={() => dispatch(addToCompare(product))}
              >
                <i className="pe-7s-shuffle" />
              </button>
            </div>
          </div>
        )}
        {product.category ? (
          <div className="pro-details-meta">
            <span>Categories :</span>
            <ul>
              {product.category.map((single, key) => {
                return (
                  <li key={key}>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {single}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
        {product.tag ? (
          <div className="pro-details-meta">
            <span>Tags :</span>
            <ul>
              {product.tag.map((single, key) => {
                return (
                  <li key={key}>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      {single}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="pro-details-social">
          <ul>
            <li>
              <a href="//facebook.com">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="//dribbble.com">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a href="//pinterest.com">
                <i className="fa fa-pinterest-p" />
              </a>
            </li>
            <li>
              <a href="//twitter.com">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="//linkedin.com">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  cartItems: PropTypes.array,
  compareItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({})
};

export default ProductDescriptionInfo;
