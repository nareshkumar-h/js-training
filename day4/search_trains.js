var DAYS = new Map();
map.set(0,"SUN");
map.set(1,"MON");
map.set(2,"TUE");
map.set(3,"WED");
map.set(4,"THU");
map.set(5,"FRI");
map.set(6,"SAT");


var trains = [
    { trainNo:123, from:"Chennai Central",to: "Bangalore", type:"DAILY"},
    { trainNo:124, from:"Chennai Central",to: "Bangalore", type:"MON,TUE"},
    { trainNo:125, from:"Chennai Central",to: "Bangalore", type:"WED"}
];

function getDay(date){
    //let jDay = DAYS.get(date.getDay());
    return date.toString().substring(0,3).toUpperCase();
}

function searchTrains(source, destination, journeyDate){

    let jDate = new Date(journeyDate);    
    let jDay = getDay(jDate);
    console.log(jDay);

    let filteredTrains = [];
    for(let t of trains){
        if(t.type=="DAILY"){
            filteredTrains.push(t);
        }
        else{

            let days = t.type.split(",");
            console.log(days);
            if(days.includes(jDay)){
                filteredTrains.push(t);
            }

        }
    }
    //logic

    return filteredTrains;

}

let results= searchTrains("Chennai Central","Bangalore","2020-01-27");
console.log(results);
