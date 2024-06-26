const hamburger = document.querySelector('#hamburgerBtn');

hamburger.addEventListener('click', () => {
    document.querySelector('#primaryNav').classList.toggle("open");
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed: 2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    //autoplay
    autoplay: {
        delay: 5000,
    }
});