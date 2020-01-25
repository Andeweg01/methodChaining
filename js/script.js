$(document).ready(function() {
 
    $('#button1').mouseenter(function(){
        $('#button1').removeClass('makeRed').addClass('makeBorder');
    })
    $('#button1').mouseleave(function(){
        $('#button1').removeClass('makeBorder').addClass('makeRed');
    })
}); 