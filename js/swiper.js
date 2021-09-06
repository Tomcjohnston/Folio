var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
    spaceBetween: 50,
      speed: 0,
    touchRatio: 0,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
      },
        keyboard: {
        enabled: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });