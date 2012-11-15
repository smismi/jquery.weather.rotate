(function($){
    $.fn.rotate = function (type, options) {
        var options = $.extend({
            deg:0
        }, options);
        if (($.browser.msie) && (parseInt($.browser.version) < 9)) {
            if(type == 'gauges') {

                var ang = 0;
                if (options.deg >= -79 && options.deg < -57) ang = 1;
                if (options.deg >= -57 && options.deg < -36) ang = 2;
                if (options.deg >= -36 && options.deg < -11) ang = 3;
                if (options.deg >= -11 && options.deg < 12) ang = 4;
                if (options.deg >= 12 && options.deg < 36) ang = 5;
                if (options.deg >= 36 && options.deg < 57) ang = 6;
                if (options.deg >= 57 && options.deg < 79) ang = 7;
                if (options.deg >= 79 && options.deg <= 90) ang = 8;
                $(this).css({'background-position': -100 * ang + ' 0 no-repeat' });
            }
            if(type == 'wind') {


                    var angle_naming = {
                        "Ñ"		:	0,
                        "ÑÑÂ"	:	1,
                        "ÑÂ"	:	2,
                        "ÑÂÂ"	:	3,
                        "Â"		:	4,
                        "ÞÂÂ"	:	5,
                        "ÞÂ"	:	6,
                        "ÞÞÂ"	:	7,
                        "Þ"		:	8,
                        "ÞÞÇ"	:	9,
                        "ÞÇ"	:	10,
                        "ÞÇÇ"	:	11,
                        "Ç"		:	12,
                        "ÑÇÇ"	:	13,
                        "ÑÇ"	:	14,
                        "ÇÑÇ"	:	15
                    };
                    var angle = angle_naming["ÇÑÇ"];
                    $j("#wind div.arrow div").transform( { rotate: angle } );



            }

        } else {
                $(this).css({
                    '-webkit-transform':'rotate(' + options.deg + 'deg)',
                    '-moz-transform':'rotate(' + options.deg + 'deg)',
                    '-o-transform':'rotate(' + options.deg + 'deg)',
                    '-ms-transform':'rotate(' + options.deg + 'deg)',
                    'transform':'rotate(' + options.deg + 'deg)'
                });
        }
        return this;
    };
})(jQuery);   
