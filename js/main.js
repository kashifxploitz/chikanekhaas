(function ($) {
    "use strict";

    new WOW().init();

    /*---background image---*/
    function dataBackgroundImage() {
        $("[data-bgimg]").each(function () {
            var bgImgUrl = $(this).data("bgimg");
            $(this).css({
                "background-image": "url(" + bgImgUrl + ")", // + meaning concat
            });
        });
    }

    $(window).on("load", function () {
        dataBackgroundImage();
    });

    // filters
    $(".filter h4").click(function () {
        $(this).parent().toggleClass("open");
       
    });

    $(".mobile-filter").click(function () {
        $(".filters").addClass("open");
        $(".off_canvars_overlay").addClass("show");
    });
    $(".filters .close").click(function () {
        $(".filters").removeClass("open");
        $(".off_canvars_overlay").removeClass("show");
    });

    $(".aiz-plus-minus input").each(function () {
        var e = $(this),
            a = parseInt($(this).attr("min")),
            t = parseInt($(this).attr("max")),
            l = parseInt($(this).val());
        l <= a && e.siblings('[data-type="minus"]').attr("disabled", !0),
            l >= t && e.siblings('[data-type="plus"]').attr("disabled", !0);
    });
    $(".aiz-plus-minus button").on("click", function (e) {
        e.preventDefault();
        var a = $(this).attr("data-field"),
            t = $(this).attr("data-type"),
            l = $("input[name='" + a + "']"),
            i = parseInt(l.val());
        isNaN(i)
            ? l.val(0)
            : "minus" == t
            ? (i > l.attr("min") && l.val(i - 1).change(),
              parseInt(l.val()) == l.attr("min") &&
                  $(this).attr("disabled", !0))
            : "plus" == t &&
              (i < l.attr("max") && l.val(i + 1).change(),
              parseInt(l.val()) == l.attr("max") &&
                  $(this).attr("disabled", !0));
    });
    $(".aiz-plus-minus input").on("change", function () {
        var e = parseInt($(this).attr("min")),
            a = parseInt($(this).attr("max")),
            t = parseInt($(this).val());
        (name = $(this).attr("name")),
            t >= e
                ? $(this).siblings("[data-type='minus']").removeAttr("disabled")
                : (alert("Sorry, the minimum limit has been reached"),
                  $(this).val($(this).data("oldValue"))),
            t <= a
                ? $(this).siblings("[data-type='plus']").removeAttr("disabled")
                : (alert("Sorry, the maximum limit has been reached"),
                  $(this).val($(this).data("oldValue")));
    });

        var minVal = 1, maxVal = 20; // Set Max and Min values
        // Increase product quantity on cart page
        var minVal = 0, maxVal = 12; // Set Max and Min values
        $(".selTime .date .inc").on('click', function(){
                var $parentElm = $(this).parent("div");
                var value = $parentElm.find("input").val();
                console.log(value)
                if (value < maxVal) {
                    value++;
                }
                $parentElm.find("input").val(value);
        });
        // Decrease product quantity on cart page
        $(".selTime  .date .dec").on('click', function(){
                var $parentElm = $(this).parent("div");
                var value = $parentElm.find("input").val();
                if (value > 0) {
                    value--;
                }
                $parentElm.find("input").val(value);
            });

        var minMins = 0, maxMins = 59; // Set Max and Min values
        $(".selTime .mins .inc").on('click', function(){
                var $parentElm = $(this).parent("div");
                var value = $parentElm.find("input").val();
                if (value < maxMins) {
                    value++;
                }
                $parentElm.find("input").val(value);
        });
        // Decrease product quantity on cart page
        $(".selTime  .mins .dec").on('click', function(){
            var $parentElm = $(this).parent("div");
            var value = $parentElm.find("input").val();
            if (value > 0) {
                value--;
            }
            $parentElm.find("input").val(value);
        });

        // testi
        $('.testimonialPage .card .link').click(function(){
            $(this).parent().find('.testi').toggleClass('show');
            if($(this).hasClass('more')){
                $(this).text('Read less');
                $(this).removeClass('more')
            }
            else {
                $(this).text('Read more');
                $(this).addClass('more');
            }
        });

        $(document).ready(function () {
            $("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
                e.preventDefault();
                $(this).siblings('a.active').removeClass("active");
                $(this).addClass("active");
                var index = $(this).index();
                $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
                $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
            });
        });

        $('.accordion .tab .tab-btn').click(function () {
            $('.accordion .tab').removeClass('open');
            $(this).parent().addClass('open');
        })

        $(".prod-img").click(function () {
            $("#web-view").show();
            $("img.lazy").lazyload({
                effect: "fadeIn",
            });
        });
        $(".product-popup .close").click(function () {
            $(".product-popup").hide();
        });
        $(".prod-img-mob span").click(function () {
            $("#mob-view").show();
            $("img.lazy").lazyload({
                effect: "fadeIn",
            });
        });

    // login
    $("#login .signup").click(function () {
        $("#signup").removeClass("d-none");
        $("#login").addClass("d-none");
    });
    $("#loginwe .signup").click(function () {
        $("#signup").removeClass("d-none");
        $("#loginwe").addClass("d-none");
    });
    $("#signup .login").click(function () {
        $("#signup").addClass("d-none");
        $("#loginwe").removeClass("d-none");
    });
    $("#signup .email-link").click(function () {
        $(".p-no").addClass("d-none");
        $(".email ").removeClass("d-none");
    });
    $("#signup .phone-link").click(function () {
        $(".p-no").removeClass("d-none");
        $(".email ").addClass("d-none");
    });
    $(document).on("click", ".pass", function () {
        const passwordInput = $(this).parent().find(".password");
        const eyeIcon = $(this).find("i");
        if (passwordInput.attr("type") == "password") {
            passwordInput.attr("type", "text");
            eyeIcon.removeClass("fa-eye").addClass("fa-eye-slash");
        } else {
            passwordInput.attr("type", "password");
            eyeIcon.removeClass("fa-eye-slash").addClass("fa-eye");
        }
    });

    // checkout
    $(".tabss a.phn").click(function () {
        $("#phn").removeClass("d-none");
        $("#eml").addClass("d-none");
        $(this).addClass("active");
        $(".tabss a.eml").removeClass("active");
    });
    $(".tabss a.eml").click(function () {
        $("#eml").removeClass("d-none");
        $("#phn").addClass("d-none");
        $(this).addClass("active");
        $(".tabss a.phn").removeClass("active");
    });

    $(".new_address_bar").click(function () {
        $("#new-address-modal").modal("show");
    });
    // $("#phone_verification button").click(function () {
    //     $("#phone_verification").modal("hide");
    // });

    $(".bankT input").change(function (e) {
        if ($(this).prop("checked")) {
            $(".bankdetails").removeClass("d-none");
        }
    });
    $(".pay-method").click(function (e) {
        $(".bankdetails").addClass("d-none");
    });

    //   $( ".btn-next" ).click(function() {
    //           $('#phone_verification').modal('show');

    //                 var timeLeft = 30;
    //                 var elem = document.getElementById('otptimer');
    //                 var timerId = setInterval(countdown, 1000);
    //                 function countdown() {
    //                 if (timeLeft == -1) {
    //                     clearTimeout(timerId);
    //                     $('#otptimer').html('<a onclick="resend()" href="javascript:;" class="btn btn-link  ">Resend Code</a>')
    //                 } else {
    //                     elem.innerHTML = 'Resend code after 00:' + timeLeft;
    //                     timeLeft--;
    //                 }
    //             }

    //         //   if(timeLeft==0){
    //         //     $('#timer').html('<a onclick="resend()" href="javascript:;" class="btn btn-link  ">Resend Code</a>')
    //         //   }
    //  });
    function showTimer(timeLeft) {
        var elem = document.getElementById("otptimer");
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                $("#otptimer").html(
                    '<a onclick="resend()" href="javascript:;" class="btn btn-link  ">Resend Code</a>'
                );
            } else {
                elem.innerHTML = "Resend code after 00:" + timeLeft;
                timeLeft--;
            }
        }
    }

    $("#file_upload").change(function () {
        const file = this.files[0];
        console.log(file);
        if (file) {
            let reader = new FileReader();
            reader.onload = function (event) {
                console.log(event.target.result);
                $("#profile_pic").attr("src", event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    $(".edit_img").click(function () {
        $(".update-img").removeClass("d-none");
    });
    $(".update-img button").click(function () {
        $(".update-img").addClass("d-none");
    });



    //loader
    // $(window).on("load", function () {
    //     $(".loaders").fadeOut();
    // });

    /*---stickey menu---*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

  

    /*---slider activation---*/
    $(".slider-galeria").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        asNavFor: ".slider-galeria-thumbs",
    });
    $(".slider-galeria-thumbs").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: ".slider-galeria",
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        infinite: false,
    });
     $(".product-gallery-thumb").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
    });
  
    $(".product-gallery-thumb1").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
    });
    $(".product_details_page_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
    });
    var $slider = $(".slider_area");
    if ($slider.length > 0) {
        $slider.owlCarousel({
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            autoplay: true,
            loop: true,
            nav: false,
           
            autoplayTimeout: 5000,
            items: 1,
            dots: false,
        });
    }

    /*---product column4 activation---*/
    var $porductColumn4 = $(".product_column4");
    if ($porductColumn4.length > 0) {
        $porductColumn4
            .on(
                "changed.owl.carousel initialized.owl.carousel",
                function (event) {
                    $(event.target)
                        .find(".owl-item")
                        .removeClass("last")
                        .eq(event.item.index + event.page.size - 1)
                        .addClass("last");
                }
            )
            .owlCarousel({
                autoplay: true,
                loop: true,
                nav: true,
                autoplay: false,
                autoplayTimeout: 8000,
                items: 4,
                margin: 24,
                dots: false,
                navText: [
                    '<i class="ion-ios-arrow-left"></i>',
                    '<i class="ion-ios-arrow-right"></i>',
                ],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    },
                },
            });
    }

    /*---product column3 activation---*/
    var $porductColumn3 = $(".product_column3");
    if ($porductColumn3.length > 0) {
        $porductColumn3
            .on(
                "changed.owl.carousel initialized.owl.carousel",
                function (event) {
                    $(event.target)
                        .find(".owl-item")
                        .removeClass("last")
                        .eq(event.item.index + event.page.size - 1)
                        .addClass("last");
                }
            )
            .owlCarousel({
                autoplay: true,
                loop: true,
                nav: true,
                autoplay: false,
                autoplayTimeout: 8000,
                items: 3,
                margin: 24,
                dots: false,
                navText: [
                    '<i class="ion-ios-arrow-left"></i>',
                    '<i class="ion-ios-arrow-right"></i>',
                ],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                         nav: true,
                    },
                    576: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    },
                },
            });
    }

    /*---brand container activation---*/
    var $brandContainer = $(".brand_container");
    if ($brandContainer.length > 0) {
        $(".brand_container")
            .on(
                "changed.owl.carousel initialized.owl.carousel",
                function (event) {
                    $(event.target)
                        .find(".owl-item")
                        .removeClass("last")
                        .eq(event.item.index + event.page.size - 1)
                        .addClass("last");
                }
            )
            .owlCarousel({
                autoplay: true,
                loop: true,
                nav: true,
                autoplay: false,
                autoplayTimeout: 8000,
                items: 7,
                margin: 20,
                dots: false,
                navText: [
                    '<i class="ion-ios-arrow-left"></i>',
                    '<i class="ion-ios-arrow-right"></i>',
                ],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    576: {
                        items: 4,
                    },
                    768: {
                        items: 5,
                    },
                    992: {
                        items: 6,
                    },
                    1200: {
                        items: 7,
                    },
                },
            });
    }

    /*---blog column3 activation---*/
    var $blogColumn3 = $(".blog_column3");
    if ($blogColumn3.length > 0) {
        $(".blog_column3").owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 3,
            margin: 24,
            dots: false,
            navText: [
                '<i class="ion-ios-arrow-left"></i>',
                '<i class="ion-ios-arrow-right"></i>',
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 3,
                },
            },
        });
    }

    /*testimonial activation*/
    $(".testimonial_content_collumn1").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: ".testimonial_thumb_column3",
        prevArrow:
            '<button class="prev_arrow"><i class="ion-ios-arrow-left"></i></button>',
        nextArrow:
            '<button class="next_arrow"><i class="ion-ios-arrow-right"></i></button>',
    });
    $(".testimonial_thumb_column3").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: ".testimonial_content_collumn1",
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    });

    /*---categories banner3 column2 activation---*/
    var $categoriesBanner3Column2 = $(".categories_banner3_column2");
    if ($categoriesBanner3Column2.length > 0) {
        $(".categories_banner3_column2").owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 2,
            margin: 24,
            dots: false,
            navText: [
                '<i class="ion-ios-arrow-left"></i>',
                '<i class="ion-ios-arrow-right"></i>',
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
            },
        });
    }

    /*---cateory colum6 activation---*/
    var $instagramColum5 = $(".category_colum6");
    if ($instagramColum5.length > 0) {
        $(".category_colum6").owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            items: 5,
            margin: 10,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },
            },
        });
    }

    /*---video colum5 activation---*/
    var $instagramColum5 = $(".video_colum5");
    if ($instagramColum5.length > 0) {
        $(".video_colum5").owlCarousel({
            autoplay: true,
            loop: false,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 6,
            margin: 10,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    dots: true,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                    dots: false,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 6,
                },
            },
        });
    }

    /*---home products colum4 activation---*/
    var $instagramColum5 = $(".home_column4");
    if ($instagramColum5.length > 0) {
        $(".home_column4").owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            // autoplay: false,
            autoplayTimeout: 3000,
            items: 5,
            margin: 10,
            dots: false,
            responsiveClass: true,
            navText: [
                '<i class="ion-ios-arrow-left"></i>',
                '<i class="ion-ios-arrow-right"></i>',
            ],
            responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                },
                1200: {
                    items: 5,
                },
            },
        });
    }

    var $pcolumn4 = $(".collection_page_products");
    if ($pcolumn4.length > 0) {
        $(".collection_page_products").owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            margin: 20,
            dots: false,
            responsiveClass: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
            responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            },
        });
    }

    // home new arrival seciton
    var $pcolumn4 = $(".home_new_arrival");
    if ($pcolumn4.length > 0) {
        $(".home_new_arrival").owlCarousel({
            autoplay: true,
            loop: false,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 3,
            margin: 20,
            dots: false,
            responsiveClass: true,
           
            responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 3,
                },
            },
        });
    }

    /*---home testimonial   activation---*/
    var $instagramColum5 = $(".home_test2");
    if ($instagramColum5.length > 0) {
        $(".home_test2").owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 8000,
            items: 2,
            margin: 10,
            dots: false,
            responsiveClass: true,
            navText: [
                '<i class="ion-ios-arrow-left"></i>',
                '<i class="ion-ios-arrow-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                     dots: true,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 2,
                     dots: false,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
            },
        });
    }

    /*---home testimonial   activation---*/
    var $instagramColum5 = $(".home_test2");
    if ($instagramColum5.length > 0) {
        $(".home_test_pics").owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            items: 3,
            margin: 10,
            dots: false,
            responsiveClass: true,
            navText: [
                '<i class="ion-ios-arrow-left"></i>',
                '<i class="ion-ios-arrow-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 2,
                    dots: false,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        });
    }

     /*---home testimonial   activation---*/
     var $instagramColum5 = $(".store-sec-carausel");
     if ($instagramColum5.length > 0) {
         $(".store-sec-carausel").owlCarousel({
             autoplay: true,
             loop: false,
             nav: true,
             autoplayTimeout: 3000,
             items: 3,
             margin: 20,
             dots: false,
             responsiveClass: true,
             navText: [
                 '<i class="ion-ios-arrow-left"></i>',
                 '<i class="ion-ios-arrow-right"></i>',
             ],
             responsive: {
                  0: {
                    items: 1,
                    dots: true,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 2,
                    dots: false,
                },
                 992: {
                     items: 2,
                 },
                 1200: {
                     items: 3,
                 },
             },
         });
     }

       /*---store photos   activation---*/
       var $instagramColum5 = $(".store-photos-carausel");
       if ($instagramColum5.length > 0) {
           $(".store-photos-carausel").owlCarousel({
               autoplay: true,
               loop: false,
               nav: true,
               autoplay: false,
               autoplayTimeout: 8000,
               items: 4,
               margin: 20,
               dots: false,
               responsiveClass: true,
               navText: [
                   '<i class="ion-ios-arrow-left"></i>',
                   '<i class="ion-ios-arrow-right"></i>',
               ],
               responsive: {
                   0: {
                       items: 1,
                   },
                   576: {
                       items: 1,
                   },
                   768: {
                       items: 2,
                   },
                   992: {
                       items: 3,
                   },
                   1200: {
                       items: 3,
                   },
               },
           });
       }

    

     /*---  testimonial page  activation---*/
     var $instagramColum5 = $(".testi-page");
     if ($instagramColum5.length > 0) {
         $(".testi-page").owlCarousel({
             autoplay: true,
             loop: true,
             nav: true,
             autoplay: false,
             autoplayTimeout: 8000,
             items: 1,
             margin: 10,
             dots: true,
             responsiveClass: true,
             navText: [
                 '<i class="ion-ios-arrow-left"></i>',
                 '<i class="ion-ios-arrow-right"></i>',
             ],
             responsive: {
                 0: {
                     items: 1,
                 },
                 576: {
                     items: 1,
                 },
                 768: {
                     items: 1,
                 },
                 992: {
                     items: 1,
                 },
                 1200: {
                     items: 1,
                 },
             },
         });
     }
    /*---  testimonial page  activation---*/
     var $instagramColum66 = $(".testi-page-celeb");
     if ($instagramColum66.length > 0) {
         $(".testi-page-celeb").owlCarousel({
             autoplay: true,
             loop: true,
             nav: true,
             autoplay: true,
             autoplayTimeout: 8000,
             items: 3,
             margin: 10,
             dots: false,
             responsiveClass: true,
             navText: [
                 '<i class="ion-ios-arrow-left"></i>',
                 '<i class="ion-ios-arrow-right"></i>',
             ],
             responsive: {
                 0: {
                     items: 1,
                 },
                 576: {
                     items: 1,
                 },
                 768: {
                     items: 2,
                 },
                 992: {
                     items: 2,
                 },
                 1200: {
                     items: 3,
                 },
             },
         });
     }

    /*---blog column3 activation---*/
    var $smallProductColumn1 = $(".small_product_column1");
    if ($smallProductColumn1.length > 0) {
        $(".small_product_column1").owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 3,
            dots: false,
            navText: [
                '<i class="ion-ios-arrow-left"></i>',
                '<i class="ion-ios-arrow-right"></i>',
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
            },
        });
    }

    /*---blog thumb activation---*/
    var $blogThumbActive = $(".blog_thumb_active");
    if ($blogThumbActive.length > 0) {
        $(".blog_thumb_active").owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 1,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
        });
    }

    /*---single product activation---*/
    var $singleProductActive = $(".single-product-active");
    if ($singleProductActive.length > 0) {
        $(".single-product-active").owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            margin: 15,
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                240: {
                    items: 2,
                },
                310: {
                    items: 3,
                },
                400: {
                    items: 3,
                },
                576: {
                    items: 4,
                },
            },
        });
    }

    /*---product navactive activation---*/
    var $productNavactive = $(".product_navactive");
    if ($productNavactive.length > 0) {
        $(".product_navactive").owlCarousel({
            autoplay: true,
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            dots: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>',
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                250: {
                    items: 2,
                },
                480: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
            },
        });
    }

    /*---home testimonial   activation---*/
     var $homeCriteria = $(".home-criteria");
     if ($homeCriteria.length > 0) {
         $(".home-criteria").owlCarousel({
             autoplay: false,
             
             nav: false,
             autoplayTimeout: 3000,
             items: 3,
             margin: 10,
             dots: false,
             responsiveClass: true,
             navText: [
                 '<i class="ion-ios-arrow-left"></i>',
                 '<i class="ion-ios-arrow-right"></i>',
             ],
             responsive: {
                 0: {
                     items: 2,
                     stagePadding: 30,
                      margin: 5
                      
                 },
                 576: {
                     items: 3,
                 },
                 768: {
                     items: 2,
                     center: false,
                     loop: false,
                     stagePadding: 0,
                      margin: 20
                 },
                 992: {
                     items: 2,
                 },
                 1200: {
                     items: 4,
                 },
             },
         });
     }

    $(".modal").on("shown.bs.modal", function (e) {
        $(".product_navactive").resize();
    });

    $(".product_navactive a").on("click", function (e) {
        e.preventDefault();

        var $href = $(this).attr("href");

        $(".product_navactive a").removeClass("active");
        $(this).addClass("active");

        $(".product-details-large .tab-pane").removeClass("active show");
        $(".product-details-large " + $href).addClass("active show");
    });

    /*--- video Popup---*/
    $(".video_popup").magnificPopup({
        type: "iframe",
        removalDelay: 300,
        mainClass: "mfp-fade",
    });

    /*--- Magnific Popup Video---*/
    $(".port_popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    /*--- niceSelect---*/
    $(".select_option").niceSelect();

    /*---  ScrollUp Active ---*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade",
    });

    /*---countdown activation---*/

    $("[data-countdown]").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $this.html(
                event.strftime(
                    '<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">days</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">hours</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">mins</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">secs</div></div></div>'
                )
            );
        });
    });

    /*---slider-range here---*/

    /*---elevateZoom---*/
    $("#zoom1").elevateZoom({
        gallery: "gallery_01",
        responsive: true,
        cursor: "crosshair",
        zoomType: "inner",
    });

    /*---addClass/removeClass categories---*/
    $("#cat_toggle.has-sub > a").on("click", function () {
        $(this).removeAttr("href");
        $(this).toggleClass("open").next(".categorie_sub").toggleClass("open");
        $(this)
            .parents()
            .siblings()
            .find("#cat_toggle.has-sub > a")
            .removeClass("open");
    });

    /*---widget sub categories---*/
    $(".sub_categories1 > a").on("click", function () {
        $(this).toggleClass("active");
        $(".dropdown_categories1").slideToggle("medium");
    });

    /*---widget sub categories---*/
    $(".sub_categories2 > a").on("click", function () {
        $(this).toggleClass("active");
        $(".dropdown_categories2").slideToggle("medium");
    });

    /*---widget sub categories---*/
    $(".sub_categories3 > a").on("click", function () {
        $(this).toggleClass("active");
        $(".dropdown_categories3").slideToggle("medium");
    });

    /*---MailChimp---*/
    $("#mc-form").ajaxChimp({
        language: "en",
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: "http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef",
    });
    function mailChimpResponse(resp) {
        if (resp.result === "success") {
            $(".mailchimp-success").addClass("active");
            $(".mailchimp-success")
                .html("" + resp.msg)
                .fadeIn(900);
            $(".mailchimp-error").fadeOut(400);
        } else if (resp.result === "error") {
            $(".mailchimp-error")
                .html("" + resp.msg)
                .fadeIn(900);
        }
    }

    /*---Category menu---*/
    function categorySubMenuToggle() {
        $(".categories_menu_toggle li.menu_item_children > a").on(
            "click",
            function () {
                if ($(window).width() < 991) {
                    $(this).removeAttr("href");
                    var element = $(this).parent("li");
                    if (element.hasClass("open")) {
                        element.removeClass("open");
                        element.find("li").removeClass("open");
                        element.find("ul").slideUp();
                    } else {
                        element.addClass("open");
                        element.children("ul").slideDown();
                        element.siblings("li").children("ul").slideUp();
                        element.siblings("li").removeClass("open");
                        element.siblings("li").find("li").removeClass("open");
                        element.siblings("li").find("ul").slideUp();
                    }
                }
            }
        );
        $(".categories_menu_toggle li.menu_item_children > a").append(
            '<span class="expand"></span>'
        );
    }
    categorySubMenuToggle();

    /*---shop grid activation---*/
    $(".shop_toolbar_btn > button").on("click", function (e) {
        e.preventDefault();

        $(".shop_toolbar_btn > button").removeClass("active");
        $(this).addClass("active");

        var parentsDiv = $(".shop_wrapper");
        var viewMode = $(this).data("role");

        parentsDiv
            .removeClass("grid_3 grid_4 grid_5 grid_list")
            .addClass(viewMode);

        if (viewMode == "grid_3") {
            parentsDiv
                .children()
                .addClass("col-lg-4 col-md-4 col-sm-6")
                .removeClass("col-lg-3 col-cust-5 col-12");
        }

        if (viewMode == "grid_4") {
            parentsDiv
                .children()
                .addClass("col-lg-3 col-md-4 col-sm-6")
                .removeClass("col-lg-4 col-cust-5 col-12");
        }

        if (viewMode == "grid_list") {
            parentsDiv
                .children()
                .addClass("col-12")
                .removeClass("col-lg-3 col-lg-4 col-md-4 col-sm-6 col-cust-5");
        }
    });

    /*---Newsletter Popup activation---*/

    setTimeout(function () {
        if ($.cookie("shownewsletter") == 1) $(".newletter-popup").hide();
        $("#subscribe_pemail").keypress(function (e) {
            if (e.which == 13) {
                e.preventDefault();
                email_subscribepopup();
            }
            var name = $(this).val();
            $("#subscribe_pname").val(name);
        });
        $("#subscribe_pemail").change(function () {
            var name = $(this).val();
            $("#subscribe_pname").val(name);
        });
        //transition effect
        if ($.cookie("shownewsletter") != 1) {
            $(".newletter-popup").bPopup();
        }
        $("#newsletter_popup_dont_show_again").on("change", function () {
            if ($.cookie("shownewsletter") != 1) {
                $.cookie("shownewsletter", "1");
            } else {
                $.cookie("shownewsletter", "0");
            }
        });
    }, 2500);

    /*---search account slideToggle---*/
    $(".search_list > a").on("click", function () {
        $(this).toggleClass("active");
        $(".dropdown_search").slideToggle("medium");
    });

    /*---header account slideToggle---*/
    $(".header_account > a").on("click", function () {
        $(this).toggleClass("active");
        $(".dropdown_account").slideToggle("medium");
    });

    /*---slide toggle activation---*/
    $(".mini_cart_wrapper > a").on("click", function (event) {
        if ($(window).width() < 991) {
            $(".mini_cart").slideToggle("medium");
        }
    });

    /*---canvas menu activation---*/
    $(".canvas_open").on("click", function () {
        $(".offcanvas_menu_wrapper,.off_canvars_overlay").addClass("active");
    });

    $(".canvas_close,.off_canvars_overlay").on("click", function () {
        $(".offcanvas_menu_wrapper,.off_canvars_overlay").removeClass("active");
    });

    /*---Off Canvas Menu---*/
    var $offcanvasNav = $(".offcanvas_main_menu"),
        $offcanvasNavSubMenu = $offcanvasNav.find(".sub-menu");
    $offcanvasNavSubMenu
        .parent()
        .prepend(
            '<span class="menu-expand"><i class="fa fa-angle-down"></i></span>'
        );

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(
                    /\b(menu-item-has-children|has-children|has-sub-menu)\b/
                ) &&
            ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.siblings("ul").slideUp("slow");
            } else {
                $this
                    .closest("li")
                    .siblings("li")
                    .find("ul:visible")
                    .slideUp("slow");
                $this.siblings("ul").slideDown("slow");
            }
        }
        if (
            $this.is("a") ||
            $this.is("span") ||
            $this.attr("clas").match(/\b(menu-expand)\b/)
        ) {
            $this.parent().toggleClass("menu-open");
        } else if (
            $this.is("li") &&
            $this.attr("class").match(/\b('menu-item-has-children')\b/)
        ) {
            $this.toggleClass("menu-open");
        }
    });

    /*---product dl column3 activation---*/
})(jQuery);
