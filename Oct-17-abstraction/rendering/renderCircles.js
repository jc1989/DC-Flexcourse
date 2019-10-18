
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    let myCircles = "";

    for (i = 0; i < circles.length; i++){
        myCircles += `
        <div class = "text-center mt-5 circles" 
        style = "border-radius: ${circles[i].radius}px;
        height: ${circles[i].height}px;
        width: ${circles[i].width}px;
        background-color: ${circles[i].color};">
        </div>
    `
    }
    return myCircles;
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF",
            height: 100,
            width: 100
        },
        {
            radius: 30,
            color: "#FF99AA",
            height: 50,
            width: 50
        },
        {
            radius: 60,
            color: "#0000FF",
            height: 100,
            width: 100
        },
        {
            radius: 10,
            color: "#000000",
            height: 10,
            width: 10
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}