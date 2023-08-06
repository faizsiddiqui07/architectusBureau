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