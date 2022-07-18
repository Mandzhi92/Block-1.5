const slider = document.querySelector('.swiper-container');

function mobileSlider() {
  if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper(slider, {
      
      slideClass: 'swiper-slide',
      pagination: {
       	 el: '.swiper-pagination',
          
          clickable: true,
         },
            
         keyboard: {
            enabled:true,
            onlyInViewport:true,
         },  
         breakpoints: {
            320: {
                slidesPerView:'auto',
                speed:600,
                
            },
            768: {
                slidesPerView:3,
                allowTouchMove:false,
                disable:true,
            },
            1120: {
                slidesPerView:4,
                allowTouchMove:false,
            },
        },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()


window.addEventListener('resize', () => {
  if(window.matchMedia('(orientation: portrait)')){
   mobileSlider()
  } else{
   mySwiper.destroy()
  };
});
