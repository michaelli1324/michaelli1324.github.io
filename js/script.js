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

$(".project-item").on({
    mouseover: function() {
      $(".overlay", this).css("opacity", "0.8");
      $(".overlay-title", this).css("opacity", "1.0");
      $(".overlay-body", this).css("opacity", "1.0");
      $("img", this).css("filter", "grayscale(100%)")
    },
    mouseout: function() {
      $(".overlay", this).css("opacity", "0.0");
      $(".overlay-title", this).css("opacity", "0.0");
      $(".overlay-body", this).css("opacity", "0.0");
      $("img", this).css("filter", "grayscale(0)")
    }
});
