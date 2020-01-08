$(window).on('load', function(){
    const paraScroller = document.querySelector(".scrollable-paragraph");  
    let executeAutoScroll;


    function autoScrollDown(){
        paraScroller.scrollTop+=1;
        if(paraScroller.scrollTop === 560){
            stopFunc();
        }
    }

    function stopFunc(){
        clearInterval(executeAutoScroll);
    }

    // created bug on scroller, made it slow, but handled it with beneath code
    paraScroller.addEventListener("touchstart", (event) => {
        stopFunc();
    });


    // this whole story.js script runs only if it matches ipad and ipad pro landscapes
    // problem was that this story.js script was running the touchstart event even on desktop and that became a bug on the scroller
    function startScroller(device) {
        if (device.matches) { // If device media query matches start the scroller
            setTimeout( () => {
                executeAutoScroll = setInterval(autoScrollDown, 50);
          }, 2000);
        }
    }

    var ipad = window.matchMedia("only screen and (min-width: 1023px) and (max-width: 1024px) and (min-height: 767px)and (max-height: 768px) and (orientation : landscape)");
    var ipadpro = window.matchMedia("only screen and (min-width: 1365px) and (max-width: 1366px) and (min-height: 1023px) and (max-height: 1024px) and (orientation : landscape)");
    
    startScroller(ipad) // Call listener function at run time
    // ipad.addListener(startScroller) // not needed apparently?!

    startScroller(ipadpro) // Call listener function at run time
    // ipadpro.addListener(startScroller)  // not needed apparently?!

});
