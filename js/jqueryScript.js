
$(".tekst").show(2000);
$(".podtekst").show(2000);
$(".otvori-mapu").click(function () {
    $("iframe").show(2000);
    $(this).hide(2000);
});

$(document).ready(function () {
    $('.next').on('click', function () {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active');
            nextImg.addClass('active');
            currentImg.css('display','none');
            nextImg.css('display','inline-block');
        }
    });
    $('.prev').on('click', function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active');
            prevImg.addClass('active');
            currentImg.css('display','none');
            prevImg.css('display','inline-block');
        }
    });
});