
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }



var studentDetails = { id: 1, name:"Naresh"};
var studentDepartmentDetails = { departmentId: 1, departmentName:"CSE"};

var studentObj = Object.assign({},studentDetails, studentDepartmentDetails);
console.log(studentObj);

//Reference:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign