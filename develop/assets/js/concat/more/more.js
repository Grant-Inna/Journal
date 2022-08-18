$(document).ready(function () {
   /* читать дальше */
   
   if ($('.relevance__holder').length > 0) {
      
      let $question_holder = $('.relevance__more'),
          $hide = $('.hidden');
      $question_holder.on('click', openAnswer);
      
      function openAnswer() {
         if ($(this).parent().hasClass('open')) {
            $hide.fadeOut();
            $(this).parent().removeClass('open');
            $(this).html('Читать дальше');
         } else {
            $hide.fadeIn();
            $(this).parent().addClass('open');
            $(this).html('Скрыть');
         }
      }
      
   }
   
   
});
