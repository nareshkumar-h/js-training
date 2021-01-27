let trains = [
    { trainNo: 123, stations:["Salem", "Madurai"] }
];

let stations = ["Chennai Central","Hosur", "Bangalore","Salem"];

stations.includes("Hosur")


let inputStation = "Salem";

let filteredTrains = [];
for(let t of trains){
    let exist = false;
    let stations = t.stations;
    for(let s of stations){
        if (s == inputStation){
            exist = true;
        }
    }
    if(exist){
        filteredTrains.push(t);
    }
}








let sourceStationIndex = stations.findIndex(s=> s=="Hosur");
console.log("sourceStationIndex:", sourceStationIndex);

let sourceStationExists = sourceStationIndex != -1;
console.log("sourceStationExists:", sourceStationExists);

let destinationExists = stations.includes("Chennai Central", sourceStationIndex);
console.log("destinationExists:", destinationExists);

