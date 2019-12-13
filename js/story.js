$(window).on('load', function(){
    const whiteScroller = document.querySelector(".scrollable-paragraph");  
    let executeAutoScroll;


    function autoScrollDown(){
        whiteScroller.scrollTop+=1;
        if(whiteScroller.scrollTop === 560){
            stopFunc();
        }
    }

    function stopFunc(){
        clearInterval(executeAutoScroll);
    }

    // created bug on scroller, made it slow, but handled it with beneath code
    whiteScroller.addEventListener("touchstart", (event) => {
        stopFunc();
    });


    // handles running script only when looking at a media query; well in this case ipad & ipad pro media query
    // problem was that this story.js script was running the touchstart even on desktop and that became a bug on the scroller
    function myFunction(x) {
        if (x.matches) { // If media query matches
            setTimeout( () => {
                executeAutoScroll = setInterval(autoScrollDown, 50);
          }, 2000);
        }
    }

    var x = window.matchMedia("only screen and (min-width: 1024px) and (max-height: 1366px)");
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) 

});
