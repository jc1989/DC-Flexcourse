// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp
var button = document.getElementById("myButton");

button.addEventListener('click', function myFunction(){
        // var element5 = document.getElementById("boxContainer").getElementsByClassName("box");
        // var element6 = document.createElement("box");
        // element5.appendChild(element6);

        function myFunction2(){
                var element2 = document.createElement("div")
                element2.classList.add("box");
                console.log(element2)
                var element1 = document.getElementById("boxContainer");
                element1.appendChild(element2);
            }
        myFunction2();
})