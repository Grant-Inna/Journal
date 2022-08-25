$(document).ready(function() {
   /* show journal content */
   
   if( $('.trigger').length > 0 ) {
   
      let $trigger_holder = $('.trigger-holder'),
         $trigger = $('.trigger');
      $trigger_holder.find($trigger).on('click', showContent);
   
      function showContent() {
         // let answer = $('#question-' + $(this).data('question'));
         $('.active').removeClass('active'); // убираем класс active с выбранных ранее
         $(this).addClass('active'); // добавляем выбранному сейчас
         
         
         // if ($(this).parent().hasClass('open')) {
         //    answer.fadeOut();
         //    $(this).parent().removeClass('open')
         // } else {
         //    answer.fadeIn();
         //    $(this).parent().addClass('open')
         // }
      }
   }
   
   
});
