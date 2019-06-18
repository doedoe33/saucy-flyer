$(window).on('load', function(){

  // --- carousel slider
  var owl = $('.owl-carousel');
  
  owl.owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
      "<i class='fas fa-chevron-left fa-3x'></i>",
      "<i class='fas fa-chevron-right fa-3x'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    dotsData: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  // --- mousewheel
  // owl.on('mousewheel', '.owl-stage', function (e) {
  //     if (e.originalEvent.deltaY > 0) {
  //         owl.trigger('next.owl');
  //     } else {
  //         owl.trigger('prev.owl');
  //     }
  //     e.preventDefault();
  // });

});