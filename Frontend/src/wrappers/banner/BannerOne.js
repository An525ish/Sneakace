import PropTypes from "prop-types";
import clsx from "clsx";
import bannerData from "../../data/banner/banner-one.json";
import BannerOneSingle from "../../components/banner/BannerOneSingle.js";
import SectionTitle from "../../components/section-title/SectionTitle";
import { Link } from "react-router-dom";

const BannerOne = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
      <SectionTitle
          titleText=" TOP CATEGORIES"
          positionClass="text-center"
          spaceClass="mb-55"
        />
        <div className="row">
          {bannerData?.map((single, key) => (
            <div className="col-lg-4 col-md-4" key={key}>
              <BannerOneSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </div>
          ))}
        </div>
        <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shop-grid-standard"}
          >
            VIEW ALL CATEGORIES
          </Link>
        </div>
      </div>
    </div>
  );
};

BannerOne.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerOne;
