import React from 'react';
// import   from '../assets/img/shape/services.png';
// import serviceIcon1 from '../assets/img/icon/services-1.png';
// import serviceIcon2 from '../assets/img/icon/services-7.png';
// import serviceImage from '../assets/img/features/services-4.png';
import  serviceImage from '../../assets/img/features/services-4.png';
import serviceIcon2 from '../../assets/img/icon/services-7.png';
import  serviceIcon1 from '../../assets/img/icon/services-1.png';
// import serviceShape from '../../assets/img/icon/services-1.png';
// import { Link } from 'react-router-dom';
const Service = () => {
  return (
    <div className="services__area section-padding" id="Services">
      <div className="services__area-shape">
        {/* <img src={serviceShape} alt="" /> */}
      </div>
      <div className="container">
        <div className="row mb-50">
          <div className="col-xl-12">
            <div className="services__area-title">
              {/* <span className="subtitle__two">Services</span> */}
              <span className="subtitle__one">Our Services</span>
              <h2>Popular Nail Styles</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12 mb-35">
            <div className="services__area-button">
              <ul className="nav nav-pills">
                {[
                  'Shellac Polish',
                  'Line Art Nails',
                  'Regular Polish',
                  'Acrylic Polish',
                  'Dip Powder Nails',
                  'Marble Nails',
                  'Glitter Polish',
                  'Matte Polish',
                  'Chrome Nails',
                ].map((label, index) => (
                  <li className="nav-item" role="presentation" key={index}>
                    <button
                      className={label === 'Acrylic Polish' ? 'active' : ''}
                      data-bs-toggle="pill"
                      data-bs-target={`#tab-${index}`}
                    >
                      <img className="nav-item-button-icon" src={serviceIcon1} alt="" />
                      <img className="nav-item-button-icon2" src={serviceIcon2} alt="" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="tab-pane fade show active" id="facial">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="services__area-right ml-40 lg-ml-0">
                  <div className="services__area-right-title">
                    <h3>Manicure for Your Nails Because You Deserve the Best</h3>
                    <p>
                     At DN Studio, we believe your hands deserve as much attention and care as the rest of you. Our manicure treatments are designed not just to beautify, but to rejuvenate. 
                    </p>
                    <p>
                       From classic manicures to luxurious spa treatments, we focus on nourishing your nails and cuticles, improving hand texture, and giving you that flawless, polished finish.
                    </p>
                    <p>
                       Our expert nail technicians combine skill with creativity to deliver results that are both healthy and stunning. 
                    </p>
                    <p>
                      Every manicure session is a relaxing experience, using high-quality, skin-friendly products to ensure long-lasting shine and care. Whether it’s a quick refresh or a pampering indulgence, we offer the perfect manicure tailored just for you — because you truly deserve the best.
                    </p>
                    <div className="services__area-right-title-list">
                      <span>
                        <i className="far fa-check"></i> Easy to use Studio special offer navigation
                      </span>
                      <span>
                        <i className="far fa-check"></i> We care about our customers satisfaction
                      </span>
                    </div>
                    <a href="#contact" className="theme-btn mt-50">
                     Call For Booking<i className="far fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 lg-mb-30">
                <div className="services__area-image">
                  <img className="img__full featuresimg" src={serviceImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* container end */}
    </div>
  );
};

export default Service;
