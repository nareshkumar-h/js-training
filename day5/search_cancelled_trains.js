var trains = [
    { trainNo:123, from:"Chennai Central",to: "Bangalore" },
    { trainNo:124, from:"Chennai Central",to: "Bangalore" },
    { trainNo:125, from:"Chennai Central",to: "Bangalore"}
];

var trainSchedules = [
    {trainNo: 123, type:"DAILY",timings: "23:30"},
    {trainNo:124, type:"MON,THU,WED",timings: "14:30"},
    {trainNo:125, type:"MON", timings: "10:00"}
]

var cancelledTrains = [ 
    {trainNo: 123, cancelledOn:"2021-01-28"}
];

function isCancelled_1(trainNo, journeyDate){
    let cancelled = false;
    for(let ts of cancelledTrains){
        if (ts.trainNo == trainNo && ts.cancelledOn == journeyDate){
            cancelled = true;            
        }
    }
    //todo: logic
    return cancelled;
}


function isCancelled_2(trainNo, journeyDate){
    let cancelled = false;
    let resultTrains = [];
    for (let ts of cancelledTrains){
        if (ts.trainNo == trainNo && ts.journeyDate == journeyDate){
            resultTrains.push(ts);
        }
    }
    if ( resultTrains.length > 0){
        cancelled = true;
    }

    //let cancelled = cancelledTrains.filter(ts=>ts.trainNo == trainNo && ts.cancelledOn == journeyDate).length > 0;
    console.log("cancelled:", cancelled);
    return cancelled;
}

function isCancelled_2(trainNo, journeyDate){
    let cancelled = cancelledTrains.filter(ts=>ts.trainNo == trainNo && ts.cancelledOn == journeyDate).length > 0;
    console.log("cancelled:", cancelled);
    return cancelled;
}


function isCancelled_3(trainNo, journeyDate){
    let cancelled = cancelledTrains.find(ts=>ts.trainNo == trainNo && ts.cancelledOn == journeyDate) != null;
    console.log("cancelled:", cancelled);
    return cancelled;
}

function isCancelled_3(trainNo, journeyDate){
    let cancelled = cancelledTrains.some(ts=>ts.trainNo == trainNo && ts.cancelledOn == journeyDate);
    console.log("cancelled:", cancelled);
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
    //let filteredTrains = trains.filter(t => !isCancelled(t.trainNo,journeyDateStr) && isTrainRunningOnThatDay(t.type, journeyDate,t.status));       
    let filteredTrains = [];
    for(let t of trains){
        let cancelled = isCancelled ( t.trainNo, journeyDateStr);
        if ( !cancelled){
            filteredTrains.push(t);
        }
    }
    return filteredTrains;
}

let results= searchTrains("Chennai Central","Bangalore","2020-01-27");
console.log(results);
