
console.log(test()); // 'hello'
function test() {
 return 'hello';
}

console.log(test());
var test = function() {
 return 'hello';
 };


 //If you’re using a declarative function, you can place the function anywhere in the code.
//However, if you’re using a function expression, you must do so before the function is
//used. 
