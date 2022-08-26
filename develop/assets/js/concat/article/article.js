$(document).ready(function() {
   /* манипуляции с журналом */
   
   if($('.archive__journal').length > 0 ) {
      
      $('.trigger').on( 'click', showJournal); // Выбор номера и показ соответствующего журнала
      
      $('article').on( 'click', showArticle); // Выбор стати и показ её маленького обзора + кнопки назад
      
      $('.back').on( 'click', back ); // нажатие на кнопку назад, скрытие статьи и показ списка
      
   }
   
   function showJournal() {
      let $number = $(this).find('span').text(),
          $journal = $('#journal_' + $number);
          
         $('.archive__journal').not($journal).removeClass('active_journal').hide();
         $journal.addClass('active_journal').show();
         
         $('.trigger').removeClass('active_year');
         $(this).addClass('active_year');
         
         back();
   }
   
   function showArticle() {
      $('.back').fadeIn(400);
      let data = $(this).data('article');
      
      $('.article__read#' + data).addClass('active_article').show();
      $('.journal__content').hide();
      
   }
   function back() {
      $('.back').fadeOut();
      $('.active_article').fadeOut(400);
      
      $('.journal__content').show();
      
   }
  
});
