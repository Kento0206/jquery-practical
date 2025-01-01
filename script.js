$(function() {
    //カーソルが重なったとき色変化//
    $('#myProfile').on('mouseover', function() {
        $(this).css('opacity', '0.5');
    });
    $('#myProfile').on('mouseout', function() {
        $(this).css('opacity', '1.0');
    });
    $('#menuAbout').on('mouseover', function() {
        $(this).css('opacity', '0.5');
    });
    $('#menuAbout').on('mouseout', function() {
        $(this).css('opacity', '1.0');
    });
    $('#menuWorks').on('mouseover', function() {
        $(this).css('opacity', '0.5');
    });
    $('#menuWorks').on('mouseout', function() {
        $(this).css('opacity', '1.0');
    });
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        fade: true,
        speed: 500,
    });
    // TOPボタンのフェイド処理 //
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
          $('#top').fadeIn(1000);
        } else {
          $('#top').fadeOut(1000);
        }
      });
    // スクロールスピード調整 //
      $('a[href^="#"]').click(function() {
        const link = $(this).attr('href');
        console.log(link)
        const positionLink = $(link).offset().top;
        $('html, body').animate({
            scrollTop: positionLink
        }, 500);
      });
      
    //セクションをフェイドインさせる//
    $(window).scroll(function() {
        const scrollAmount = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('section').each(function() {
        const position = $(this).offset().top;
        if(scrollAmount > position - windowHeight + 100){
            $(this).addClass('fade-in');
        }
    });
    });
    //画像の拡大表示//
    $('.modalImg').click(function() {
        const modalSrc = $(this).attr('src');
        console.log(modalSrc);
        $('#modalImg').attr('src', modalSrc);
        $('#modal').fadeIn();
    });
    $('#close').click(function() {
        $('#modal').hide();
    });
});