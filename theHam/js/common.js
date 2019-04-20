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

