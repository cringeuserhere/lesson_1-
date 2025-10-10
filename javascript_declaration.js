//declare width and height of a rectangle. print the area to the console
let width = 5;
let height = 10;
let area = width * height;
console.log ("Area of the Rectangle is:" + area);
//what is the different between var, let, and const 
//Answer:
//var lets you redeclare and update a variable 
//let does not allow redeclaration 

var a=10;
function myName(){
    a=20; 
    return a;
}
myName();
console.log(a);

let b=10;
function returnb(){
    let b=20;
    return b;
}
returnb();
console.log(b);
//var will change the value inside fuction call
//we will try to only use let and const from now onwards