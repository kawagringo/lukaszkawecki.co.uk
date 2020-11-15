$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    //Hidding menu after click on link
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    //Smooth scroll
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate( {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    //Back to top button
    $('#up').on('click' , function () {
        $('html, body').animate( {
            scrollTop: 0
        }, 3000);
    });

    //AOS animations
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: false //true - loading just once  / false - work with scroll
    });

});


