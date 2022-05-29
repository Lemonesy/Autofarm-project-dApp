let count = ['1', '2', '3'];
let productName = ['Autofarm', 'bridge', 'noName']
let timeForStart = ['June', 'September', 'noTime']
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<p class="' + className + '">' + ('#0' + (count[index])) + '<span class="pagination-item">' + (productName[index]) + '</span>' + '<span class="pagination-data">' + '<span>' + ((timeForStart[index]) + '</span>') + '</span>' + "</p>";
    },
  },
});