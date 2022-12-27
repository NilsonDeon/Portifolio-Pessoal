const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    breakpoints: {

      320: {
        slidesPerView: 1,
        spaceBetween: 200,
      },

        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  