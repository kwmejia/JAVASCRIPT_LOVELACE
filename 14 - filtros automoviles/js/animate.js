const banner = document.querySelector(".banner");

setInterval(() => {
    banner.style.backgroundImage = "url(img/bg-light.jpg)";

    setTimeout(() => {
        banner.style.backgroundImage = "url(img/bg.jpg)";

    }, 1000)

}, 2200);