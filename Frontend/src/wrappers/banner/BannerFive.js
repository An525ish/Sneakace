
import { Link } from "react-router-dom";

const BannerFive = () => {
  return (
    <div className="banner-area-2 hm9-section-padding mt-5 ">
      <div className="container-fluid category p-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 ">
            <div className="row">
              <div className="col-lg-12">
                <div className="single-banner mb-20 " >
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-21.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-1">
                    <h3>Category 1 </h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-banner mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-22.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-1">
                    <h3>Category 2</h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner-23.jpg"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-4 banner-position-hm15-2">
                <span>-20% Off</span>
                <h2>Category</h2>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <div className="single-banner mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-24.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-2">
                    <h3>category 3</h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="single-banner mb-20">
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/banner/banner-25.jpg"
                      }
                      alt=""
                    />
                  </Link>
                  <div className="banner-content-3 banner-position-hm15-2">
                    <h3>Category 4 </h3>
                    <p>
                      Starting At <span>$99.00</span>
                    </p>
                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                      <i className="fa fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="extra-banner">
          <div className="col-lg-12 col-md-6 extra-banner-single1">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/banner/banner-25.jpg"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-3 banner-position-hm15-2">
                <h3>category 5</h3>
                <p>
                  Starting At <span>$39.00</span>
                </p>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-6 extra-banner-single2">
            <div className="single-banner mb-20">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/img/banner/banner-24.jpg"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-3 banner-position-hm15-2">
                <h3>category 6</h3>
                <p>
                  Starting At <span>$79.00</span>
                </p>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFive;
