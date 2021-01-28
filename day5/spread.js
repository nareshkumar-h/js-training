//Spread syntax can be used when all elements from an object  or array need to be included in a list.

var obj1= { trainNo: 1, trainName:"Train 1"}

var obj2 = {trainNo: 1, timings: "10:30"}

var result = { ...obj1}
console.log(result);
//{trainNo: 1, trainName: "Train 1"}

var result1= { ...obj1,...obj2}
console.log(result1);
//{trainNo: 1, trainName: "Train 1", timings: "10:30"}

var trains = [1,2,3]
let newTrains = [...trains]
console.log(newTrains);

var trainsObjArray = [{trainNo:1}, {trainNo:2}]
let newTrainsArray = [... trainsObjArray];
console.log(newTrainsArray);