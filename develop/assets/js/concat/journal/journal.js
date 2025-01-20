$(document).ready(function() {
   /* манипуляции с журналом */
   
   if($('.archive__journal').length > 0 ) {
      $('.trigger').on( 'click', showJournal); // Выбор номера и показ соответствующего журнала
   }
   
   function showJournal() {
      let $number = $(this).find('span').text(),
         $journal = $('#journal_' + $number);
      
      $('.archive__journal').not($journal).removeClass('active_journal').hide();
      $journal.addClass('active_journal').show();
      
      addClassNumber($number); // Подсвечивает слева номер выпуска, выбранного нажатием или через hash
      // $('body, html').scrollTop(0);
   }
   
   console.log(document.location.hash);
   if (document.location.hash.length != 0 ) { // Если номер вызывается через hash
      $journal = $(document.location.hash);
      showHashJournal($journal);
      
      let current_issue = $journal.prop('id').split('_')[1];
      addClassNumber(current_issue); // Подсвечивает слева номер выпуска, выбранного нажатием или через hash
      showYear(current_issue); // Открывает год выпуска, номер которого идёт через hash
   }
   function showHashJournal(journal) {
      $('.archive__journal').not(journal).removeClass('active_journal').hide();
      journal.addClass('active_journal').show();
   }
   function showYear(number) { // Открывает год выпуска, номер которого идёт через hash
      let current_number = $('#number-' + number ),
          current_holder = current_number.closest('.archive__block'),
          numbers_list = current_holder.find('.archive__number_holder'),
          s = 500;
      
      $('.open').removeClass('open'); // Удаляем класс open, когда он есть, есть иконка
      current_holder.addClass('open'); // Нынешний год должен быть открыт, так что добавляем иконку
      
      $('.archive__number_holder').slideUp(s); // Сворачиваем все списки
      numbers_list.slideDown(s); // Кроме нужного
   }
   
   
   
   function addClassNumber(number) { // Подсвечивает слева номер выпуска, выбранного нажатием или через hash
      let current_number = $('#number-' + number ),
          $journal_section = $('.journal__section'),
          article = $journal_section.find('article');
      
      $('.trigger').not(current_number).removeClass('active_number'); // Убираем подсветку у всех выпусков кроме нашего
      $(current_number).addClass('active_number'); // Добавляем подсветку нашему номеру

   }
});
