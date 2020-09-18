$(document).ready(function () {
    $("#ham").click(function () {
        if($(this).text() == "☰"){
            $(this).text("✖");
        }else {
            $(this).text("☰");
        }
        
        $("nav ul li").toggle("slow");
    });
});