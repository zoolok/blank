$(document).ready(function () {
    /* --------------------------------------------------------
MFP
----------------------------------------------------------- */
    $('[id^="youtube-video"]').magnificPopup({
        type: 'iframe'
    });
    /* --------------------------------------------------------
     INPUTS
    ----------------------------------------------------------- */
    $('.input-group input, .input-group label').on('keyup focus blur', function() {
        if($(this).val().length > 0){
            $(this).next().addClass('filled');
            $(this).css("border-bottom","3px solid #ef2203");
        }
        else{
            $(this).next().removeClass('filled');
            $(this).css("border-bottom","1px solid #000");
        }
    });
    /* --------------------------------------------------------
 SCROLL DOWN
----------------------------------------------------------- */
    $(function () {
        "use strict";
        $(".down").on('click', function (event) {
            event.preventDefault();
            var hash = '#program';

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);
        });
    });

    /* --------------------------------------------------------
     INDEX  SLIDERS
----------------------------------------------------------- */
    $(function () {
        "use strict";
        if ($(".main-slider").length > 0) {

            $('.main-slider').owlCarousel({
                items: 4,
                nav: true,
                navText: ["", ""],
                dots: false,
                loop: true,
                margin:24,
                center: false,
                autoplay: true,
                responsive:{
                    0:{
                        items:2,

                    },
                    768:{
                        items:4

                    },
                    1920:{
                        items:4
                    }
                }
            });
        }
    });

    /* --------------------------------------------------------
MOBILE MENU
----------------------------------------------------------- */
    $('.mob-button').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('down-menu');
    });
    /* --------------------------------------------------------
PHONE MASK
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ($("#phone").length > 0) {
            $("#phone").mask("+7(999) 999-99-99");
        }
    })
});
