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


  var swiper = new Swiper(".my-project-section-slider", {
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
var swiper = new Swiper(".my-studio-section-slider", {
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

// Dropdown Button
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});

const optionMenu2 = document.querySelector(".select-menu2"),
       selectBtn2 = optionMenu2.querySelector(".select-btn2"),
       options2 = optionMenu2.querySelectorAll(".option2"),
       sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");
selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       
options2.forEach(option2 =>{
    option2.addEventListener("click", ()=>{
        let selectedOption = option2.querySelector(".option-text").innerText;
        sBtn_text2.innerText = selectedOption;
        optionMenu2.classList.remove("active");
    });
});


let nav = document.querySelector(".navbar");
let title = document.querySelector(".title-section"); 
let searchSection = document.querySelector(".search-section"); 
window.onscroll = function() {
    if (document.documentElement.scrollTop > 76) {
        nav.classList.add("header-scrolled")  
        title.classList.add("header-fixed")
        searchSection.classList.add("search-fixed") 
     } else {
        nav.classList.remove("header-scrolled")
        title.classList.remove("header-fixed")
        searchSection.classList.remove("search-fixed") 
    }
}