// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../ComponentStyle/Navbar.css';
// import LogoWhite from '/assets/img/logo.png';
// import LogoBlack from '/assets/img/black-Logo.png';
// import { motion, AnimatePresence } from 'framer-motion';
// import CartSidebar from './CartSidebar';
// import { MenuContext } from '../Context/MenuProvider';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const { menu, toggleMenu } = useContext(MenuContext);
//   const location = useLocation();

//   const whitePaths = ['/']; 
//   const isWhiteTheme = whitePaths.includes(location.pathname);
//   const currentLogo = isWhiteTheme ? LogoWhite : LogoBlack;
//   const textColorClass = isWhiteTheme ? 'text-white' : 'text-black';

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [location.pathname]);

//   const sidebarVariants = {
//     hidden: { opacity: 0, x: '-100%' },
//     visible: {
//       opacity: 1,
//       x: '0px',
//       transition: {
//         when: 'beforeChildren',
//         staggerChildren: 0.1,
//         duration: .9,
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: '-100%',
//       transition: {
//         when: 'afterChildren',
//         duration: 0.5,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   const liVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0 },
//     exit: { opacity: 0 },
//   };

//   return (
//     <>
//       <CartSidebar />
//       <nav className={`rolls-navbar ${!isWhiteTheme ? 'not-home' : ''} ${scrolled && !menu ? 'scrolled' : ''}`}>
//         <div className="container"> 
//           <div className="navbar-content">
//             <div className="row align-items-center">
//               <div className="col-3">
//                 {!menu && (
//                   <Link onClick={toggleMenu} to="#">
//                     <i className={`fa-solid fa-bars fs-22 ${textColorClass}`}></i>
//                   </Link>
//                 )}
//               </div>
//               <div className="col-6 text-center">
//                 <Link to="/">
//                   <img className="img-fluid logo-img" src={currentLogo} alt="Logo" />
//                 </Link>
//               </div>
//               <div className="col-3 text-end">
//                 <p className={`fs-15 mb-0 p-0 ${textColorClass}`}>Membership Program</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <aside>
//         <AnimatePresence>
//           {menu && (
//             <>
//               <motion.div
//                 onClick={toggleMenu}
//                 className="asidebarWrapper"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               />

//               <motion.aside
//                 className="asidebarOpen"
//                 variants={sidebarVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <button onClick={toggleMenu} className="bg-transparent border-0 fs-2 text-white">×</button>
//                 <motion.ul
//                   className="text-end my-lg-3"
//                   variants={{
//                     visible: { transition: { staggerChildren: 0.1 } },
//                     hidden: {},
//                   }}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                 >
//                   {[
//                     'Textiles',
//                     'Bed',
//                     'Bathware Assortment',
//                     'Bedroom',
//                     'Living Lounge',
//                     'Office Space',
//                     'Entertainment Area',
//                     'Kids Room',
//                   ].map((item, index) => (
//                     <motion.li
//                       key={index}
//                       className="list-style-none py-sm-3 py-2"
//                       variants={liVariants}
//                     >
//                       <Link onClick={toggleMenu} to="/category" className="text-decoration-none text-white fs-18 text-capitalize">
//                         {item}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </motion.ul>
//               </motion.aside>
//             </>
//           )}
//         </AnimatePresence>
//       </aside>
//     </>
//   );
// }

// export default Navbar;




// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../ComponentStyle/Navbar.css';
// import LogoWhite from '/assets/img/logo.png';
// import LogoBlack from '/assets/img/black-Logo.png';
// import { motion, AnimatePresence } from 'framer-motion';
// import CartSidebar from './CartSidebar';
// import { MenuContext } from '../Context/MenuProvider';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const { menu, toggleMenu } = useContext(MenuContext);
//   const location = useLocation();

//   const whitePaths = ['/'];
//   const isWhiteTheme = whitePaths.includes(location.pathname);
//   const currentLogo = isWhiteTheme ? LogoWhite : LogoBlack;
//   const textColorClass = isWhiteTheme ? 'text-white' : 'text-black';

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [location.pathname]);

//   const sidebarVariants = {
//     hidden: { opacity: 0, x: '-100%' },
//     visible: {
//       opacity: 1,
//       x: '0px',
//       transition: {
//         when: 'beforeChildren',
//         staggerChildren: 0.1,
//         duration: 0.9,
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: '-100%',
//       transition: {
//         when: 'afterChildren',
//         duration: 0.5,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   const liVariants = {
//     hidden: { opacity: 0, x: '-100%' },        // Start off left and invisible
//     visible: {
//       opacity: 1,
//       x: '-10%',                              // Slide right to 40%
//       transition: { duration: 0.5, ease: 'easeOut' },
//     },
//     exit: {
//       opacity: 0,
//       x: '-100%',                           // Slide back left and fade out
//       transition: { duration: 0.4, ease: 'easeIn' },
//     },
//   };

//   return (
//     <>
//       <CartSidebar />
//       <nav className={`rolls-navbar ${!isWhiteTheme ? 'not-home' : ''} ${scrolled && !menu ? 'scrolled' : ''}`}>
//         <div className="container">
//           <div className="navbar-content">
//             <div className="row align-items-center">
//               <div className="col-3">
//                 {!menu && (
//                   <Link onClick={toggleMenu} to="#">
//                     <i className={`fa-solid fa-bars fs-22 ${textColorClass}`}></i>
//                   </Link>
//                 )}
//               </div>
//               <div className="col-6 text-center">
//                 <Link to="/">
//                   <img className="img-fluid logo-img" src={currentLogo} alt="Logo" />
//                 </Link>
//               </div>
//               <div className="col-3 text-end">
//                 <p className={`fs-15 mb-0 p-0 ${textColorClass}`}>Membership Program</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <aside>
//         <AnimatePresence>
//           {menu && (
//             <>
//               <motion.div
//                 onClick={toggleMenu}
//                 className="asidebarWrapper"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               />

//               <motion.aside
//                 className="asidebarOpen"
//                 variants={sidebarVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <button onClick={toggleMenu} className="bg-transparent border-0 fs-2 text-white">×</button>
//                 <motion.ul
//                   className="text-end my-lg-3"
//                   variants={{
//                     visible: { transition: { staggerChildren: 0.1 } },
//                     hidden: {},
//                   }}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                 >
//                   {[
//                     'Textiles',
//                     'Bed',
//                     'Bathware Assortment',
//                     'Bedroom',
//                     'Living Lounge',
//                     'Office Space',
//                     'Entertainment Area',
//                     'Kids Room',
//                   ].map((item, index) => (
//                     <motion.li
//                       key={index}
//                       className="list-style-none py-sm-3 py-2"
//                       style={{ position: 'relative' }}  // Needed for x transform
//                       variants={liVariants}
//                     >
//                       <Link onClick={toggleMenu} to="/category" className="text-decoration-none text-white fs-18 text-capitalize">
//                         {item}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </motion.ul>
//               </motion.aside>
//             </>
//           )}
//         </AnimatePresence>
//       </aside>
//     </>
//   );
// }

// export default Navbar;







// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../ComponentStyle/Navbar.css';
// import LogoWhite from '/assets/img/logo.png';
// import LogoBlack from '/assets/img/black-Logo.png';
// import { motion, AnimatePresence } from 'framer-motion';
// import CartSidebar from './CartSidebar';
// import { MenuContext } from '../Context/MenuProvider';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const { menu, toggleMenu } = useContext(MenuContext);
//   const location = useLocation();

//   const whitePaths = ['/'];
//   const isWhiteTheme = whitePaths.includes(location.pathname);
//   const currentLogo = isWhiteTheme ? LogoWhite : LogoBlack;
//   const textColorClass = isWhiteTheme ? 'text-white' : 'text-black';

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [location.pathname]);

//   const sidebarVariants = {
//     hidden: { opacity: 0, x: '-100%' },
//     visible: {
//       opacity: 1,
//       x: '0px',
//       transition: {
//         when: 'beforeChildren',
//         staggerChildren: 0.1,
//         staggerDirection: -1, // bottom to top
//         duration: 0.9,
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: '-100%',
//       transition: {
//         when: 'afterChildren',
//         duration: 0.5,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   const menuItems = [
//     'Textiles',
//     'Bed',
//     'Bathware Assortment',
//     'Bedroom',
//     'Living Lounge',
//     'Office Space',
//     'Entertainment Area',
//     'Kids Room',
//   ];

//   return (
//     <>
//       <CartSidebar />
//       <nav className={`rolls-navbar ${!isWhiteTheme ? 'not-home' : ''} ${scrolled && !menu ? 'scrolled' : ''}`}>
//         <div className="container">
//           <div className="navbar-content">
//             <div className="row align-items-center">
//               <div className="col-3">
//                 {!menu && (
//                   <Link onClick={toggleMenu} to="#">
//                     <i className={`fa-solid fa-bars fs-22 ${textColorClass}`}></i>
//                   </Link>
//                 )}
//               </div>
//               <div className="col-6 text-center">
//                 <Link to="/">
//                   <img className="img-fluid logo-img" src={currentLogo} alt="Logo" />
//                 </Link>
//               </div>
//               <div className="col-3 text-end">
//                 <p className={`fs-15 mb-0 p-0 ${textColorClass}`}>Membership Program</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <aside>
//         <AnimatePresence>
//           {menu && (
//             <>
//               <motion.div
//                 onClick={toggleMenu}
//                 className="asidebarWrapper"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               />

//               <motion.aside
//                 className="asidebarOpen"
//                 variants={sidebarVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <button onClick={toggleMenu} className="bg-transparent border-0 fs-2 text-white">×</button>

//                 <motion.ul
//                   className="text-end my-lg-3"
//                   variants={{
//                     visible: {
//                       transition: {
//                         staggerChildren: 0.1,
//                         staggerDirection: -1, // bottom to top
//                       },
//                     },
//                     hidden: {},
//                   }}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                 >
//                   {menuItems.map((item, index) => (
//                     <motion.li
//                       key={index}
//                       className="list-style-none py-sm-3 py-2"
//                       variants={{
//                         hidden: { opacity: 0, x: '-100%' },
//                         visible: {
//                           opacity: 1,
//                           x: '-0%',
//                           transition: {
//                             duration: 0.4 + index * 0.1,
//                             ease: 'easeOut',
//                           },
//                         },
//                         exit: {
//                           opacity: 0,
//                           x: '-100%',
//                           transition: {
//                             duration: 0.3 + index * 0.05,
//                             ease: 'easeIn',
//                           },
//                         },
//                       }}
//                     >
//                       <Link
//                         onClick={toggleMenu}
//                         to="/category"
//                         className="text-decoration-none text-white fs-18 text-capitalize"
//                       >
//                         {item}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </motion.ul>
//               </motion.aside>
//             </>
//           )}
//         </AnimatePresence>
//       </aside>
//     </>
//   );
// }

// export default Navbar;

// this is satrt important

// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../ComponentStyle/Navbar.css';
// import LogoWhite from '/assets/img/logo.png';
// import LogoBlack from '/assets/img/black-Logo.png';
// import { motion, AnimatePresence } from 'framer-motion';
// import CartSidebar from './CartSidebar';
// import { MenuContext } from '../Context/MenuProvider';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const { menu, toggleMenu } = useContext(MenuContext);
//   const location = useLocation();

//   const whitePaths = ['/'];
//   const isWhiteTheme = whitePaths.includes(location.pathname);
//   const currentLogo = isWhiteTheme ? LogoWhite : LogoBlack;
//   const textColorClass = isWhiteTheme ? 'text-white' : 'text-black';

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [location.pathname]);

//   const sidebarVariants = {
//     hidden: { opacity: 0, x: '-100%' },
//     visible: {
//       opacity: 1,
//       x: '0px',
//       transition: {
//         when: 'beforeChildren',
//         duration: 0.9,
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: '-100%',
//       transition: {
//         duration: 0.5,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   const ulVariants = {
//     visible: {
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.3,
//         staggerDirection: 1, // top to bottom
//       },
//     },
//     hidden: {},
//   };

//   const liVariants = {
//     hidden: { opacity: 0, x: '-100%' },
//     visible: {
//       opacity: 1,
//       x: '-0%',
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut',
//       },
//     },
//     exit: {
//       opacity: 0,
//       x: '-100%',
//       transition: {
//         duration: 0.3,
//         ease: 'easeIn',
//       },
//     },
//   };

//   const menuItems = [
//     'Textiles',
//     'Bed',
//     'Bathware Assortment',
//     'Bedroom',
//     'Living Lounge',
//     'Office Space',
//     'Entertainment Area',
//     'Kids Room',
//   ];

//   return (
//     <>
//       <CartSidebar />
//       <nav className={`rolls-navbar ${!isWhiteTheme ? 'not-home' : ''} ${scrolled && !menu ? 'scrolled' : ''}`}>
//         <div className="container">
//           <div className="navbar-content">
//             <div className="row align-items-center">
//               <div className="col-3">
//                 {!menu && (
//                   <Link onClick={toggleMenu} to="#">
//                     <i className={`fa-solid fa-bars fs-22 ${textColorClass}`}></i>
//                   </Link>
//                 )}
//               </div>
//               <div className="col-6 text-center">
//                 <Link to="/">
//                   <img className="img-fluid logo-img" src={currentLogo} alt="Logo" />
//                 </Link>
//               </div>
//               <div className="col-3 text-end">
//                 <p className={`fs-15 mb-0 p-0 ${textColorClass}`}>Membership Program</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <aside>
//         <AnimatePresence>
//           {menu && (
//             <>
//               <motion.div
//                 onClick={toggleMenu}
//                 className="asidebarWrapper"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//               />

//               <motion.aside
//                 className="asidebarOpen"
//                 variants={sidebarVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//               >
//                 <button onClick={toggleMenu} className="bg-transparent border-0 fs-2 text-white">×</button>

//                 <motion.ul
//                   className="text-end my-lg-3"
//                   variants={ulVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                 >
//                   {menuItems.map((item, index) => (
//                     <motion.li
//                       key={index}
//                       className="list-style-none py-sm-3 py-2"
//                       variants={liVariants}
//                     >
//                       <Link
//                         onClick={toggleMenu}
//                         to="/category"
//                         className="text-decoration-none text-white fs-18 text-capitalize"
//                       >
//                         {item}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </motion.ul>
//               </motion.aside>
//             </>
//           )}
//         </AnimatePresence>
//       </aside>
//     </>
//   );
// }

// export default Navbar;



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
    hidden: { opacity: 0, x: '-100%' },
    visible: {
      opacity: 1,
      x: '0px',
      transition: {
        when: 'beforeChildren',
        duration: 0.9,
      },
    },
    exit: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.5,
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
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
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
        delayChildren: 0.3,
        staggerChildren: 0.3,
        staggerDirection: -1,
      },
    },
    hidden: {},
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

  return (
    <>
      <CartSidebar />
      <nav className={`rolls-navbar ${!isWhiteTheme ? 'not-home' : ''} ${scrolled && !menu ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            <div className="row align-items-center">
              <div className="col-3">
                {!menu && (
                  <Link onClick={toggleMenu} to="#">
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
                onClick={toggleMenu}
                className="asidebarWrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.aside
                className="asidebarOpen"
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button onClick={toggleMenu} className="bg-transparent border-0 fs-2 text-white">×</button>

                <motion.ul
                  className="text-end my-lg-3"
                  variants={ulVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      className="list-style-none py-sm-3 py-2"
                      variants={liVariants}
                    >
                      <Link
                        onClick={toggleMenu}
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




 


















