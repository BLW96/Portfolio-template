// <!-- nav Toggle -->

function toggle() {
    var sec = document.getElementById("sec");
    var nav = document.getElementById("navigation");
    sec.classList.toggle("active");
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
        document.body.classList.add("overflow-y");
    } else {
        document.body.classList.remove("overflow-y");
    }
}

// <!-- skrollr -->

var s = skrollr.init({ forceHeight: false });
if (s.isMobile()) {
    s.destroy();
}

// <!-- scroll Top Bar -->

window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
