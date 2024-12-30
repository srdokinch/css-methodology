$(function () {
  new Splide(".splide", {
    type: "loop",
    speed: 1000,
    perPage: 1, // 表示するスライドの枚数
  }).mount();

});
$(function(){
  tabify('#tabs');

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

});