const Hello = document.getElementById("parallax");

window.addEventListener("scroll", function(){
    let offsetY = this.window.scrollY;
    Hello.style.backgroundPositionY = (offsetY - Hello.offsetTop) * 0.7 + "px";
})