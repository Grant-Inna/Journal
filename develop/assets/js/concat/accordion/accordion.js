$(document).ready(function () {
   /* года */
   
   if ($('.archive__content').length > 0) {
      let $year_holder = $('.question-holder'),
          $title = $('.question-theme');
      
      let first_year_holder = $('.question-holder:first-child');
      
      if (document.location.hash.length == 0 ) { // Если идём через hash, то добавлять классы не нужно
         first_year_holder.addClass('open');
         $('.open .answer-text').slideDown(350);
         $('.open .trigger:last-child').addClass('active_number'); // Подсвечиваем последний выпуск за последний год
      } else {
         first_year_holder.removeClass('open'); // Убираем класс и показываем иконку
      }
      
      $year_holder.find($title).on('click', openYear);
   }
   
   function openYear() {
      let answer = $('#question-' + $(this).data('question')),
          s = 500;
      
      if (!$(this).parent().hasClass('open')) { // Проверка, открыт ли год
         $('.open').removeClass('open');
         $('.answer-text').slideUp(s);
         answer.slideDown(s);
         $(this).parent().addClass('open')
      }
   }
   
   /* требования к статье  */
   
   if ($('.requirements__list').length > 0) {
      let $year_holder = $('.question-holder'),
          $title = $('.question-theme');
      
      $year_holder.find($title).on('click', openRequirements);
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
