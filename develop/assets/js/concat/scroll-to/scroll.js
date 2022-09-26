$(document).ready(function () {
   /* плавный скрол */
   
   if ($('.nav__link').length > 0) {
    
      $('.nav__link').on( 'click', function(event) {
         
         event.preventDefault();
         
         let id  = $(this).attr('href'),
             top = $(id).offset().top; // получаем координаты блока
         
         $('body, html').animate({scrollTop: top - 30 }, 700); // плавно переходим к блоку
   
      });
      
   }
   
   
});



