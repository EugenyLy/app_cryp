//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru
(function(a){a.fn.animated=function(b){a(this).each(function(){var c=a(this);c.css("opacity","0").addClass("animated").waypoint(function(d){"down"===d&&c.addClass(b).css("opacity","1")},{offset:"90%"})})}})(jQuery);