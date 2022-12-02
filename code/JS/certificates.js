const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    
    slidesPerView: 1,
    spaceBetween: 200,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

    pagination: {
      el: '.swiper-pagination',
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
      },
  

    scrollbar: {
      el: '.swiper-scrollbar',
    }

  });
  