//Map
let departments = new Map();
departments.set("CSE","Computer Science");
departments.set("IT","Information Technology");

departments.size; //2
departments.has("CSE");//true

departments["MECH"]="Mechanical"; //Bad Practice
departments.has("MECH"); // false

departments.delete("MECH");
let deptDesc = departments.get("CSE");

departments.clear();

let keys = departments.keys();
let values= departments.values();


//Reference
//https://www.javascripttutorial.net/es6/javascript-map/#:~:text=Useful%20JavaScript%20Map%20%28%29%20methods%20clear%20%28%29%20%E2%80%93,the%20map%2C%20or%20false%20if%20it%20does%20not.