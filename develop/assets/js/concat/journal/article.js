$(document).ready(function() {
   /* манипуляции с журналом */
   
   if($('.archive__journal').length > 0 ) {
      
      $('article').on( 'click', showArticle); // Выбор статьи и показ её маленького обзора + кнопки назад
      $('.back').on( 'click', back ); // нажатие на кнопку назад, скрытие статьи и показ списка
      
   }
   
   function showArticle() {
      $('.back').fadeIn(400);
      let data = $(this).data('article');
      
      $('.article__read#' + data).addClass('active_article').show();
      $('.journal__content').hide();
      
      $('.trigger').on( 'click', back);
   }
   function back() {
      $('.back').hide();
      $('.active_article').hide();
      
      $('.journal__content').show();
      
   }
  
});
