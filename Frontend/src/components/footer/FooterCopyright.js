import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/img/logo 3.png"
const FooterCopyright = ({spaceBottomClass, colorClass }) => {
  return (
    <div className={clsx("copyright", spaceBottomClass, colorClass)}>
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          {/* <img alt="" src={process.env.PUBLIC_URL + footerLogo} /> */}
          <h2>SNEAKACE</h2>
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://hasthemes.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          SNEAKACE
        </a>
        .<br /> All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
