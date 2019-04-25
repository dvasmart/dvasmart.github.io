// about-main
(function($) {
    $(function() {
     
      $('ul.about-tab__nav').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.about-tab').find('div.about-tab__content').removeClass('active').eq($(this).index()).addClass('active');
      });
     
    });
    })(jQuery);

// portfolio
$(function(){
    $('.portfolio-tabs button').click(function(){
        var get_id = this.id;
        var get_current = $('.portfolio-table .' + get_id);

        $('.portfolio-item').not(get_current).hide();
        get_current.show();
    });

    $('#filter-all').click(function(){
        $('.portfolio-item').show();
    });
});

