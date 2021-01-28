var trains = [
    { trainNo:123, from:"Chennai Central",to: "Bangalore" },
    { trainNo:124, from:"Chennai Central",to: "Bangalore" },
    { trainNo:125, from:"Chennai Central",to: "Bangalore"}
];

var trainSchedules = [
    {trainNo: 123, type:"DAILY",timings: "23:30"},
    {trainNo:124, type:"MON,THU,WED",timings: "14:30"},
    {trainNo:125, type:"MON", timings: "10:00"},
    {trainNo:126, type:"MON", timings: "15:00"},
    {trainNo:127, type:"MON", timings: "10:00"},
];

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

let results= searchTrains("Chennai Central","Bangalore","2020-01-27");
console.log(results);

results.sort(sortByTimingsASC);

console.log("Sorted Trains:", results);
