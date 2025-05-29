import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../ComponentStyle/Navbar.css';
import LogoWhite from '/assets/img/logo.png';
import LogoBlack from '/assets/img/black-Logo.png';
import { motion, AnimatePresence } from 'framer-motion';
import CartSidebar from './CartSidebar';
import { MenuContext } from '../Context/MenuProvider';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { menu, toggleMenu } = useContext(MenuContext);
  const location = useLocation();

  const [isClosing, setIsClosing] = useState(false);

  const whitePaths = ['/'];
  const isWhiteTheme = whitePaths.includes(location.pathname);
  const currentLogo = isWhiteTheme ? LogoWhite : LogoBlack;
  const textColorClass = isWhiteTheme ? 'text-white' : 'text-black';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const sidebarVariants = {
    hidden: { opacity: 0, x: '-0%' },
    visible: {
      opacity: 1,
      x: '0%',
      transition: {
        when: 'beforeChildren',
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 1,
      x: '-23%',
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: {
      opacity: 1,
      x: '-0%',
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 1,
      x: '-100%',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const ulVariants = {
    visible: {
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.15,
        staggerDirection: -1,
      },
    },
    hidden: {},
    exit: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const menuItems = [
    'Textiles',
    'Bed',
    'Bathware Assortment',
    'Bedroom',
    'Living Lounge',
    'Office Space',
    'Entertainment Area',
    'Kids Room',
  ];

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      toggleMenu();
      setIsClosing(false);
    }, 40);    
  };

  return (
    <>
      <CartSidebar />
      <nav
        className={`rolls-navbar ${!isWhiteTheme ? 'not-home' : ''} ${
          scrolled && !menu ? 'scrolled' : ''
        }`}
      >
        <div className="container">
          <div className="navbar-content">
            <div className="row align-items-center">
              <div className="col-3">
                {!menu && (
                  <Link onClick={toggleMenu} to="#" aria-label="Open menu">
                    <i className={`fa-solid fa-bars fs-22 ${textColorClass}`}></i>
                  </Link>
                )}
              </div>
              <div className="col-6 text-center">
                <Link to="/">
                  <img className="img-fluid logo-img" src={currentLogo} alt="Logo" />
                </Link>
              </div>
              <div className="col-3 text-end">
                <p className={`fs-15 mb-0 p-0 ${textColorClass}`}>Membership Program</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside>
        <AnimatePresence>
          {menu && (
            <>
              <motion.div
                onClick={handleCloseClick}
                className="asidebarWrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.aside
                className="asidebarOpen"
                variants={sidebarVariants}
                initial="hidden"
                animate={isClosing ? 'exit' : 'visible'}
                exit="exit"
              >
                <button
                  onClick={handleCloseClick}
                  className="bg-transparent border-0 fs-2 text-white"
                  aria-label="Close menu"
                >
                  ×
                </button>

                <motion.ul
                  className="text-end my-lg-3"
                  variants={ulVariants}
                  initial="hidden"
                  animate={isClosing ? 'exit' : 'visible'}
                  exit="exit"
                >
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="list-style-none py-sm-3 py-2"
                      variants={liVariants}
                    >
                      <Link
                        onClick={handleCloseClick}
                        to="/category"
                        className="text-decoration-none text-white fs-18 text-capitalize"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </aside>
    </>
  );
}

export default Navbar;
















