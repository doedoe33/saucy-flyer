$(window).on('load', function(){

    // --- carousel slider
    var owl = $('.owl-carousel');
    
    owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: [
            "<i class='fas fa-chevron-left fa-2x'></i>",
            "<i class='fas fa-chevron-right fa-2x'></i>"
        ],
        autoplay: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            450:{
                items: 2
            },
            
            750: {
                items: 3
            },
            900: {
                items: 4
            },
            1020 : {
                items: 5
            },
            1250: {
                items: 6
            }
        }
    });

    // --- mousewheel
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.originalEvent.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


    // --- box slideup
    var items = document.querySelectorAll('.item');
    var boxes = $('.animated').toArray()

    function addSlider(item, box){
        box.style.visibility = "hidden";
        item.addEventListener('mouseover',function(){
            box.style.visibility = "visible"
            box.classList.add("bounceInUp");
            box.classList.remove("bounceOutDown");
        });

        item.addEventListener('mouseout', function(){
            box.classList.remove("bounceInUp");
            box.classList.add("bounceOutDown");
        });
    }

    items.forEach((item, i) => addSlider(item, boxes[i]));
});