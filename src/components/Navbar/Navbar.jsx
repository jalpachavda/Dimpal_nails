import React from 'react'
// import '../../assets/all.css'
const Navbar = () => {
  return (
  <>
  <>
  <div className="header__sticky one">
    <div className="header__area">
      <div className="container custom__container">
        <div className="header__area-menubar">
          <div className="header__area-menubar-left">
            <div className="header__area-menubar-left-logo">
              <a href="index.html">
                <img src="assets/img/logo.png" alt="" />
              </a>
              <div className="responsive-menu" />
            </div>
            <div className="header__area-menubar-left-contact">
              <div className="header__area-menubar-left-contact-icon">
                <i className="fal fa-phone-alt" />
              </div>
              <div className="header__area-menubar-left-contact-info">
                <h6>
                  <a href="tel:+125(895)658">Hotline +125 (895) 658</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="header__area-menubar-right">
            <div className="header__area-menubar-right-menu menu-responsive">
              <ul id="mobilemenu">
                <li className="menu-item-has-children">
                  <a href="index.html">Home</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="price.html">Price</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="services-details.html">Services Details</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="product-page.html">Product Page</a>
                    </li>
                    <li>
                      <a href="product-details.html">Product Details</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="blog-standard.html">Blog Standard</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="header__area-menubar-right-box">
              <div className="header__area-menubar-right-box-search">
                <div className="search">
                  <span className="header__area-menubar-right-box-search-icon open">
                    <i className="fal fa-search" />
                  </span>
                </div>
                <div className="header__area-menubar-right-box-search-box">
                  <form>
                    <input type="search" placeholder="Search Here....." />
                    <button type="submit">
                      <i className="fal fa-search" />
                    </button>
                  </form>{" "}
                  <span className="header__area-menubar-right-box-search-box-icon">
                    <i className="fal fa-times" />
                  </span>
                </div>
              </div>
              <div className="header__area-menubar-right-box-btn">
                <a href="contact.html" className="theme-banner-btn">
                  Booking Now
                  <i className="far fa-angle-double-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header Area End */}
  {/* Banner Area Start */}
  <div className="home__banner">
    <div className="banner__slide swiper banner-slide">
      <div className="swiper-wrapper">
        <div
          className="banner__slide-area swiper-slide"
          data-swiper-autoplay={6000}
        >
          <div
            className="banner__slide-area-image"
            data-background="assets/img/bg/banner-bg-1.jpg"
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 order-last order-lg-first">
                <div className="banner__slide-content">
                  <span
                    className="subtitle__one"
                    data-animation="fadeInLeft"
                    data-delay=".4s"
                  >
                    Welcome to Our Barbex
                  </span>
                  <h1 data-animation="fadeInLeft" data-delay=".6s">
                    Best Hair Salon for a Professional Look
                  </h1>
                  <div
                    className="banner__slide-content-button"
                    data-animation="fadeInLeft"
                    data-delay=".9s"
                  >
                    <a href="about.html" className="theme-banner-btn">
                      Read More
                      <i className="far fa-angle-double-right" />
                    </a>
                    <a href="services.html" className="theme-border-btn">
                      View all Services
                      <i className="far fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="banner__slide-right"
            data-animation="fadeInRight"
            data-delay="1.3s"
          >
            <img src="assets/img/bg/banner-1.png" alt="" />
          </div>
        </div>
        <div
          className="banner__slide-area swiper-slide"
          data-swiper-autoplay={6000}
        >
          <div
            className="banner__slide-area-image"
            data-background="assets/img/bg/banner-bg-2.jpg"
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 order-last order-lg-first">
                <div className="banner__slide-content">
                  <span
                    className="subtitle__one"
                    data-animation="fadeInLeft"
                    data-delay=".4s"
                  >
                    Welcome to Our Barbex
                  </span>
                  <h1 data-animation="fadeInLeft" data-delay=".6s">
                    Best Haircut Salon in the City
                  </h1>
                  <div
                    className="banner__slide-content-button"
                    data-animation="fadeInLeft"
                    data-delay=".9s"
                  >
                    <a href="about.html" className="theme-banner-btn">
                      Read More
                      <i className="far fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="banner__slide-right"
            data-animation="fadeInRight"
            data-delay="1.3s"
          >
            <img src="assets/img/bg/banner-2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="home__banner-button">
        <div className="home__banner-button-prev swiper-button-prev">
          <i className="far fa-long-arrow-left" />
        </div>
        <div className="home__banner-button-next swiper-button-next">
          <i className="far fa-long-arrow-right" />
        </div>
      </div>
    </div>
  </div>
</>

  
  
  </>
  )
}

export default Navbar

