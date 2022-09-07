$(document).ready(function () {
   /* года */
   
   if ($('.question-holder').length > 0) {
      let $question_holder = $('.question-holder'),
          $title = $('.question-theme');
      
      $('.question-holder:first-child').addClass('open');
      $('.open .answer-text').slideDown(350);
      
      // $('.open').find('.answer-text').style('display', 'block');
      
      $question_holder.find($title).on('click', openAnswer);
   }
   
   function openAnswer() {
      let answer = $('#question-' + $(this).data('question')),
          s = 500;
      
      if (!$(this).parent().hasClass('open')) {
         $('.open').removeClass('open');
         $('.answer-text').slideUp(s);
         answer.slideDown(s);
         $(this).parent().addClass('open')
      }
   }
});
