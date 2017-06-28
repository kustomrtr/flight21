$(document).ready(function () {
    tooltips();
    matchHeights();
    smoothScroll();
    goUp();
    calendarActiveClick();
    phoneValidator();
});

function matchHeights() {
    $('.box').matchHeight();
}

function smoothScroll() {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
}

function goUp() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 750) {
            $('.go-up').fadeIn();
        } else {
            $('.go-up').fadeOut();
        }
    });
}

function tooltips() {
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'click'
    });
}

function calendarActiveClick() {
    $(".calendar-dayblock-withinfo").on('click', function () {
        $(this).toggleClass("calendar-dayblock-active");
    });
}

function phoneValidator() {
    var telInput = $("#phone");

    telInput.intlTelInput({
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.15/js/utils.js",
        autoPlaceholder: true,
        preferredCountries: ['fr', 'us', 'gb']
    });

    var reset = function () {
        telInput.removeClass("error");
    };

    // on blur: validate
    telInput.blur(function () {
        reset();
        if ($.trim(telInput.val())) {
            if (telInput.intlTelInput("isValidNumber")) {
//                alert("valid");
            } else {
                telInput.addClass("error");
//                alert("invalid");
            }
        }
    });
    
    $("form").on('submit', function(e){
        var isvalidate=$("form").valid();
        if(telInput.intlTelInput("isValidNumber") && isvalidate) {
//            e.preventDefault();
        } else {
            e.preventDefault();
        }
    });
}

function getvalues(f)
{
    var form=$("#"+f);
    var str='';
    $("input:not('input:submit')", form).each(function(i){
        str+='\n'+$(this).prop('name')+': '+$(this).val();
    });
    return str;
}