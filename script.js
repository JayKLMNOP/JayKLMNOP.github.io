$(document).ready(function() {
    $('.menu-toggle').on('click', function(){
        $('.p-links').toggleClass('showing');
    })
});
$(".jumpTo").on("click", function( e ) {
    
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});
