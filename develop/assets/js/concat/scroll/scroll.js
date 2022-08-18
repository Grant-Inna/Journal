$(document).ready(function () {
   /* плавный скрол */
   
   if ($('.menu__holder').length > 0) {
    
      $('.menu__item').on( 'click', function(event) {
         
         event.preventDefault();
         
         let id  = $(this).attr('href'),
             top = $(id).offset().top; // получаем координаты блока
         
         $('body, html').animate({scrollTop: top - 30 }, 700); // плавно переходим к блоку
   
      });
      
   }
   
   
});



