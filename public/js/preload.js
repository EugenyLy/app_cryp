
    var navL = document.querySelector('.select_language');
    var footL = document.querySelector('.footer_select_language');
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var one_f = document.getElementById("one_f");
    var two_f = document.getElementById("two_f");
    var enY = document.querySelector('.en_y');
    var ruY = document.querySelector('.ru_y');
    navL.addEventListener("click", function () {
        one.classList.toggle('ttt');
        two.classList.toggle('ttt');
    });
    footL.addEventListener("click", function () {
        one_f.classList.toggle('ttt');
        two_f.classList.toggle('ttt');
    });
    if (one.classList.contains('active') && one_f.classList.contains('active')) {
        ruY.style.display = 'none';
        one.style.pointerEvents = "none";
        one_f.style.pointerEvents = "none";
        two.style.display = "none";
        two_f.style.display = "none";

    } else if (two.classList.contains('active') && two_f.classList.contains('active')) {
        enY.style.display = 'none';
        two.style.pointerEvents = "none";
        two_f.style.pointerEvents = "none";
        one.style.display = "none";
        one_f.style.display = "none";
    }
    function createIframe() {
            if (one.classList.contains('active') && one_f.classList.contains('active')) {
                var i = document.createElement("iframe");
                i.src = "https://www.youtube.com/embed/ZqQmah1boUY";
                i.allow = "encrypted-media";
                i.gesture = "media";
                i.scrolling = "auto";
                i.frameBorder = "0";
                i.width = "750px";
                i.height = "350px";
                i.setAttribute('allowFullScreen', '');
                document.getElementById("vid").appendChild(i);
            } else if (two.classList.contains('active') && two_f.classList.contains('active')) {
                var i = document.createElement("iframe");
                i.src = "https://www.youtube.com/embed/MgvFYhKnbuI";
                i.allow = "encrypted-media";
                i.gesture = "media";
                i.scrolling = "auto";
                i.frameBorder = "0";
                i.width = "750px";
                i.height = "350px";
                i.setAttribute('allowFullScreen', '');
                document.getElementById("vid").appendChild(i);

            }
        }
    if (window.addEventListener)
        window.addEventListener("load", createIframe, false);
    else if (window.attachEvent)
        window.attachEvent("onload", createIframe);

    else window.onload = createIframe;




    var secT = document.getElementById('d3');
    var secF = document.getElementById('d5');

    document.body.onload = function () {
        setTimeout(function () {
            var preloader = document.getElementById('pre-loader');
            var mainBckg = document.querySelector('.backg');

            if (!preloader.classList.contains('done')) {
                preloader.classList.add("done");
                mainBckg.style.opacity = '1';
                secT.style.display = "block";
                secF.style.display = "block";
            }
        }, 1000);
    };

    secT.style.display = "none";
    secF .style.display = "none";
