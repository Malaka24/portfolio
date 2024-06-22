console.log("pf.js loaded");  // Check if this is printed in the console
console.log(Typed);  // Check if this prints the Typed object

document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed(".text", {
        strings: [ "Frontend Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
