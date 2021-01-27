
//Example 1
let obj = {name:"Naresh"};
obj.name = "Suresh"
console.log(obj); // Suresh

//Example 2
let obj1 = {name:"Naresh"};
Object.freeze(obj1);
obj1.name = "Suresh"; // ignores. Strict mode:  error will be thrown
console.log(obj1); // Naresh

Object.isFrozen(obj1);