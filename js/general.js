function footerLink() {
  if ($(window).width() < 767) { 
    $(".footer-col .footer-link-title").click(function(){
        if($(this).closest(".footer-col").find(".footer-link").is(':visible')){
            $(this).closest(".footer-col").find(".footer-link").slideDown();
        } else {
            $(this).closest(".footer-col").find(".footer-link").slideUp();
        }
        $(this).closest(".footer-col").siblings().find(".footer-link").stop(true,true).slideUp();
        $(this).closest(".footer-col").find(".footer-link").stop(true,true).slideToggle();
        $(this).closest(".footer-col").siblings().find("h4").stop(true,true).removeClass('open');
        $(this).closest(".footer-col").find("h4").stop(true,true).toggleClass('open');
    });
  } 
  if ($(window).innerWidth() <= 767) {
      $(".footer-col .footer-link").css('display', 'none');
  } else {
      $(".footer-col .footer-link").css('display', "");
  }
}
function slider(){
    if ($(window).innerWidth() <= 991){
        $('.three-col').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            
            responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                  
                }
            }, ]
        });
    }

    $('.manufacturer-list').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
       
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
             
            },
           
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
             
            }
        },{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
             
            }
        } ]
    });
    $('.license-list').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
             
            },
           
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
             
            }
        },{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
             
            }
        } ]
    });
    $('.product-list').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        centerPadding:50,
        autoplaySpeed: 2000,
        autoPllay: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
             
            },
           
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
             
            }
        },{
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
             dots:true,
            }
        },{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
             
            }
        } ]
      });
}

$(document).ready(function() { 
  footerLink();
  slider();
 


  
});

$(window).resize(function() {
  footerLink();
  slider();
});