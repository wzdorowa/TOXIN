jQuery(document).ready(function($) {
    $('#datepicker').datepicker(
        $.datepicker.regional["ru"],
        {showOtherMonths: true}
        );
});