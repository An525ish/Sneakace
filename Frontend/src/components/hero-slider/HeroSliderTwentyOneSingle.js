import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo 3.png'

const HeroSliderTwentyOneSingle = ({ data }) => {
  return (
    <div
      className="single-slider-2 slider-height-2 d-flex align-items-center bg-img"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="">
            <div className="slider-content-2 slider-content-2--white slider-animated-1">
              <img src={logo} alt="" />
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <h3 className="animated no-style">{data.title}</h3>

              <div className="slider-btn btn-hover">
                {/* <Link
                  className="animated rounden-btn"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderTwentyOneSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderTwentyOneSingle;
