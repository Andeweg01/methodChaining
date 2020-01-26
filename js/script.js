$(document).ready(function() {
    $(".box").on("click", function() {
            // when clicking element with 'box' class:
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            $("." + className).css("background-color", "#000");
        } else {
            // else turn all box class elements black en then change all 
            // similar elements as clicked to red
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});