var today = new Date();
today.setDate(today.getDate(),2);
console.log(today);

Date.prototype.addDays = function(noOfDays){
    this.setDate(this.getDate(), noOfDays);
    return this;
}


Date.prototype.addMonths = function(noOfMonths){
    //todo: Implement logic to add no of months
    return this;
}

var ticketType= "NORMAL";
var ticketMaxDate = null;
if (ticketType == "NORMAL"){
    ticketMaxDate = new Date().addMonths(5);
}
else if (ticketType =="TATKAL"){
    ticketMaxDate = new Date().addDays(2);
}
console.log(tatkalMaxDate);
