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

function isValid(ticketObj){
    return isValidStation(ticketObj.source) && isValidStation(ticketObj.destination);
}



ticketObj.isValid();

Object.assign(ticketObj, {sourceStationId: 1, destionationId : 2});
console.log(ticketObj);





