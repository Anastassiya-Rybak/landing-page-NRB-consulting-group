$('.slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1045, // размер экрана 1024
        settings: {
          slidesToShow: 3, // тут меняем slidesToShow
        }
      },
      {
        breakpoint: 800, // размер экрана 600
        settings: {
          slidesToShow: 2, // тут меняем slidesToShow
        }
      },
      {
        breakpoint: 480, // размер экрана 480
        settings: {
          slidesToShow: 1, // тут меняем slidesToShow
        }
      }
    ]
  });
  