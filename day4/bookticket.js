let stations = [ 
    {id:1, stationName:"Chennai Central", code:"MAS"},
    {id:2, stationName:"Bangalore", code:"BGL"}
];

// function isValidStation(stationName){
//     //logic
//     return true;
// }


function isValidStation(stationName){
    //logic
    return stations.some(s=>s.stationName.toUpperCase() == stationName.toUpperCase() 
    || s.code == stationName.toUpperCase());
}


var ticketObj = {source: "Chennai Central", destination: "Bangalore", 
journeyDate: "2020-01-27", ticketType: "NORMAL"};

var ticketObj = {source: "MAS", destination: "BGL", 
journeyDate: "2020-01-27", ticketType: "NORMAL"};

//o/p
var trains = [
    {trainNo:123, name:"Bangalore Express", from:"Chennai Central", to:"Bangalore"},
    {trainNo:124, name:"Hyderabad Express", from:"Chennai Central", to:"Hyderabad"},
    {trainNo:125, name:"Saptagiri Express", from:"Chennai Central", to:"Bangalore"}
];

function getTrains(source,destination){
    let filteredTrains = [];

    //logic

    return filteredTrains;

}

let availableTrains = getTrains("Chennai Central", "Bangalore");
console.log(availableTrains);



function isValid(ticketObj){
    return isValidStation(ticketObj.source) && isValidStation(ticketObj.destination);
}



ticketObj.isValid();

Object.assign(ticketObj, {sourceStationId: 1, destionationId : 2});
console.log(ticketObj);


/* Business Rules
1. Source and Destination must not be same
2. Source and Destination must have a valid station name with case insensitive.
3. 

*/


