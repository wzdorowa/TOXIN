jQuery(document).ready(function($) {
    $('#datepicker').datepicker(
        $.datepicker.regional["ru"],
        
        );
        $('#datepicker').datepicker({
        defaultDate: Date(8)
        });
});