new Swiper('.swiper', {
  spaceBetween: 0,
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 1000, // 3 秒自動切換
    disableOnInteraction: false, // 用戶互動後是否禁用自動播放
  },
});