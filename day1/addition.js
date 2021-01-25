const a = 10;
const b = 20;
const c = a +b ;
console.log("Result:", c);// Result: 30


function add1(){
    const a = 10;
    const b = 20;
    const c = a +b ;
    console.log("Result:", c);
}
add1(); // Result: 30

function add2(a,b){    
    const c = a +b ;
    console.log("Result:", c);
}
add2(10,20); // Result: 30

function add3(a,b){    
    const c = a +b ;
    return c;
}
add3(10,20); // Useless code
const c = add3(10,30);
console.log("Result:", c); // Result: 30


