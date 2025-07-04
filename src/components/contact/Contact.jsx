import React from 'react';

const Contact = () => {
  return (
    <div className="contact__area section-padding pb-0" id="contact">
      <div className="container">
        <div className="row mb-60">
          <div className="col-xl-5 col-lg-6">
            <div className="contact__area-title">
              <span className="subtitle__one">Contact</span>
              <h2>Need Your any help Contact with Us</h2>
            </div>

            <div className="contact__area-info">
              <div className="contact__area-info-item">
                <div className="contact__area-info-item-icon">
                  <i className="far fa-phone-alt"></i>
                </div>
                <div className="contact__area-info-item-content">
                  <span>Call Now</span>
                  <h5><a href="tel:9275120108">92751 20108</a></h5>
                </div>
              </div>

              <div className="contact__area-info-item">
                <div className="contact__area-info-item-icon">
                <i class="fab fa-instagram"></i>
                </div>
                <div className="contact__area-info-item-content">
                  <span>instagram</span>
                  <h5><a href="https://www.instagram.com/dimpal_nails_/">dimpal_nails_</a></h5>
                </div>
              </div>

              <div className="contact__area-info-item">
                <div className="contact__area-info-item-icon">
                  <i className="far fa-map-marker-alt"></i>
                </div>
                <div className="contact__area-info-item-content">
                  <span>Address</span>
                  <h5><a href="#contact">Umiya Township, New 80ft Road, Surendranagar</a></h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="contact__area-bottom">
              <div className="contact__area-bottom-form page">
                <form action="#">
                  <div className="row">
                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-bottom-form-item">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-bottom-form-item">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-bottom-form-item">
                        <textarea
                          name="message"
                          rows="5"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <div className="contact__area-bottom-form-item">
                        <button className="theme-banner-btn" type="submit">
                          Submit Now
                          <i className="far fa-angle-double-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
