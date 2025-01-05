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

  //スクロールエフェクト
  function fadeUpEffect() {
		$('.fadeup--before').each(function () {
			const position = $(this).offset().top + 200;
			const scroll = $(window).scrollTop();
			const windowHeight = $(window).height();
			if (scroll >= position - windowHeight) {
				$(this).addClass('fadeup');
			}
		});
  }
  $(window).scroll(function() {
		fadeUpEffect();
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

});