


var swiperProductReview = new Swiper(".slider__reviews", {
	slidesPerView: 2,
	spaceBetween: 16,
	observer:true,
	observeParents:true,
	observeSlideChildren:true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		 },
		550: {
			slidesPerView: 2,
		 },
		750: {
		  slidesPerView: 1,
		},
		930: {
		  slidesPerView: 2,
		},
	 },
	navigation: {
		nextEl: ".swiper-button-next2",
	 },
	
 });
var swiperHomeBanner = new Swiper(".home__bannerSwiper", {
	slidesPerView: 1,
	pagination: {
	  el: ".swiper-pagination",
	},
 });


var swiperHomeNav = new Swiper(".home__navigationSwiper", {
	slidesPerView: 5,
	spaceBetween: 30,
	freeMode: true,
	breakpoints: {
		320: {
			slidesPerView: 3,
			spaceBetween: 60,
		 },
		450: {
		  slidesPerView: 3,
		  spaceBetween: 0,
		},
		600: {
		  slidesPerView: 4,
		  spaceBetween: 60,
		},
		1030: {
		  slidesPerView: 5,
		  spaceBetween: 85,

		},
	 },						
	navigation: {
		nextEl: ".swiper-button-next",
	 },
 });

