$(document).ready(function(){
    $('.main_btn, .main_btna, a[href="#sheldure"]').click(function(){
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(2000);
    });
    $('.close').click(function(){
        $('.overlay').fadeOut(1000);
        $('.modal').slideUp(2000);
    });

});

