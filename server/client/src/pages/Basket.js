import React from 'react';

const Basket = () => {
  return (
   <main className="content-main mt-4">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            {/* <img class="slide-image" src="./public/image/cover.png" alt="main"></img> */}
            <div className="swiper-body">
              <h2 className="swiper-body__title-one">Win <span>3 NFTs </span> for maximum farm</h2>
              <p className="swiper-body__desc-one">Start your farming journey now to get exclusive conditions and items</p>
<div className="swiper-body-buttons">
  <a href="/" className="swiper-body__btn swiper-body__buy">Buy Now</a>
              <a href="/" className="swiper-body__btn swiper-body__view">View info</a>

</div>
              
              
            </div>
            <div className="swiper-footer">
              <div className="swiper-info">
                <p className="swiper-info-autofarm">Premium Access</p>
                <p className="swiper-info-item__autofarm">Token ID <span>Coming soon</span></p>
                <p className="swiper-info-item__autofarm">Limit <span>3 per wallet</span></p>
                <p className="swiper-info-item__autofarm">Base Price <span>0.03 ETH</span></p>
                <p className="swiper-info-item__autofarm">Mint Date <span>4 quarter 2022</span></p>
                <p className="swiper-info-item__autofarm">Bonus <span> Bronze  </span><span> Silver</span><span> Platinum </span></p>

              </div>
              <div className="swiper-cover">
                {/* <img class="swiper-cover__image" src="./image/cover-01.png" alt=""> */}
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="swiper-body">Coming Soon.....</div>
            <div className="swiper-footer">Coming Soon

              <div className="swiper-cover">
                {/* <img class="swiper-cover__image" src="./image/cover2.png" alt=""> */}
              </div>
            </div>
          </div>
        
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </main>
  );
};

export default Basket;
