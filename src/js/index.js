$(document).ready(function () {
    let commentsCarousel = $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsContainer: '.comment__selector'
    });

    $('.comment__selector-item').click(function() {
        commentsCarousel.trigger('to.owl.carousel', [$(this).index(), 1000]);
    })
});
