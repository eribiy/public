$(document).ready(function(){
    
    $('.bxslider').bxSlider({
        minSlides: 3,
        maxSlides: 21,
        slideWidth: 50,
        slideMargin: 10,
        controls: false,
        pager: false
    });

        $(".img_slider").click(function () {
            $(".quote_wrap").hide();
        });

        $(".img1").click(function () {
            $(".text1").fadeToggle("");
        });
        $(".img2").click(function () {
            $(".text2").fadeToggle("fast");
        })
        $(".img3").click(function () {
            $(".text3").fadeToggle("fast");
        })
        $(".img4").click(function () {
            $(".text4").fadeToggle("fast");
        })
        $(".img5").click(function () {
            $(".text5").fadeToggle("fast");
        })
        $(".img6").click(function () {
            $(".text6").fadeToggle("fast");
        })
        $(".img7").click(function () {
            $(".text7").fadeToggle("fast");
        })
        $(".img8").click(function () {
            $(".text8").fadeToggle("fast");
        })
        $(".img9").click(function () {
            $(".text9").fadeToggle("fast");
        })
        $(".img10").click(function () {
            $(".text10").fadeToggle("fast");
        });





});


