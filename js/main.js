//Dropdown & Toggle
$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
    $('.collapse').collapse("hide");
});


$(document).ready(function () {
$("#popular-nav a").click(function(e){
    e.preventDefault();
    $(".toggle").hide();
    var toShow = $(this).attr('href');
    $(toShow).show();
});
    });