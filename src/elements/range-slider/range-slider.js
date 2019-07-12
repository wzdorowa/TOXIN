$(".range-slider-container__polzunok").slider({
    min: 0,
    max: 15450,
    values: [5000, 10000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".range-slider-container__left-price").val(ui.values[ 0 ]);   
        $(".range-slider-container__right-price").val(ui.values[ 1 ]);  
    }    
});
$(".range-slider-container__left-price").val($(".range-slider-container__polzunok").slider("values", 0));
$(".range-slider-container__right-price").val($(".range-slider-container__polzunok").slider("values", 1));
$(document).focusout(function() {
    var input_left = $(".range-slider-container__left-price").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".range-slider-container__polzunok").slider("option", "min"),
    where_right = $(".range-slider-container__polzunok").slider("values", 1),
    input_right = $(".range-slider-container__right-price").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".range-slider-container__polzunok").slider("option", "max"),
    where_left = $(".range-slider-container__polzunok").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".range-slider-container__left-price").val(input_left); 
    $(".range-slider-container__right-price").val(input_right); 
    $(".range-slider-container__polzunok").slider( "values", [ input_left, input_right ] );
});
