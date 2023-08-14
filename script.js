
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    autoplay: {
        delay: 10000,
    },
  });


  var swiper1 = new Swiper(".my-section-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop: true,
    breakpoints: {
        '576': {
            slidesPerView: 2,
            spaceBetween: 8,
    },
    '320': {
        slidesPerView: 1,
        spaceBetween: 8,
}
}
});
var swiper3 = new Swiper(".gallery-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop: true,
    breakpoints: {
    '320': {
        slidesPerView: 1,
        spaceBetween: 8,
}
}
});
var swiper4 = new Swiper(".more-project-section-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    loop: true,
    breakpoints: {
        '576': {
            slidesPerView: 2,
            spaceBetween: 8,
    },
    '320': {
        slidesPerView: 1,
        spaceBetween: 8,
}
}
});

  const menubtn = document.querySelector(".menu-btn");
  const menubtn2 = document.querySelector(".menu-btn2");
  const navbarslideright = document.querySelector(".navbar-slide-right");
  const navbarslideleft = document.querySelector(".navbar-slide-left");
  const navbarslideicon = document.querySelector(".navbar-slide-icon")

  menubtn.addEventListener("click", function(){
    menubtn.classList.toggle("active");
    navbarslideright.classList.add("active");
    navbarslideleft.classList.add("active");
    navbarslideicon.classList.add("active");
  });
menubtn2.addEventListener("click",()=>{
    navbarslideright.classList.remove("active");
    navbarslideleft.classList.remove("active");
    navbarslideicon.classList.remove("active");
})

let searchSection = null;
let nav = document.querySelector(".navbar");
let title = document.querySelector(".title-section"); 
searchSection = document.querySelector(".search-section"); 
window.onscroll = function() {
    if (document.documentElement.scrollTop > 75) {
        nav.classList.add("header-scrolled")  
        title.classList.add("header-fixed")
        if (searchSection) {
            searchSection.classList.add("search-fixed")
        } 
     } else {
        nav.classList.remove("header-scrolled")
        title.classList.remove("header-fixed")
        if (searchSection) {
            searchSection.classList.remove("search-fixed")
        } 
    }
}