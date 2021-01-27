function Ticket(ticketNo,source,destination,journeyDate,ticketType="NORMAL"){
    this.ticketNo = ticketNo; 
    this.source =    source;
    this.destination = destination;
    this.journeyDate = journeyDate;    
    this.ticketType = ticketType;
}


Ticket.prototype.isValidTicketNo = function(){

    return !isNaN(this.ticketNo);
}

Ticket.prototype.isValidJourneyDate = function(){

    return true;
}

Ticket.prototype.isValid = function(){
    return this.isValidTicketNo() && this.isValidJourneyDate();
}

//Testing
let ticket1 = new Ticket(1,"MAS","HYD","2020-01-25","TATKAL");

let ticket2 = new Ticket(1,"MAS","HYD","2020-01-25");
let ticket3 = new Ticket("sss");
console.log(ticket1);
console.log(ticket2);
ticket1.isValid();
ticket2.isValidJourneyDate();
ticket3.isValidTicketNo();

