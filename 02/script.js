var myVariable = 5;

function example()
{
    myVariable = 7;
}

example();

var color = "blue";
function changeColor()
{
    var color = "red";
    document.querySelector(".first-p").style.color = color;
}

changeColor();
document.querySelector(".second-p").style.color = color;