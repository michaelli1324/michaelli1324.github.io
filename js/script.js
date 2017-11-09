$(document).ready(function() {
    $('#main-text').css('opacity', '1.0');
    $('#main-text').css('transform', 'translateY(20px)')
});

$('.nav-item').hover(function() {
    $(this).css("background-color", "#2d2d2d");
}, function() {
    $(this).css("background-color", "#4B4B4B");
})

$('.social-media-icon').hover(function() {
    $('#social-media-text').html(($(this)[0].dataset.iconName))
    $('#social-media-text').addClass('animated fadeIn')
}, function() {
    $('#social-media-text').removeClass('animated fadeIn')
})

// $('#navbar').hover(function() {
//     $(this).css("opacity", "0.8");
// }, function() {
//     $(this).css("opacity", "0.1");
// })
