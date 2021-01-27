let numbers = [2,4,6];

let result = numbers.map(n=>n*n);
console.log(result);


let trainStations = [
 { id: 1, stationName: "Chennai Central", code:"MAS"} ,
 {id:2, stationName:"Chengalpattu", code:"CGL"} 
];

//Passing object as an argument
function getStationNameAndCode(stationObj){

    let station = stationObj.stationName.toUpperCase() + " - " + stationObj.code;
    return station;
}

let stationNames =  trainStations.map(obj=> obj.stationName.toUpperCase() +"-" + obj.code);

let stationNames =  trainStations.map(obj=> getStationNameAndCode(obj));

let stationNames =  trainStations.map(getStationNameAndCode);





