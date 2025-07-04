import React from 'react';
import instagram1 from '../../assets/img/features/instagram-1.jpg';
import instagram2 from '../../assets/img/features/instagram-2.jpg';
import instagram3 from '../../assets/img/features/instagram-7.jpg';
import instagram4 from '../../assets/img/features/instagram-4.jpg';
import instagram5 from '../../assets/img/features/instagram-5.jpg';
import instagram6 from '../../assets/img/features/instagram-6.jpg';
const Price = () => {
  return (
    <>
     <div className="col-xl-12">
        <div className="products__area-title">
          <span className="subtitle__one ">Best Deals on Nail Services</span>
          <h2 >Chic Nails, Unbeatable Deals.</h2>
        </div>					
      </div>
       <div class="price__area section-padding" >       
			  <div class="row mb-65">
     
    </div>
	 
    <div className="container">
      <div className="row">
        {/* Regular Polish */}
        <div className="col-xl-6 col-lg-6 mb-30">
          <div className="price__area-item">
            <div className="price__area-item-image">
              <img src={instagram1} alt="Regular Polish" />
            </div>
            <div className="price__area-item-content">
              <h4>
                Regular Polish <span>Starting From</span> <span>₹ 100</span>
              </h4>
              <p>Classic never goes out of style.</p>
            </div>
          </div>
        </div>

        {/* Acrylic Polish */}
        <div className="col-xl-6 col-lg-6 lg-mb-30">
          <div className="price__area-item">
            <div className="price__area-item-image">
              <img src={instagram2} alt="Acrylic Polish" />
            </div>
            <div className="price__area-item-content">
              <h4>
                Acrylic Polish <span>Starting From</span> <span>₹ 150</span>
              </h4>
              <p>
               Long-lasting and ultra-durable, acrylic polish is ideal for adding both length and strength to your nails.
              </p>
            </div>
          </div>
        </div>

        {/* Matte Nail Polish */}
        <div className="col-xl-6 col-lg-6 mb-30">
          <div className="price__area-item">
            <div className="price__area-item-image">
              <img src={instagram3} alt="Matte Nail Polish" />
            </div>
            <div className="price__area-item-content">
              <h4>
                Matte Nail Polish <span>Starting From</span> <span>₹ 170</span>
              </h4>
              <p>
                Embrace understated elegance with our luxurious matte finish.
              </p>
            </div>
          </div>
        </div>

        {/* Glitter Polish */}
        <div className="col-xl-6 col-lg-6 lg-mb-30">
          <div className="price__area-item">
            <div className="price__area-item-image">
              <img src={instagram4} alt="Glitter Polish" />
            </div>
            <div className="price__area-item-content">
              <h4>
                Glitter Polish <span>Starting From</span> <span>₹ 199</span>
              </h4>
              <p>
                Add a touch of sparkle to your fingertips!  
              </p>
            </div>
          </div>
        </div>

        {/* Magnetic Polish / Cat Eye */}
        <div className="col-xl-6 col-lg-6 lg-mb-30">
          <div className="price__area-item">
            <div className="price__area-item-image">
              <img
                src={instagram5}
                alt="Magnetic Polish / Cat Eye"
              />
            </div>
            <div className="price__area-item-content">
              <h4>
                Magnetic Polish / Cat Eye <span>Starting From</span> <span>₹ 299</span>
              </h4>
              <p>
               Create mesmerizing effects with magnetic polish.
              </p>
            </div>
          </div>
        </div>

        {/* Holographic Polish */}
        <div className="col-xl-6 col-lg-6">
          <div className="price__area-item">
            <div className="price__area-item-image">
              <img src={instagram6} alt="Holographic Polish" />
            </div>
            <div className="price__area-item-content">
              <h4>
                Holographic Polish <span>Starting From</span> <span>₹ 250</span>
              </h4>
              <p>
                Dazzle with rainbow reflections!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Price;
