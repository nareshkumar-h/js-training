var trains = [
    { trainNo:123, from:"Chennai Central",to: "Bangalore" },
    { trainNo:124, from:"Chennai Central",to: "Bangalore" },
    { trainNo:125, from:"Chennai Central",to: "Bangalore"},
    { trainNo:126, from:"Chennai Central",to: "Erode"},
    { trainNo:127, from:"Chennai Central",to: "Hyderabad"},
];

var trainSchedules = [
    {trainNo: 123, type:"DAILY",timings: "23:30"},
    {trainNo:124, type:"MON,THU,WED",timings: "14:30"},
    {trainNo:125, type:"MON", timings: "10:00"},
    {trainNo:126, type:"MON", timings: "15:00"},
    {trainNo:127, type:"MON", timings: "10:00"},
];
//{ trainNo:123, from:"Chennai Central", to:"Bangalore", type:"DAILY", timings:"23:30"}

function sortByTimingsASC(t1,t2){
    
    if (t1.timings < t2.timings){
        return -1;
    }
    else if (t1.timings > t2.timings){
        return 1;
    }
    else {
        return 0;
    }
}

function sortByTimingsDESC(t1,t2){
    let value = null;
    if (t1.timings > t2.timings){
        value= -1;
    }
    else if (t1.timings < t2.timings){
        value= 1;
    }
    else {
        value= 0;
    }
    console.log(t1.timings +" vs " + t2.timings  +" = " , value);
    return value;
}

function searchTrains(source, destination){
    let filteredTrains  = [];
    return filteredTrains;
}

let results= searchTrains("Chennai Central","Bangalore");
console.log(results);

let sortByTimings = "DESC";
//IF DESC , sort by descending, ASC sort by ascending
results.sort(sortByTimingsASC);

console.log("Sorted Trains:", results);


