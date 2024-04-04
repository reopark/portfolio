$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".headerbar").addClass("backgrondcolor");
        } else {
            $(".headerbar").removeClass("backgrondcolor");
        }
    });
});
