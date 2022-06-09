// SLIDER

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        600: {
            items: 1,
            dots: true,
        },
        1000: {
            items: 2
        }
    }
})


// DESPLEGABLES

let $titleTab = $('.dd-title');
$titleTab.on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next().stop().slideUp(500);
        $(this).next().find('p').removeClass('show');
    } else {
        $(this).addClass('active');
        $(this).next().stop().slideDown(500);
        $(this).parent().siblings().children('.dd-title').removeClass('active');
        $(this).parent().siblings().children('.dd-contenido').slideUp(500);
        $(this).parent().siblings().children('.dd-contenido').find('p').removeClass('show');
        $(this).next().find('p').addClass('show');
    }
});