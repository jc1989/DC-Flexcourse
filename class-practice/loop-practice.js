//Practicing loops in class!
/*
var class = [student, student, student];

for (var i = 0; i < 10; i++){
    console.log(class[i].giveAnA())
    //this loop will run 10 times
}
*/

//FOR LOOPS
//for (Initial iterator; Final iteration; Iteration increment)
for (var i = 0; i < 10; i++){
    console.log(i);
}

console.log("\n");

//Can set the variable to iterate equal to whatever number, and change the range to whatever number desired
for (var i = 10; i <= 20; i++){
    console.log(i);
}

console.log("\n");

//WHILE LOOPS
let number = 1;
while(number <= 10){
    //number adds number + 1
    number = number +1;
    console.log(number)
    //break;
}

//FUNCTIONS
function myFunc(){
    //some stuff
}

//Function taking arguments
function myFunc2(arg1,arg2){
    return arg1, arg2;
}

//Anonymous Function
var anon = function(){
    //some stuff
}

//Calling anonymous function
anon();

