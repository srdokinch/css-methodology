$(function () {
  // スライダーのjs
  new Splide(".splide", {
    type: "loop",
    speed: 1000,
    perPage: 1, // 表示するスライドの枚数
  }).mount();

  // タブのjs
  tabify('#tabs');

  // stickyヘッダーのjs
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 60) {
      $(".header").addClass("js-header");
    } else {
      $(".header").removeClass("js-header");
    }
  });


  //FAQのアコーディオン
  $('.accordion__head').on('click', function(){
    $(this).toggleClass('accordion__head--active');
    $(this).next().slideToggle(300);
  });

  // スクロールヒントのjs
  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: "スクロールできます",
    },
  });

  // フェードイン
  $(window).scroll(function (){
    $('.fade-in').each(function(){
      var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
  
        if (scroll > elemPos - windowHeight + 150){
          $(this).addClass('scroll-in');
        }
    });
  });

});