$(document).ready(function() {
    $('.tabs-wrapper').each(function() {
        let ths = $(this);
        ths.find('.reg-content').not(':first').hide();
        ths.find('.reg').click(function() {
            ths.find('.reg').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.reg-content').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');
    });
})