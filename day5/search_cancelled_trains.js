var trains = [
    { trainNo:123, from:"Chennai Central",to: "Bangalore" },
    { trainNo:124, from:"Chennai Central",to: "Bangalore" },
    { trainNo:125, from:"Chennai Central",to: "Bangalore"}
];

var trainSchedules = [
    {trainNo: 123, type:"DAILY"},
    {trainNo:124, type:"MON,THU,WED"},
    {trainNo:125, type:"MON"}
]

var cancelledTrains = [ 
    {trainNo: 123, cancelledOn:"2021-01-28"}
];

function isCancelled(trainNo, journeyDate){
    let cancelled = false;
    //todo: logic
    return cancelled;
}

function getDay(date){
    return date.toString().substring(0,3).toUpperCase();
}

function isTrainRunningOnThatDay(type, journeyDate){

    let journeyDay = getDay(journeyDate); // WED
    let days = type.split(",");
    return type=="DAILY" || days.includes(journeyDay);
}



function searchTrains(source, destination, journeyDateStr){

    let journeyDate = new Date(journeyDateStr);            
    let filteredTrains = trains.filter(t => !isCancelled(t.trainNo,journeyDateStr) && isTrainRunningOnThatDay(t.type, journeyDate,t.status));       

    return filteredTrains;
}


let results= searchTrains("Chennai Central","Bangalore","2020-01-27");
console.log(results);
