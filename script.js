$(".about-us").on("mouseenter", function() {
    $(".hover").css("visibility", "visible").hide().slideDown("slow");
});
$(".hover").on("mouseleave", function() {
    $(".hover").slideUp("slow", function() {
        $(this).css("visibility", "hidden");
    });
});