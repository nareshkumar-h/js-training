var today = new Date();
today.setDate(today.getDate(),2);
console.log(today);

Date.prototype.addDays = function(noOfDays){
    this.setDate(this.getDate() + noOfDays);
    return this;
}


Date.prototype.addMonths = function(noOfMonths){    
    this.setMonth(this.getMonth()+ noOfMonths);
    return this;
}
// Testing
new Date().addDays(2);
new Date().addMonths(5);

var ticketType= "TATKAL";
var ticketMaxDate = null;
if (ticketType == "NORMAL"){
    ticketMaxDate = new Date().addMonths(5);
}
else if (ticketType =="TATKAL"){
    ticketMaxDate = new Date().addDays(2);
}
console.log(ticketMaxDate);
