
$(function(){

    
    // Menu
    $(".h-menu").clone().appendTo(".mobile-menu");

    $(".menu-bar").on("click", function(){
        $(this).toggleClass("active");
        $(".mobile-menu").toggleClass("active");
        $("body").toggleClass("menu-active")
    });

    function updateHeight(){
        var HeaderHeight = $(".entire-header").outerHeight();
        $(".mobile-menu-wrappar").css({
            top: HeaderHeight,
            height: `calc(100vh - ${HeaderHeight}px)`
        });
        // $(".mobile-menu-wrappar").css('height', 'calc(100vh - '+ HeaderHeight +')');
    }
    updateHeight();
    $(window).on('resize', function(){
        updateHeight();
    });

    


    // course-card
    $(".course-card").owlCarousel({
        margin: 20,
        dots: false,
        nav: true,
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        responsiveClass:true,
        responsive: {
            0:{
                items: 1,
                nav: false,
                dots: true,
            },
            700:{
                items: 2,

            },
            1050:{
                items: 3,
            }
        }
    });

    // Testimonial
    var testimonial = $(".students").owlCarousel({
        items:1,
        smartSpeed: 1000,
        autoplay: true,
        loop: true,
        dots: false,
        items: 1,

    });

    $('.customNextBtn').click(function() {
        testimonial.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function() {
        testimonial.trigger('prev.owl.carousel', [1000]);
    })

    // logo

    $(".logo").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 20,
        loop: true,
        responsive: {
            0:{
                items: 1,
            },
            700:{
                items: 3,

            },
            1050:{
                items: 5,
            }
        }
    })
    // author

    $(".author").owlCarousel({
        smartSpeed: 1000,
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g transform="translate(0 24) scale(1 -1)"><path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"/></g></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"/></g></svg>'
        ],
    })


      // accoridion
      $('.a-content').hide();
      $('.accordion-item').first().children('.a-content').show();
      $(".a-title").on("click", function(){
          $(this).parent().siblings().removeClass("active").children(".a-content").slideUp();
          $(this).parent().toggleClass("active").children(".a-content").slideToggle();
      });

    //   counter
        $(".circle_percent").each(function() {
            var $this = $(this),
                $dataV = $this.data("percent"),
                $dataDeg = $dataV * 3.6,
                $round = $this.find(".round_per");
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
            $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
            $this.prop('Counter', 0).animate({Counter: $dataV},
            {
                duration: 2000, 
                easing: 'swing', 
                step: function (now) {
                    $this.find(".percent_text").text(Math.ceil(now)+"%");
                }
            });
            if($dataV >= 51){
                $round.css("transform", "rotate(" + 360 + "deg)");
                setTimeout(function(){
                    $this.addClass("percent_more");
                },1000);
                setTimeout(function(){
                    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                },1000);
            } 
        });

});

