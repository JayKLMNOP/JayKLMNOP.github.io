$(document).ready(function() {
    $('.hamburger').on('click', function(){
        $('.p-links').toggleClass('showing');
    })
});
$(".jumpTo").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    $('.p-links').removeClass('showing');
    
});
