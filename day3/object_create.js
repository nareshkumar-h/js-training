
var ticket   = {
    ticketNo : 1,
    source:"MAS",
    destination:"HYD"
};

console.log("Ticket", ticket);

var ticketObj = Object.create(ticket);
console.log("TicketObj", ticketObj);
console.log("ticketNo:" , ticketObj.ticketNo);

//update fields
ticketObj.amount = 1000;
console.log("Ticket", ticket);

//Summary
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.