

function recursion(){
   var p1 = prompt("Enter side #1:");
var p2 = prompt("Enter side #2:");

function myFunction(p1, p2){
    return Math.sqrt(Math.pow(p1, 2)+Math.pow(p2, 2));
    }


alert("The Hypotenuse is " + myFunction(p1, p2)); 
    recursion();
}