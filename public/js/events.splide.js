document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-slider', {
		perPage    : 1,
        prev  : 'splide__arrow--prev',
		next  : 'splide__arrow--next',
        autoplay: 'true',
        type: 'fade',
        rewind:'true'
	} ).mount();
} );
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#news', {
		perPage    : 1,
        prev  : 'splide__arrow--prev',
		next  : 'splide__arrow--next',
        autoplay: 'true',
        type: 'fade',
        rewind:'true'
	} ).mount();
} );