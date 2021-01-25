// Structural Types

//1. Object
// 1.1: Object
let obj = {}

//1.2. Date
let today = new Date();

//1.3: Array
let marks = [ 70,80,90];

//1.4: Map
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
//1.6 



