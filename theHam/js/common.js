// about-main - tabs
(function($) {
    $(function() {
     
      $('ul.about-tab__nav').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.about-tab').find('div.about-tab__content').removeClass('active').eq($(this).index()).addClass('active');
      });
     
    });
    })(jQuery);

// navigation - small
$(document).on("scroll",function(){
    if($(document).scrollTop()>50){ 
        $("a.navigation__logo").removeClass("navigation__large").addClass("navigation__small");
        }
    else{
        $("a.navigation__logo").removeClass("navigation__small").addClass("navigation__large");
        }
});

// navigation - slow
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
});

// portfolio - filter
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

// home-main - slider
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
});

// testimonial - 4 statistic buttons
$(document).ready(function(){
    var show = true;
    var countbox = "#testimonial";
    $(window).on("scroll load resize", function(){
    if(!show) return false;     
    var w_top = $(window).scrollTop();        
    var e_top = $(countbox).offset().top;     
    var w_height = $(window).height();        
    var d_height = $(document).height();      
    var e_height = $(countbox).outerHeight(); 
    if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
    $(".spincrement").spincrement({
    thousandSeparator: "",
    duration: 10000,
    });
    show = false;
    }
    });
});