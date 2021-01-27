
//Example 1
let obj = {name:"Naresh"};
obj.name = "Suresh"
console.log(obj); // Suresh

//Example 2
let obj1 = {name:"Naresh"};
Object.seal(obj1);
obj1.name = "Suresh"; //allows to modify existing properties
console.log(obj1); 
obj1.department = "CSE"; 
console.log(obj1); 