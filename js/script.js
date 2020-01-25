$(document).ready(function() {
 
    $('#button1').mouseenter(function(){
        $('#button1').removeClass('makeRed').addClass('makeBorder');
    });
    $('#button1').mouseleave(function(){
        $('#button1').removeClass('makeBorder').addClass('makeRed');
    });

    // challenge 2

    $('#button1').click(function(){
        $('#para1').hide('slow').show('slow');
    });
    $('#button2').click(function(){
        $('#para2').fadeIn('slow').fadeOut('slow');
    });
}); 