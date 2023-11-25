$(document).ready(function () {
  $('.quiz-slider').slick({
	  infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	});

  $('.quiz-content-item').on('click', function() {
  	 $('.quiz-slider').slick('slickNext');
  })

  $('.quiz-next').on('click', function() {
  	if ($(this).hasClass('just-go')) {
  		$('.quiz-slider').slick('slickNext');
  	}
  	else{
  	    $('.quiz-slider').slick('slickNext');
  	}
  	return false;
  })

  $('.quiz-prev').on('click', function() {
  	 $('.quiz-slider').slick('slickPrev');
  	 return false;
  })

  let years_counter = 0;
  $('.years__link').on('click', function() {
  	$('.years-hidden').toggleClass('visible');
  	if (years_counter == 0) {
  		$(this).text('Свернуть')
  		years_counter = 1;
  	}
  	else{
  		$(this).text('Посмотреть варианты покрытий')
  		years_counter = 0;
  	}
  	return false;
  })

  $('.footer-title').on('click', function() {
    let list = $(this).closest('.col');
    list = $(list).children('.footer-list-wrapper');
    $(list).toggleClass('active');
    $(this).toggleClass('active');
  })
})