
// sections time to show 

    AOS.init({
      duration: 1200,
    });



    

    $(window).on('scroll',function(){
      if($(this).scrollTop() > 40) {
        // logo scroll 
        $('.navbar-brand').removeClass('logo')
        $('.navbar-brand').addClass('logo-scroll')
        // header background scroll 
          $('nav').addClass('bg-scroll-color');
          // header height scroll 
          $('nav').addClass('nav-scroll-height');
          $('nav').removeClass('nav-original-height');
          // navbar items scroll 
          $('.nav-item a').removeClass('nav-link-color');
          $('.nav-item a').addClass('nav-link-scrollColor');
      }  
     else{
        // logo scroll 
      $('.navbar-brand').addClass('logo')
      $('.navbar-brand').removeClass('logo-scroll')
       // header background scroll 
      $('nav').removeClass('bg-scroll-color');
       // header height scroll 
      $('nav').removeClass('nav-scroll-height');
      $('nav').addClass('nav-original-height');
      // navbar items scroll 
      $('.nav-item a').removeClass('nav-link-scrollColor');
      $('.nav-item a').addClass('nav-link-color');
    
     }
  });



///////////////////////////////////////////////////////////////  TESTOMANIAL ///////////////////////////////////////

    (function () {
      "use strict";
    
      var carousels = function () {
        $(".owl-carousel1").owlCarousel({
          loop: true,
          center: true,
          margin: 0,
          responsiveClass: true,
          nav: false,
          autoplay:true,
          autoplayTimeout:3500,
          autoplayHoverPause:true,
          responsive: {
            0: {
              items: 1,
              nav: false
            },
            680: {
              items: 2,
              nav: false,
              loop: false
            },
            1000: {
              items: 3,
              nav: true
            }
          }
        });
      };
      
    
      (function ($) {
        carousels();
      })(jQuery);
    })();
    
    


  
    




    