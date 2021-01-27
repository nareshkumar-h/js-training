function Ticket(source,destination,journeyDate,ticketType="NORMAL",noOfTickets= 1){
    this.source = source.trim().toUpperCase();
    this.destination = destination.trim().toUpperCase();
    this.ticketType = ticketType.trim().toUpperCase();    
    let jDate = new Date(journeyDate);
    jDate.setHours(0,0,0);
    this.journeyDate = jDate;    
    this.noOfTickets = noOfTickets;

    this.validateTicket = function(){
        
    }

    this.bookTicket = function(){        
        console.log("Successfully Booked Ticket");
        console.log(this);
    }
}


let ticket1 = new Ticket("Chennai Central ", "Bangalore","2020-01-27");
ticketObj.validateTicket();

ticket1.bookTicket();


let stations = ["Chennai Central","Hosur", "Bangalore"];

