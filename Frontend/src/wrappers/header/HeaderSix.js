import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import IconGroup from '../../components/header/IconGroup';
import MobileMenu from '../../components/header/MobileMenu';
import OffcanvasMenu from '../../components/header/OffcanvasMenu';
import logo from '../../assets/img/logo 3.png'

const HeaderSix = ({ layout, headerPaddingClass, headerBgClass }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [offcanvasActive, setOffcanvasActive] = useState(false);

  const location = useLocation()

  useEffect(() => {
    const header = document.querySelector('.sticky-bar');
    setHeaderTop(header.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const getActiveState = (state) => {
    setOffcanvasActive(state);
  };

  return (
    <header
      className={clsx(
        'header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar header-hm-7',
        headerBgClass,
        headerPaddingClass,
        location.pathname === '/' ? scroll > headerTop && 'stick' : 'stick'
      )}
    >
      <div className={layout === 'container-fluid' ? layout : 'container'}>
        <div className='row'>
          <div className='col-xl-5 col-lg-6 d-none d-lg-block'>
            <div className='clickable-menu clickable-mainmenu-active'>
              <button
                className={`${
                  scroll > headerTop ? 'text-warning' : 'text-white'
                }`}
                onClick={() => {
                  setOffcanvasActive(true);
                }}
              >
                <i className='pe-7s-menu' />
              </button>
            </div>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-6 col-6'>
            {/* header logo */}
            <div className='logo text-center logo-hm5'>
              <Link className='sticky-none' to={process.env.PUBLIC_URL + '/'}>
                {/* <img alt="" src="assets/img/logo/logo-2.png" /> */}
                {/* <h1
                  className={`logo-text animated-gucci ${
                    scroll > headerTop ? 'text-warning' : 'text-dark'
                  }`}
                  style={{ color: scroll > headerTop ? 'gold' : 'inherit' }}
                >
                  SNEAKACE
                </h1> */}
              </Link>
              <Link className='sticky-block' to={process.env.PUBLIC_URL + '/'}>
                {/* <img alt="" src="assets/img/logo/logo.png" /> */}
                <h1
                  className={`logo-text animated-gucci ${
                    scroll > headerTop ? 'text-warning' : 'text-warning'
                    // scroll > headerTop ? 'text-warning' : 'text-dark'
                  }`}
                  style={{ display: 'flex', fontWeight: '600'}}
                >
                  <img className='header-logo' src={logo} alt="logo" />
                  SNEAKACE
                </h1>
              </Link>
            </div>
          </div>
          <div className='col-xl-5 col-lg-4 col-md-6 col-6'>
            {/* Icon group */}
            {scroll > headerTop ? (
              <IconGroup iconWhiteClass='header-right-wrap-gold' />
            ) : (
              <IconGroup iconWhiteClass='header-right-wrap-white'/>
            )}
          </div>
        </div>
      </div>
      {/* offcanvas menu */}
      <OffcanvasMenu
        activeState={offcanvasActive}
        getActiveState={getActiveState}
      />
      {/* mobile menu */}
      <MobileMenu />
    </header>
  );
};

HeaderSix.propTypes = {
  headerBgClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  layout: PropTypes.string,
};

export default HeaderSix;
