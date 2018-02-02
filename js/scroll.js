$(function() {

    $(document).on('scroll', function(event) {
        if ($(".menu").offset().top > 150) {
            $(".menu").css('display', 'none');
        } else {
            $(".menu").css('display', 'block');
        }
    })

});