(function ($) {
    "use strict";
    jQuery(window).on('load', function () {
        $(".preloader").delay(1600).fadeOut("slow");
    });
    $('select').niceSelect();
    setTimeout(myGreeting, 1800);

    function myGreeting() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function (box) {
            },
            scrollContainer: null,
            resetAnimation: true,
        });
        wow.init();
    }

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header.style-1, header.style-2, header.style-3');
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    $('.search-btn').on("click", function () {
        $('.mobile-search').addClass('slide');
    });
    $('.search-cross-btn').on("click", function () {
        $('.mobile-search').removeClass('slide');
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 300) {
            $('.scroll-btn').addClass('show');
        } else {
            $('.scroll-btn').removeClass('show');
        }
    });
    $('.scroll-btn').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
    $('.mobile-menu-btn').on("click", function () {
        $('.main-menu').addClass('show-menu');
    });
    $('.menu-close-btn').on("click", function () {
        $('.main-menu').removeClass('show-menu');
    });
    $('.dropdown-icon').on('click', function () {
        $(this).toggleClass('active').next('ul').slideToggle();
        $(this).parent().siblings().children('ul').slideUp();
        $(this).parent().siblings().children('.active').removeClass('active');
    });
    var toggleIcon = document.querySelectorAll('.sidebar-menu-icon')
    var closeIcon = document.querySelectorAll('.cross-icon')
    var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')
    toggleIcon.forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el) => {
                el.classList.add('show-sidebar')
            })
        })
    })
    closeIcon.forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el) => {
                el.classList.remove('show-sidebar')
            })
        })
    })
    window.onclick = function (event) {
        searchWrap.forEach((el) => {
            if (event.target === el) {
                el.classList.remove('show-sidebar')
            }
        })
    }
    var heroSliderTwo = new Swiper('.banner1', {
        slidesPerView: 1,
        speed: 1500,
        loop: true,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        navigation: false,
        fadeEffect: {crossFade: true,},
        autoplay: {delay: 4000},
        pagination: {el: ".hero-one-pagination", clickable: true,}
    });
    var swiper = new Swiper(".category1-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        roundLengths: true,
        navigation: {nextEl: '.category-prev1', prevEl: '.category-next1',},
        breakpoints: {
            280: {slidesPerView: 1},
            440: {slidesPerView: 2},
            576: {slidesPerView: 2},
            768: {slidesPerView: 3},
            992: {slidesPerView: 5},
            1200: {slidesPerView: 6},
            1400: {slidesPerView: 7},
        }
    });
    var swiper = new Swiper(".category2-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        roundLengths: true,
        pagination: false,
        navigation: {nextEl: '.category-prev2', prevEl: '.category-next2',},
        breakpoints: {
            280: {slidesPerView: 1},
            380: {slidesPerView: 2},
            540: {slidesPerView: 3},
            576: {slidesPerView: 3},
            768: {slidesPerView: 4},
            992: {slidesPerView: 5},
            1200: {slidesPerView: 6},
            1400: {slidesPerView: 7},
        }
    });
    var swiper = new Swiper(".upcoming-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        pagination: {el: ".swiper-pagination", clickable: 'true',},
        navigation: {nextEl: '.coming-prev1', prevEl: '.coming-next1',},
        breakpoints: {
            280: {slidesPerView: 1},
            480: {slidesPerView: 1},
            768: {slidesPerView: 2},
            992: {slidesPerView: 2},
            1200: {slidesPerView: 3},
        }
    });
    var swiper = new Swiper(".upcoming-slider2", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        pagination: {el: ".swiper-pagination", clickable: 'true',},
        navigation: {nextEl: '.coming-prev2', prevEl: '.coming-next2',},
        breakpoints: {
            280: {slidesPerView: 1, pagination: false},
            480: {slidesPerView: 1, pagination: false},
            768: {slidesPerView: 2, pagination: false},
            992: {slidesPerView: 2},
            1200: {slidesPerView: 3},
        }
    });
    var swiper = new Swiper(".upcoming-slider3", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        pagination: {el: ".swiper-pagination", clickable: 'true',},
        navigation: {nextEl: '.coming-prev3', prevEl: '.coming-next3',},
        breakpoints: {
            280: {slidesPerView: 1},
            480: {slidesPerView: 1},
            768: {slidesPerView: 2},
            992: {slidesPerView: 2},
            1200: {slidesPerView: 3},
        }
    });
    var swiper = new Swiper(".blog-slider", {
        slidesPerView: 2,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        navigation: {nextEl: '.blog-prev1', prevEl: '.blog-next1',},
        breakpoints: {
            280: {slidesPerView: 1},
            480: {slidesPerView: 1},
            768: {slidesPerView: 2},
            992: {slidesPerView: 2},
            1200: {slidesPerView: 3},
        }
    });
    var swiper = new Swiper(".testimonial-slider", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        navigation: {nextEl: '.testi-prev1', prevEl: '.testi-next1',},
        breakpoints: {
            280: {slidesPerView: 1},
            480: {slidesPerView: 1, autoplay: true,},
            768: {slidesPerView: 1},
            992: {slidesPerView: 2},
            1200: {slidesPerView: 3},
        }
    });
    var swiper = new Swiper(".testimonial-slider2", {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 24,
        loop: true,
        roundLengths: true,
        navigation: {nextEl: '.testi-prev2', prevEl: '.testi-next2',},
        breakpoints: {
            280: {slidesPerView: 1},
            480: {slidesPerView: 1, autoplay: true,},
            768: {slidesPerView: 1},
            992: {slidesPerView: 2},
            1200: {slidesPerView: 3},
        }
    });


    function makeTimer() {
        var endTime = new Date("June 01, 2022 00:00:00");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var Xmas95 = new Date('December 25, 1995 23:15:30');
        var hour = Xmas95.getHours();
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#timer #days").html(days);
        $("#timer #hours").html(hours);
        $("#timer #minutes").html(minutes);
        $("#timer #seconds").html(seconds);
        $("#timer1 #days1").html(days);
        $("#timer1 #hours1").html(hours);
        $("#timer1 #minutes1").html(minutes);
        $("#timer1 #seconds1").html(seconds);
        $("#timer2 #days2").html(days);
        $("#timer2 #hours2").html(hours);
        $("#timer2 #minutes2").html(minutes);
        $("#timer2 #seconds2").html(seconds);
        $("#timer3 #days3").html(days);
        $("#timer3 #hours3").html(hours);
        $("#timer3 #minutes3").html(minutes);
        $("#timer3 #seconds3").html(seconds);
        $("#timer4 #days4").html(days);
        $("#timer4 #hours4").html(hours);
        $("#timer4 #minutes4").html(minutes);
        $("#timer4 #seconds4").html(seconds);
        $("#timer5 #days5").html(days);
        $("#timer5 #hours5").html(hours);
        $("#timer5 #minutes5").html(minutes);
        $("#timer5 #seconds5").html(seconds);
        $("#timer6 #days6").html(days);
        $("#timer6 #hours6").html(hours);
        $("#timer6 #minutes6").html(minutes);
        $("#timer6 #seconds6").html(seconds);
        $("#timer7 #days7").html(days);
        $("#timer7 #hours7").html(hours);
        $("#timer7 #minutes7").html(minutes);
        $("#timer7 #seconds7").html(seconds);
        $("#timer8 #days8").html(days);
        $("#timer8 #hours8").html(hours);
        $("#timer8 #minutes8").html(minutes);
        $("#timer8 #seconds8").html(seconds);
        $("#timer9 #days9").html(days);
        $("#timer9 #hours9").html(hours);
        $("#timer9 #minutes9").html(minutes);
        $("#timer9 #seconds9").html(seconds);
        $("#timer10 #days10").html(days);
        $("#timer10 #hours10").html(hours);
        $("#timer10 #minutes10").html(minutes);
        $("#timer10 #seconds10").html(seconds);
    }

    setInterval(function () {
        makeTimer();
    }, 1000);
    var setEndDate1 = "June 8, 2022 6:0:0";
    var setEndDate2 = "Jan 1, 2023 0:0:1";
    var setEndDate3 = "Jan 1, 2023 0:0:1";
    var setEndDate4 = "March 1, 2023 0:0:1";
    var setEndDate5 = "March 1, 2023 0:0:1";
    var setEndDate6 = "March 1, 2023 0:0:1";
    var setEndDate7 = "March 1, 2023 0:0:1";
    var setEndDate8 = "March 1, 2023 0:0:1";
    var setEndDate9 = "March 1, 2023 0:0:1";

    function startCountDownDate(dateVal) {
        var countDownDate = new Date(dateVal).getTime();
        return countDownDate;
    }

    function countDownTimer(start, targetDOM) {
        var now = new Date().getTime();
        var distance = start - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        days = (days < 10) ? "0" + days : days;
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        var el_up = document.getElementById(targetDOM);
        if (el_up) {
            document.querySelector("#" + targetDOM).textContent = days + "D : " + hours + "H : " + minutes + "M : " + seconds + "S ";
        }
        if (distance < 0) {
            document.querySelector("#" + targetDOM).textContent = "EXPIRED";
        }
    }
    var cdd1 = startCountDownDate(setEndDate1);
    var cdd2 = startCountDownDate(setEndDate2);
    var cdd3 = startCountDownDate(setEndDate3);
    var cdd4 = startCountDownDate(setEndDate4);
    var cdd5 = startCountDownDate(setEndDate5);
    var cdd6 = startCountDownDate(setEndDate6);
    var cdd7 = startCountDownDate(setEndDate7);
    var cdd8 = startCountDownDate(setEndDate8);
    var cdd9 = startCountDownDate(setEndDate9);
    setInterval(function () {
        countDownTimer(cdd1, "countdown-timer-1");
    }, 1000);
    setInterval(function () {
        countDownTimer(cdd2, "countdown-timer-2");
    }, 1000);
    setInterval(function () {
        countDownTimer(cdd3, "countdown-timer-3");
    }, 1000);
    setInterval(function () {
        countDownTimer(cdd4, "countdown-timer-4");
    }, 1000);
    setInterval(function () {
        countDownTimer(cdd5, "countdown-timer-5");
    }, 1000);
    setInterval(function () {
        countDownTimer(cdd6, "countdown-timer-6");
    }, 1000);
    setInterval(function () {
        countDownTimer(cdd7, "countdown-timer-7");
    }, 1000);
    setInterval(function () {
        countDownTimer(cdd8, "countdown-timer-8");
    }, 1000);
    setInterval(function () {
        countDownTimer(cdd9, "countdown-timer-9");
    }, 1000);
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function (e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('bi-eye');
        });
    }
    const togglePassword2 = document.getElementById('togglePassword2');
    const password2 = document.querySelector('#password2');
    if (togglePassword2) {
        togglePassword2.addEventListener('click', function (e) {
            const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
            password2.setAttribute('type', type);
            this.classList.toggle('bi-eye');
        });
    }
    $(".counter-item").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll('.odometer')[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    $(".counter-single").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll('.odometer')[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    $('.popup-youtube').magnificPopup({type: 'iframe'});
}(jQuery));
