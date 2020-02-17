$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
    });
});
$(document).ready(function () {
    new WOW().init();
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
        $('.search-input').focusOut();
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });

    $('.mo-menu-icon').click(function () {
        $(".mo-sidebar").fadeIn(300);
        $(".sec-head").addClass("nav-in");
        $("body").addClass("overflow");
    });

    $('.mo-sidebar').click(function () {
        $(".mo-sidebar").fadeOut(400);
        $(".sec-head").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    $('.sec-head').click(function (e) {
        e.stopPropagation();
    });
    $('.close-btn').click(function () {
        $(".mo-sidebar").fadeOut(400);
        $(".sec-head").removeClass("nav-in");
        $("body").removeClass("overflow");
    });
    $('.mo-drop-open').click(function (e) {
        $('.mo-drop').stop().slideToggle(400);
        $(this).toggleClass("drop-open");
    });


    ///////////////Sliders//////////////////
    var cat1swiper = new Swiper('#cat1 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat1 .swiper-button-next',
            prevEl: '#cat1 .swiper-button-prev',
        },
        pagination: {
            el: '#cat1 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });
    var cat2swiper = new Swiper('#cat2 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat2 .swiper-button-next',
            prevEl: '#cat2 .swiper-button-prev',
        },
        pagination: {
            el: '#cat2 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });
    var cat3swiper = new Swiper('#cat3 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat3 .swiper-button-next',
            prevEl: '#cat3 .swiper-button-prev',
        },
        pagination: {
            el: '#cat3 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });
    var cat4swiper = new Swiper('#cat4 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat4 .swiper-button-next',
            prevEl: '#cat4 .swiper-button-prev',
        },
        pagination: {
            el: '#cat4 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });
    var cat5swiper = new Swiper('#cat5 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#cat5 .swiper-button-next',
            prevEl: '#cat5 .swiper-button-prev',
        },
        pagination: {
            el: '#cat5 .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        },
    });


    if ($(window).width() < 992) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }


    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })
});