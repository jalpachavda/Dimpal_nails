// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, EffectFade } from "swiper/modules";
// import AOS from "aos";
// import './Hero.css';

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "aos/dist/aos.css";

// import logo from "../../assets/img/logo-2.png";

// const Home = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const handleMobileMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Header */}
//     <div className="header__sticky one">
//         <div className="header__area">
//           <div className="container custom__container">
//             <div className="header__area-menubar">
//               <div className="header__area-menubar-left">
//                 <div className="header__area-menubar-left-logo">
//                   <a href="/">
//                     <img src={logo} alt="Logo" />
//                   </a>
//                   <div className="responsive-menu"></div>
//                 </div>
//                 <div className="header__area-menubar-left-contact">
//                   <div className="header__area-menubar-left-contact-icon">
//                     <i className="fal fa-phone-alt"></i>
//                   </div>
//                   <div className="header__area-menubar-left-contact-info"></div>
//                 </div>
//               </div>

//               <div className="header__area-menubar-right">
//                 <div className="header__area-menubar-right-menu menu-responsive">
//                   <ul id="mobilemenu">
//                     <li className="menu-item-has-children">
//                       <a href="/">Home</a>
//                     </li>
//                     <li className="menu-item-has-children">
//                       <a href="#about">About us</a>
//                     </li>
//                     <li className="menu-item-has-children">
//                       <a href="#Services">Our Services</a>
//                     </li>
//                     <li className="menu-item-has-children">
//                       <a href="#contact">Contact</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Banner Area */}
//       <div className="home__banner">
//         <Swiper
//           className="banner__slide"
//           modules={[Navigation, Autoplay, EffectFade]}
//           navigation={{
//             nextEl: ".home__banner-button-next",
//             prevEl: ".home__banner-button-prev",
//           }}
//           autoplay={{ delay: 6000 }}
//           loop={true}
//           effect="fade"
//           fadeEffect={{ crossFade: true }}
//           speed={1200}
//         >
//           {/* Slide 1 */}
//           <SwiperSlide>
//             <div className="banner__slide-area">
//               <div
//                 className="banner__slide-area-image"
//                 style={{
//                   backgroundImage: `url(assets/img/bg/banner-bg-2.jpg)`,
//                 }}
//               />
//               <div className="container">
//                 <div className="row align-items-center">
//                   <div className="col-xl-12 order-last order-lg-first">
//                     <div className="banner__slide-content">
//                       <span className="subtitle__one" data-aos="fade-right">
//                         Welcome to Our DN Studio
//                       </span>
//                       <h1 data-aos="fade-up">
//                         Nails That Speak Your Style – Only at DN Studio
//                       </h1>
//                       <div
//                         className="banner__slide-content-button"
//                         data-aos="fade-left"
//                       >
//                         <a href="about.html" className="theme-banner-btn">
//                           Read More <i className="far fa-angle-double-right" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Slide 2 */}
//           <SwiperSlide>
//             <div className="banner__slide-area">
//               <div
//                 className="banner__slide-area-image"
//                 style={{
//                   backgroundImage: `url(assets/img/bg/banner-2.jpeg)`,
//                 }}
//               />
//               <div className="container">
//                 <div className="row align-items-center">
//                   <div className="col-xl-12 order-last order-lg-first">
//                     <div className="banner__slide-content">
//                       <span className="subtitle__one" data-aos="fade-right">
//                         Welcome to Our DN Studio
//                       </span>
//                       <h1 data-aos="fade-up">
//                         Nails That Speak Your Style – Only at DN Studio
//                       </h1>
//                       <div
//                         className="banner__slide-content-button"
//                         data-aos="fade-left"
//                       >
//                         <a href="about.html" className="theme-banner-btn">
//                           Read More <i className="far fa-angle-double-right" />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>

//         {/* Navigation Arrows */}
//         <div className="home__banner-button">
//           <div className="home__banner-button-prev swiper-button-prev">
//             <i className="far fa-long-arrow-left" />
//           </div>
//           <div className="home__banner-button-next swiper-button-next">
//             <i className="far fa-long-arrow-right" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";
import bannerBg from "../../assets/img/bg/banner-bg-2.jpg";
import bannerBg2 from "../../assets/img/bg/banner-2.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import "./Hero.css";
import logo from "../../assets/img/logo-2.png";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
    duration: 1000,
    once: true,
  });
    const handleScroll = () => {
      const header = document.querySelector(".header__sticky");
      if (window.scrollY > 135) {
        header.classList.add("header__sticky-sticky-menu");
      } else {
        header.classList.remove("header__sticky-sticky-menu");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      {/* Navbar */}
        <header className="header__sticky one">
        <div className="header__area">
          <div className="container custom__container">
            <div className="header__area-menubar d-flex justify-content-between align-items-center">
              {/* Logo */}
              <div className="header__area-menubar-left">
                <div className="header__area-menubar-left-logo">
                  <a href="/">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="header__area-menubar-right-menu d-none d-lg-block">
                <ul className="mainmenu d-flex align-items-center " id="mobilemenu">
                  <li className="menu-item-has-children"><a href="/">Home</a></li>
                  <li className="menu-item-has-children"><a href="#about">About Us</a></li>
                  <li className="menu-item-has-children"><a href="#Services">Our Services</a></li>
                  <li className="menu-item-has-children"><a href="#contact">Contact</a></li>
                </ul>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="menu-toggle d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="menu-responsive-mobile d-lg-none">
              <ul>
                <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
                <li><a href="#Services" onClick={() => setMenuOpen(false)}>Our Services</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Banner Area */}
      <div className="home__banner">
        <Swiper
          className="banner__slide swiper banner-slide"
          modules={[Navigation, Autoplay, EffectFade]}
          navigation={{
            nextEl: ".home__banner-button-next",
            prevEl: ".home__banner-button-prev",
          }}
          autoplay={{ delay: 6000 }}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="banner__slide-area swiper-slide">
              <div
                className="banner__slide-area-image"
    
               style={{ backgroundImage: `url(${bannerBg})` }}

              
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-12 order-last order-lg-first">
                    <div className="banner__slide-content">
                      <span className="subtitle__one" data-aos="fade-right">
                        Welcome to Our DN Studio
                      </span>
                      <h1 data-aos="fade-left" >
                        Nails That Speak Your Style – Only at DN Studio
                      </h1>                     
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="banner__slide-area swiper-slide">
              {/* <div
                className="banner__slide-area-image"
                style={{
                  backgroundImage: `url(/assets/img/bg/banner-2.jpeg)`,
                }}
              /> */}
              <div
  className="banner__slide-area-image"
    style={{ backgroundImage: `url(${bannerBg2})` }}
></div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-12 order-last order-lg-first">
                    <div className="banner__slide-content">
                      <span className="subtitle__one" data-aos="fade-left" data-delay=".4s">
                        Welcome to Our DN Studio
                      </span>
                      <h1 data-aos="fade-left" data-delay=".6s" >
                       Where Art Meets Elegance Your Nails at DN Studio.
                      </h1>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Swiper Navigation Arrows */}
        <div className="home__banner-button">
          <div className="home__banner-button-prev swiper-button-prev">
            <i className="far fa-long-arrow-left" />
          </div>
          <div className="home__banner-button-next swiper-button-next">
            <i className="far fa-long-arrow-right" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
