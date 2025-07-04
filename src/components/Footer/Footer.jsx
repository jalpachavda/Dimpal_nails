import React from "react";
import instagram1 from "../../assets/img/features/instagram-1.jpg";
import instagram2 from "../../assets/img/features/instagram-2.jpg";
import instagram3 from "../../assets/img/features/instagram-3.jpg";
import instagram4 from "../../assets/img/features/instagram-4.jpg";
import instagram5 from "../../assets/img/features/instagram-5.jpg";
import instagram6 from "../../assets/img/features/instagram-6.jpg";
const Footer = () => {
  return (
    <>
      {/* Instagram Section */}
      <div className="instagram__area one">
        <div className="container-fluid">
          <div className="row">
            {[
              instagram1,
              instagram2,
              instagram3,
              instagram4,
              instagram5,
              instagram6,
            ].map((img, index) => (
              <div className="col-lg-2 col-sm-4 pl-5 pr-5 sm-mb-10" key={index}>
                <div className="instagram__area-item">
                  <img
                    className="instagramimg"
                    src={img}
                    alt={`instagram-${index + 1}`}
                  />
                  <div className="instagram__area-item-icon">
                    <a
                      href="https://www.instagram.com/dimpal_nails_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer__two">
        <div className="copyright__two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12">
                <div className="copyright__two-center">
                  <p>Copyright © 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
