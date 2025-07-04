import React from "react";

import Gallery1 from "../../assets/img/blog/Gallery.png";
import Gallery2 from "../../assets/img/blog/Gallery-2.png";
import Gallery3 from "../../assets/img/blog/Gallery-3.png";
import Gallery4 from "../../assets/img/blog/Gallery-4.png";
import Gallery5 from "../../assets/img/blog/Gallery-5.png";
import Gallery6 from "../../assets/img/blog/Gallery-6.png";
import Gallery7 from "../../assets/img/blog/Gallery-7.png";
import Gallery8 from "../../assets/img/blog/Gallery-8.png";
import Gallery9 from "../../assets/img/blog/Gallery-9.png";
import Gallery10 from "../../assets/img/blog/Gallery-11.png";
import Gallery11 from "../../assets/img/blog/Gallery-12.jpg";
import Gallery12 from '../../assets/img/blog/Gallery-13.jpg';
import Gallery13 from '../../assets/img/blog/Gallery-14.png';
import Gallery14 from '../../assets/img/blog/Gallery-10.jpg';
import Gallery15 from '../../assets/img/blog/Gallery-15.jpg';
import Gallery16 from '../../assets/img/blog/Gallery-17.jpg';
import Gallery17 from '../../assets/img/blog/Gallery-16.jpg';
import Gallery18 from '../../assets/img/blog/Gallery-18.jpg';
import Gallery19 from '../../assets/img/blog/Gallery-19.png';
import Gallery20 from '../../assets/img/blog/Gallery-20.jpg';
import Gallery21 from '../../assets/img/blog/Gallery-21.webp';
import Gallery22 from '../../assets/img/blog/Gallery-22.webp';


const SeeMore = () => {
  return (
    <div className="products__area section-padding">
      <div className="container">
        <div className="row mb-65">
          <div style={{ padding: "20px" }}>
            <a
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                fontSize: "18px",
                color: "#333",
              }}
            >
              <span style={{ fontSize: "24px", marginRight: "8px" }}>
                &#8592;
              </span>
              Home
            </a>
          </div>
          <div className="col-xl-12">
            <div className="products__area-title">
              <span className="subtitle__one">Full Gallery</span>
              <h2>Explore the Complete Nail Art Collection</h2>
            </div>
          </div>
        </div>

        <div className="mansory-gallery">
          <div className="column">
            <img src={Gallery1} alt="Gallery 0" />
            <img src={Gallery2} alt="Gallery 1" />
            <img src={Gallery3} alt="Gallery 2" />
            <img src={Gallery4} alt="Gallery 3" />
            <img src={Gallery5} alt="Gallery 4" />
          </div>
          <div className="column">
            <img src={Gallery6} alt="Gallery 5" />
            <img src={Gallery7} alt="Gallery 6" />
            <img src={Gallery8} alt="Gallery 7" />
            <img src={Gallery9} alt="Gallery 8" />
            <img src={Gallery10} alt="Gallery 9" />
          </div>
          <div className="column">
            <img src={Gallery11} alt="Gallery 11" />
            <img src={Gallery12} alt="Gallery 12" />
            <img src={Gallery13} alt="Gallery 13" />
            <img src={Gallery14} alt="Gallery 14" />
            <img src={Gallery15} alt="Gallery 10" />
            <img src={Gallery16} alt="Gallery 15" />
            <img src={Gallery17} alt="Gallery 17" />
          </div>
          <div className="column">
            <img src={Gallery18} alt="Gallery 16" />
            <img src={Gallery19} alt="Gallery 18" />
            <img src={Gallery20} alt="Gallery 19" />
            <img src={Gallery21} alt="Gallery 20" />
            <img src={Gallery22} alt="Gallery 21" />           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
