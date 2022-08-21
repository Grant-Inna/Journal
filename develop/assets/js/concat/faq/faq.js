$(document).ready(function() {
   /* faq */
   let $question_holder = $('.question-holder'),
      $title = $('.question-theme');
   $question_holder.find($title).on('click', openAnswer);
   
   function openAnswer() {
      let answer = $('#question-' + $(this).data('question'));
      
      if ($(this).parent().hasClass('open')) {
         answer.fadeOut();
         $(this).parent().removeClass('open')
      } else {
         answer.fadeIn();
         $(this).parent().addClass('open')
      }
   }
});
