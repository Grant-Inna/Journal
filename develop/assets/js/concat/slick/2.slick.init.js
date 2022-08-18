$(document).ready(function() {
   /* инициализация листалки */
   if ($('.slider__holder').length > 0) {
      // $(".slider").not('.slick-initialized').slick()
      
      $('.slider__content').not('.slick-initialized').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 400,
         centerPadding: '10px',
         autoplay: true,
         autoplaySpeed: 5000,
         centerMode: true,
      });
   }
   
});
