$(document).ready(function() {
    $(".box").on("click", function() {
            // when clicking element with 'box' class:
        var classNames = $(this).attr("class").split(" "); // clicked class is split on the space
        var boxClass = classNames[0]; // index 0 is put in var boxClass, which is 'box'
        var className = classNames[1]; // index 1 is put in var className, which is the number of the box

        if ($(this).css("background-color") == "rgb(255, 0, 0)") { // when the clicked backgroundcolor is red
            $("." + className).css("background-color", "#000"); // any class + clicked number will be made black
        } else {
            // else turn all box class elements black en then change all 
            // similar elements as clicked to red
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});