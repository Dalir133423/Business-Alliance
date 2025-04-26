$(document).ready(function(){
    $(".slider").slick({
        arrows: true, // Включаем стрелки
        prevArrow: $(".slick-prev"), // Указываем кнопки для стрелок
        nextArrow: $(".slick-next"), // Указываем кнопки для стрелок
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $(".slider-2").slick({
        arrows: true,
        prevArrow: $(".slick-prev-2"), 
        nextArrow: $(".slick-next-2"), 
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, 
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// $(document).ready(function(){
//     $(".slider-3").slick({
//         arrows: true,
//         prevArrow: $(".slick-prev-3"),
//         nextArrow: $(".slick-next-3"),
//         slidesToShow: 1,
//         slidesToScroll: 1,

//         // Без анимации
//         speed: 0,
//         cssEase: 'linear',
//         useTransform: false,
//         swipe: false,
//         draggable: false
//     });
// });


