jQuery(document).ready(function () {
   jQuery('#arrow').rotate({deg:getAngle(rotation_atmpress_data)-90});
});


var atmpress_data_current	= new Number(793);
var atmpress_data_start		= 700;
var atmpress_data_end		= 800;


var rotation_atmpress_data	= {
    "start"		:	atmpress_data_start,
    "end"		:	atmpress_data_end,
    "current"	:	atmpress_data_current
};


getAngle = function(data) {


    return ( data["current"] - data["start"])/((data["end"] - data["start"])/180);
};
