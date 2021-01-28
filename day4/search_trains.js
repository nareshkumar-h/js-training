var DAYS = new Map();
map.set(0,"SUN");
map.set(1,"MON");
map.set(2,"TUE");
map.set(3,"WED");
map.set(4,"THU");
map.set(5,"FRI");
map.set(6,"SAT");


 var trains = [
     { trainNo:123, from:"Chennai Central",to: "Bangalore", type:"DAILY", status:"CANCELLED"},
     { trainNo:124, from:"Chennai Central",to: "Bangalore", type:"MON,THU"},
     { trainNo:125, from:"Chennai Central",to: "Bangalore", type:"WED"}
 ];

function getDay(date){
    //let jDay = DAYS.get(date.getDay());
    return date.toString().substring(0,3).toUpperCase();
}

function isTrainRunningOnThatDay(type, journeyDate){

    let journeyDay = getDay(journeyDate); // WED
    let days = type.split(",");
    return type=="DAILY" || days.includes(journeyDay);
}

function searchTrains(source, destination, journeyDateStr){

    let journeyDate = new Date(journeyDateStr);            
    let filteredTrains = trains.filter(t => t.status !='CANCELLED' && isTrainRunningOnThatDay(t.type, journeyDate,t.status));       
    return filteredTrains;
}

function searchTrains_old(source, destination, journeyDateStr){

    let journeyDate = new Date(journeyDateStr);        
    console.log(jDay);
    let filteredTrains = [];
    for(let t of trains){
        if( isTrainAvailable(t.type, journeyDate)){
            filteredTrains.push(t);
        }
        // else{
        //     // Convert MON,TUE = ["MON", "TUE"]
        //     let days = t.type.split(",");
        //     console.log(days);
        //     // includes will check whether input exists in Array - is MON exists in ["MON","TUE"] = true
            
        //     if(days.includes(jDay)){
        //         filteredTrains.push(t);
        //     }

        // }
    }
    //logic

    return filteredTrains;

}

let results= searchTrains("Chennai Central","Bangalore","2020-01-27");
console.log(results);
