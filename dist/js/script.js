$(function(){
  tabify('#tabs');

   //Swiperの初期化
   const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(function () {
    $(window).on("scroll", function () {
      // ファーストビューの高さを取得
      if ($(window).scrollTop() > 60) {
        // スクロールの位置がファーストビューより下の場合にclassを付与
        $(".header").addClass("js-header");
      } else {
        // スクロールの位置がファーストビューより上の場合にclassを外す
        $(".header").removeClass("js-header");
      }
    });
  });

});