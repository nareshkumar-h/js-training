//Passing primitive as argument - copy values - Pass by value
function display(a){
    a=20;
}
let a = 10; 
display(a); //Passing primitive values
console.log(a);

//Passing object as an argument

function display(obj){ // memory address  -- Pass by reference
    obj.name = obj.name.toUpperCase();
}
let obj = {name:"Naresh"};

Object.freeze(obj);

display(obj);
console.log(obj);


//Passing function as an argument

//Stack => Methods, Local Variables. Last In First Out(LIFO)
// Objects => will be stored in Heap Memory => Heap Memory (RAM)