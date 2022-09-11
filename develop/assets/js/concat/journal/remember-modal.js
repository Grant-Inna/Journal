$(document).ready(function () {
   /* открытие модального окна с текстом */
   
   if ($('.journal__remember').length > 0) {
      
      $('.journal__remember').on('click', showModal);
      
      $('.modal__overlay').on( 'click', function(event) {
         event.stopPropagation();
         if ( $(event.target).hasClass('modal__overlay')) {
            $(this).removeClass('visible_modal');
         }
    });
      $('.modal__close').on('click', closeModal);
      
   }
   
   function showModal() {
      let $modal_data = $(this).data('modal');
      $('.modal__overlay#' + $modal_data).addClass("visible_modal");
   }
   function closeModal() {
      let $this_overlay = $(this).parents('.modal__overlay');
     $this_overlay.removeClass('visible_modal');
   }
   
   
});
