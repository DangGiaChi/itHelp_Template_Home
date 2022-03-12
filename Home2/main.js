const Hello = document.getElementById("parallax");

// $(window).on('scroll', function() {
//     window.requestAnimationFrame(scrollHandler);
//  });

window.addEventListener("scroll", function(){
    let offsetY = this.window.scrollY;
    Hello.style.backgroundPositionY = (offsetY - Hello.offsetTop) * 0.7 + 'px';
})

