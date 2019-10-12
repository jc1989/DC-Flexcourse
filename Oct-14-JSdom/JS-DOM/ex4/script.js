// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"
var button = document.getElementById("myButton");

button.addEventListener('click', function myFunction(){
    function myFunction(){
        var element4  = document.getElementsByClassName("box");
        var i;
        for (let i = 0; i < element4.length; i++) {
            element4[i].style.backgroundColor = "blue";
        }
    }
    myFunction();
})

// look up query selector and query selector all