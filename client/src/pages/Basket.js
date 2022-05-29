import React from 'react';

const Basket = () => {
  return (
   <main class="content-main mt-4">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            {/* <img class="slide-image" src="./public/image/cover.png" alt="main"></img> */}
            <div class="swiper-body">
              <h2 class="swiper-body__title-one">Win <span>3 NFTs </span> for maximum farm</h2>
              <p class="swiper-body__desc-one">Start your farming journey now to get exclusive conditions and items</p>
<div class="swiper-body-buttons">
  <a href="/" class="swiper-body__btn swiper-body__buy">Buy Now</a>
              <a href="/" class="swiper-body__btn swiper-body__view">View info</a>

</div>
              
              
            </div>
            <div class="swiper-footer">
              <div class="swiper-info">
                <p class="swiper-info-autofarm">Premium Access</p>
                <p class="swiper-info-item__autofarm">Token ID <span>Coming soon</span></p>
                <p class="swiper-info-item__autofarm">Limit <span>3 per wallet</span></p>
                <p class="swiper-info-item__autofarm">Base Price <span>0.03 ETH</span></p>
                <p class="swiper-info-item__autofarm">Mint Date <span>4 quarter 2022</span></p>
                <p class="swiper-info-item__autofarm">Bonus <span> Bronze  </span><span> Silver</span><span> Platinum </span></p>

              </div>
              <div class="swiper-cover">
                {/* <img class="swiper-cover__image" src="./image/cover-01.png" alt=""> */}
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-body">Coming Soon.....</div>
            <div class="swiper-footer">Coming Soon

              <div class="swiper-cover">
                {/* <img class="swiper-cover__image" src="./image/cover2.png" alt=""> */}
              </div>
            </div>
          </div>
        
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </main>
  );
};

export default Basket;
