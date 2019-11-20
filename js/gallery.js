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

  // var owl_stage = document.getElementsByClassName("owl-stage")[0];
  // owl_stage[0];

  // var activeItemHook = document.getElementsByClassName("owl-item active");
  // console.log(activeItemHook)

  // var nextBtnHook = document.getElementsByClassName("owl-next")[0];
  // var prevBtnHook = document.getElementsByClassName("owl-prev")[0];

  // listNoHook = 0;

  // nextBtnHook.addEventListener("click", function(event){
  //   listNoHook++;
  //   console.log(listNoHook, event)
  //   checkActive(1)
  //   event.stopPropagation();
  // });

  // function checkActive(elem){
  //   if(elem){
  //     return true
  //   }else{
  //     return false;
  //   }
  // }

  var activeItem =document.querySelector(".owl-item.active .item .item-img-wrap");
  console.dir(activeItem.firstElementChild.className)

  // var activeItemHook =document.querySelector(".owl-item.active");
  // console.log(activeItemHook)









  function checkElem(elem){
    console.log("111", elem.item(0))
  }
  // Listen to owl events:
  owl.on('changed.owl.carousel', function(event) {
    activeItem = "";
  //   activeItemHook =document.querySelector(".owl-item.active .item .item-img-wrap");
  // console.dir(activeItemHook.firstElementChild.className)

  activeItem =document.getElementsByClassName("owl-item active");

  // checkElem(activeItem)
  // var activeItemHook = activeItem[0];
  // console.log(activeItem[0].children, activeItemHook)
    // console.dir(event.target.firstElementChild.firstElementChild.firstChild.firstChild.firstElementChild.firstElementChild)
    activeItemHook = "";
  })
});