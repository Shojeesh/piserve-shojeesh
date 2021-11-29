
// Detect iOS
	if(navigator.userAgent.indexOf('Mac') > 0)
		$('body').addClass('isIos');

// Burger Menu

$('.burgerBlock').on('click', function(){
	burgerOpen()
})

$('.drawerBackdrop').on('click', function(){
	burgerClose()
})

const burgerOpen = () => {
	$('.headerMiddle').addClass('isActive')
	$('.drawerBackdrop').addClass('isActive')
	$('body').addClass('noScroll')
}

const burgerClose = () => {
	$('.drawerBackdrop').removeClass('isActive')
	$('.headerMiddle').removeClass('isActive')
	$('body').removeClass('noScroll')
}

let swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".sliderNext",
      prevEl: ".sliderPrev",
    },
    loop: true,
  });