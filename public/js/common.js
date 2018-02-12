$(document).ready(function () {
    /* Global site tag (gtag.js) - Google Analytics */


    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'UA-101792205-1');
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter47654038 = new Ya.Metrika({
                    id:47654038,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    trackHash:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");


    $('#toggle').click(function () {
        $(this).toggleClass('on'), $('.main-mnu').toggle(), $('.arr_rot').toggleClass('arr_rotate')
    }), 530 > $(window).width() && $('.mo').click(function () {
        $(this).children('ul').stop().slideToggle(), e.preventDefault()
    });
    var d = document.querySelector('.main-mnu'), f = document.getElementById('toggle'), g = document.querySelector('.mnu_hide'), h = document.querySelector('.arr_rot');
    d.onclick = function (j) {
        var k = j.target;
        (d === k || g === k) && (d.style.display = 'none', h.classList.remove('arr_rotate'), f.classList.remove('on'))
    }, document.onkeydown = function (j) {
        var j = j || window.event;
        (32 == j.keyCode || 32 == j.keyCode || 32 == j.which) && j.preventDefault()
    }, $(function () {
        var j = $('section').get();
        $(document).keyup(function (k) {
            if (32 == k.keyCode) {
                j.sort(function (m, n) {
                    return Math.abs(m.getBoundingClientRect().top) - Math.abs(n.getBoundingClientRect().top)
                });
                var l = $('section').index(j[0]);
                l = 32 == k.keyCode ? ++l : --l, 0 > l || l >= j.length || ($('body,html').stop().animate({scrollTop: '+=' + $('section')[l].getBoundingClientRect().top}, 800), !1)
            }
        })
    }), 1200 < $(window).width() && ($('.s3_span_arr').waypoint(function () {
        $('.s4_adv').each(function (j) {
            var k = $(this);
            setInterval(function () {
                k.addClass('on')
            }, 200 * j)
        })
    }), $('footer, .footer_anim_show').waypoint(function () {
        $('.s6_icon_txt').each(function (j) {
            var k = $(this);
            setInterval(function () {
                k.addClass('on')
            }, 200 * j)
        })
    })), $('.count_element').on('click', function () {
        return ga('send', 'event', 'goal', 'goal'), yaCounterXXXXXXXX.reachGoal('goal'), !0
    }), Modernizr.svg || $('img[src*=\'svg\']').attr('src', function () {
        return $(this).attr('src').replace('.svg', '.png')
    });
    try {
        $.browserSelector(), $('html').hasClass('chrome') && $.smoothScroll()
    } catch (j) {
    }
}), document.onreadystatechange = function () {
    if ('complete' == document.readyState) {
        for (var d = [], f = document.getElementsByTagName('DIV'), g = 0; g < f.length; g++)d.push(f[g]);
        document.onkeyup = function (h) {
            (40 == h.keyCode || 38 == h.keyCode) && (d.sort(function (j, k) {
                return Math.abs(j.getBoundingClientRect().top) - Math.abs(k.getBoundingClientRect().top)
            }), d.forEach(function (j) {
                var k = d.indexOf(d[j]);
                alert(k), k = 40 == h.keyCode ? ++k : --k, 0 > k || k >= d.length || $('body,html').stop().animate({scrollTop: '+=' + $('div')[k].getBoundingClientRect().top}, 800)
            }))
        }
    }
}, $.ajax({
    url: '/users', contentType: 'application/json; charset=utf-8', dataType: 'json', success: function (d) {
        $('#users_online').text(d.users_online), $('#users_registered').text(d.users_registered), $('#bets').text(d.users_bets)
    }
}), setInterval(function () {
    $.ajax({
        url: '/users', contentType: 'application/json; charset=utf-8', dataType: 'json', success: function (d) {
            $('#users_online').text(d.users_online), $('#users_registered').text(d.users_registered), $('#bets').text(d.users_bets)
        }
    })
}, 1000);
var navElem = document.querySelector('.navbar_block');
var arrUp = document.querySelector('.arr_upp_footer');

window.onscroll = function () {
    if (window.innerWidth < 992) {
        arrUp.classList.remove('up_page');
        navElem.classList.remove('show_menu');
    }
    else if (window.pageYOffset < 200) {
        arrUp.classList.remove('up_page');
        navElem.classList.remove('show_menu');

    } else if (window.pageYOffset >= 200) {
        arrUp.classList.add('up_page');
        navElem.classList.add('show_menu');

    }

};

var enHowTo = document.querySelectorAll('.howtob-img');
var ruHowTo = document.querySelectorAll('.howtob-img-ru');

var one = document.getElementById("one");
var two = document.getElementById("two");
var one_f = document.getElementById("one_f");
var two_f = document.getElementById("two_f");
var fontSizeH = document.querySelector('.fontSizeRus');
if (one.classList.contains('active') && one_f.classList.contains('active')) {
    for (var i = 0; i < ruHowTo.length; i++) {
        ruHowTo[i].style.display = 'none';
    }

} else if (two.classList.contains('active') && two_f.classList.contains('active')) {

    for (var i = 0; i < enHowTo.length; i++) {
        enHowTo[i].style.display = 'none';
    }
    fontSizeH.style.fontSize = '1.20em';
}


// function matOp (a, b , op) {
//         var res;
//         if(op == '-') {
//             res = a - b;
//         }
//         else if(op == '+') {
//             res = a + b;
//         }
//         else if(op == '*') {
//             res = a * b;
//         }
//         else if(op == "/"){
//             if(b == 0){
//                 res = false;
//             }else{
//             res = a / b;
//         }}
//         else{
//             res = false;
//         }
//         return res;
// }
//
// function rundomInt(min, max) {
//     var length = max - min + 1;
//     var rand = Math.floor(Math.random() * length) + min;
//     return rand;
// }
//
// function optOut(num){
//       var op = ['-', '+', '*', '/'];
//       return op[num];
// }
// var  x,y,op, code,res, answer;
// for(var i = 0; i < 5; i++) {
// x = rundomInt(3, 15);
// y = rundomInt(3, 15);
// code = rundomInt(0, 3);
// op = optOut(code);
//
//        res = matOp(x, y, op ) ;
//        answer = +prompt(x + ' ' + op + ' ' + y + " =?"  );
//
//        if(res == answer) {
//            console.log('YEAH');
//
//        }
//         else{
//            console.log("NOOO" + x + ' ' + op + ' ' + y  + "=" + res);
//        }
//
//
// }