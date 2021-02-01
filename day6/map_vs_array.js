
var departments = [ 
    {code:"CSE", department:"Computer Science"},
    {code:"IT", department:"Information Technology"},
    {code:"MECH", department:"Mechanical"}
];


var departmentMap = new Map();
//key,value ==> key will act like an index
departmentMap.set("CSE","Computer Science");
departmentMap.set("IT","Information Technology");
departmentMap.set("MECH", "Mechanical");

if(departmentMap.has("MECH")){
    departmentMap.set("MECH", "Mechanical");
}
//search
// input 
let input = "CSE";
let departmentName = departments.map(obj => obj.code ==input)?.department;
console.log("Using Array:" , input +"-" + departmentName);

let value  = departmentMap.get(input); //"CSE"
console.log("Map:" , input +"-" + value);