$('.carousel').carousel({
    interval: 5000,
    pause: "false"
})
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        $(".header_sec").addClass("fixed");
    } else {
        $(".header_sec").removeClass("fixed");
    }
});

if ($(window).width() <= 767) {
    $(".wow").removeClass("wow");
}

$(document).ready(function () {
    $(".filter-button").on("click", function () {
        var value = $(this).attr('data-filter');
        $('.nav-tabs ul li a').removeClass('active');
        $(this).addClass('active');
        if (value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });
});


// To disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

// To disable F12 options
// document.onkeypress = function (event) {
// 	event = (event || window.event);
// 	if (event.ctrlKey || event.keyCode == 123) {
// 		return false;
// 	}
// }
// document.onmousedown = function (event) {
// 	event = (event || window.event);
// 	if (event.ctrlKey || event.keyCode == 123) {
// 		return false;
// 	}
// }
// document.onkeydown = function (event) {
// 	event = (event || window.event);
// 	if (event.ctrlKey || event.keyCode == 123) {
// 		return false;
// 	}
// }
//To To Disable ctrl+c, ctrl+u
jQuery(document).ready(function ($) {
    $(document).keydown(function (event) {
        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();

        if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
            alert('Sorry, This Functionality Has Been Disabled!');
            // disable key press porcessing
            return false;
        }
    });
});


(function (w, d, s, c, r) {
    w['waserviceObject'] = r;
    w[r] = ""
    a = d.createElement(s);
    m = d.getElementsByTagName(s)[0];
    a.async = 1;
    a.src = c;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', "../assets/js/waliner-chat-widget.min.js", 'waservice');



//(window, document, 'script', "https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=" + new Date().getTime(), 'waservice');



window.onload = function () {
    waservice.init('test', 'ZDY0MTM2NTYtN2Q0Ny00ZmYzLWI5NDktZmI2OTYyZWI4ZDk5');
}


