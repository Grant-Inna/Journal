$(document).ready(function () {
   /* года */
   
   if ($('.archive__content').length > 0) {
      let $question_holder = $('.question-holder'),
          $title = $('.question-theme');
      
      $('.question-holder:first-child').addClass('open');
      $('.open .answer-text').slideDown(350);
      
      $question_holder.find($title).on('click', openYear);
   }
   
   function openYear() {
      let answer = $('#question-' + $(this).data('question')),
          s = 500;
      
      if (!$(this).parent().hasClass('open')) {
         $('.open').removeClass('open');
         $('.answer-text').slideUp(s);
         answer.slideDown(s);
         $(this).parent().addClass('open')
      }
   }
   
   /* требования к статье  */
   
   if ($('.requirements__list').length > 0) {
      let $question_holder = $('.question-holder'),
          $title = $('.question-theme');
      
      $question_holder.find($title).on('click', openRequirements);
   }
   
   function openRequirements() {
      let answer = $('#question-' + $(this).data('question')),
          s = 500;
      
      if (!$(this).parent().hasClass('open')) {
         $('.open').removeClass('open');
         $('.answer-text').slideUp(s);
         answer.slideDown(s);
         $(this).parent().addClass('open')
      } else {
         answer.slideUp(s);
         $(this).parent().removeClass('open')
      }
   }
});
