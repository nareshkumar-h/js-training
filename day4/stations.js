let stations = ["Chennai Central","Hosur", "Bangalore","Salem"];

stations.includes("Hosur")









let sourceStationIndex = stations.findIndex(s=> s=="Hosur");
console.log("sourceStationIndex:", sourceStationIndex);

let sourceStationExists = sourceStationIndex != -1;
console.log("sourceStationExists:", sourceStationExists);

let destinationExists = stations.includes("Chennai Central", sourceStationIndex);
console.log("destinationExists:", destinationExists);

