jQuery(document).ready(function($)
{
    "use strict";
    $("#testimonials-list").owlCarousel(
        {
            loop:true,
            center: true,
            items: 3,
            margin: true,
            autoplay: true,
            dots: true,
            autoplayTimeout: 1000,
            smartSpeed: 1,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    item: 2
                },
                1170: {
                    items: 3
                }
            }
        });
});
