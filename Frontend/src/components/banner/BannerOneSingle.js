import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <>
      <div className={clsx("single-banner-2", spaceBottomClass)}>
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
      </div>
      <div className="banner-content">
        <Link to={process.env.PUBLIC_URL + data.link}>
        <h3>{data.title}</h3>
        <h4>
          {data.subtitle} <span>{data.price}</span>
        </h4>
        </Link>
      </div>
    </>
  );
};

BannerOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default BannerOneSingle;
