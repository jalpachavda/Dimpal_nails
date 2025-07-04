import React from 'react';
import Gallery1 from '../../assets/img/blog/Gallery.png';
import Gallery2 from '../../assets/img/blog/Gallery-9.png';
import Gallery3 from '../../assets/img/blog/Gallery-5.png';
import Gallery4 from '../../assets/img/blog/Gallery-6.png';
import Gallery5 from '../../assets/img/blog/Gallery-11.png';
import Gallery6 from '../../assets/img/blog/Gallery-12.jpg';
import Gallery7 from '../../assets/img/blog/Gallery-7.png';
import Gallery8 from '../../assets/img/blog/Gallery-16.jpg';
import Gallery9 from '../../assets/img/blog/Gallery-18.jpg';
import Gallery10 from '../../assets/img/blog/Gallery-20.jpg';
import { Link } from 'react-router-dom';
const Gallery = () => {
  return (
    <div className="products__area section-padding">
      <div className="container">
        {/* Title */}
        <div className="row mb-65">
          <div className="col-xl-12">
            <div className="products__area-title">
              <span className="subtitle__one">Art That Speaks</span>
              <h2>Step Into the World of Stunning Nail Design</h2>
            </div>
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="mansory-gallery">
          <div className="column">
            <img src={Gallery1} alt="Gallery 1" />
            <img src={Gallery2} alt="Gallery 2" />
          </div>
          <div className="column">
            <img src={Gallery3} alt="Gallery 3" />
            <img src={Gallery4} alt="Gallery 4" />
          </div>
          <div className="column">
            <img src={Gallery5} alt="Gallery 5" />
            <img src={Gallery6} alt="Gallery 6" />
            <img src={Gallery7} alt="Gallery 7" />
          </div>
          <div className="column">
            <img src={Gallery8} alt="Gallery 8" />
            <img src={Gallery9} alt="Gallery 9" />
            <img src={Gallery10} alt="Gallery 10" />
          </div>
        </div>

        {/* See More Button */}
       <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <Link to="/gallery" className="btn seemorebutton">
        See More
      </Link>
    </div>
      </div>
    </div>
  );
};

export default Gallery;
