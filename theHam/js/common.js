$(function(){
    $('.portfolio-tabs button').click(function(){
        var get_id = this.id;
        var get_current = $('.portfolio-table .' + get_id);

        $('.portfolio-image').not(get_current).hide();
        get_current.show();
    });

    $('#button-all').click(function(){
        $('.portfolio-image').show();
    });
});