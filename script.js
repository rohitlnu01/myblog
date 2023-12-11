$(document).ready(function () {
    $("#backButton").click(function () {
        window.location.href = "blog.html";
    });
    $(document).ready(function () {
        $(".collapsible").click(function () {
            $(this).next(".content").slideToggle("fast");
        });
    });
    
});
