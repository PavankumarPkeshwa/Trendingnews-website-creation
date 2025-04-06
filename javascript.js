$(document).ready(function(){
    $('.signup-toggle').on('click', function(e){
        e.preventDefault(); // Prevent the default action of the link
        // Toggle the visibility of the dropdown menu
        $(this).next('.dropdown').toggleClass('hidden visible');
    });
     $('.bx-menu').on('click', function(){
         $('.nav').toggleClass('showing');
         $('.nav ul').toggleClass('showing');
          // Dynamically adjust slider margin based on menu state
    if ($('.nav').hasClass('showing')) {
        $('.post-slider').css('margin-top', '600px'); // Add space when menu is shown
    } else {
        $('.post-slider').css('margin-top', '0'); // Remove space when menu is hidden
    }
 });
    $('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });  
});
