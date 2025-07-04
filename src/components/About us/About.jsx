// import React from 'react';
// import aboutImg1 from '../assets/img/about/about-1.jpg';
// import aboutImg2 from '../assets/img/about/about-2.jpg';
// import aboutImg3 from '../assets/img/about/about-3.png';
// import aboutShape from '../assets/img/shape/about.png';
import aboutImg1 from '../../assets/img/about/about-1.png';
// import aboutImg2 from '../../assets/img/about/about-2.jpg';
// import aboutImg3 from '../../assets/img/about/about-3.png';
// import aboutShape from '../../assets/img/about/about-1.jpg';

const About = () => {
  return (
    <div className="about__area section-padding" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 lg-mb-30">
            <div className="about__area-left">
              <div className="about__area-left-image">
                <img src={aboutImg1} alt="" />
                {/* <div className="about__area-left-image-two">
                  <img className="img__full" src={aboutImg2} alt="" />
                </div>
                <div className="about__area-left-image-three">
                  <img className="img__full" src={aboutImg3} alt="" />
                </div>
                <div className="about__area-left-image-shape">
                
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about__area-right">
              <div className="about__area-right-title">
                
                <span className="subtitle__one">About Us</span>
                <h2>The Heart Behind the Art</h2>
                <p>
                  Welcome to DN Stusio, where nail care meets luxury. We are a premium nail art studio dedicated to bringing your nail dreams to life with top-tier treatments and the latest trends in nail fashion.
                </p>
                <p>At our studio, we specialize in all types of nail art, from elegant classics to bold, artistic designs. Whether you're looking for simple grooming or glamorous nail extensions, we offer a full range of services tailored to your style and personality.</p>
              </div>
              <div className="about__area-right-bottom mt-35">
                <h5>
                 We believe your nails are a reflection of your personality — and they deserve the best. That's why we use only branded, high-quality products that ensure long-lasting beauty and protect the health of your natural nails.
                </h5>
                {/* <a href="about.html" className="theme-btn mt-50">Read More<i className="far fa-angle-double-right"></i></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
