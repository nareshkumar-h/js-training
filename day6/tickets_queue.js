var trainSeats = [
    { trainNo:123, seats:5 },
    { trainNo:124, seats:3 }
];

var bookedTickets = [
    { id:1,trainNo:123, from:"Chennai", to:"Bangalore", status:"CONFIRMED"},
    { id:2,trainNo:123, from:"Chennai", to:"Bangalore", status:"CONFIRMED"},
    { id:3,trainNo:123, from:"Chennai", to:"Bangalore", status:"CONFIRMED"},
    { id:4,trainNo:123, from:"Chennai", to:"Bangalore", status:"CONFIRMED"},
    { id:5,trainNo:123, from:"Chennai", to:"Bangalore", status:"CONFIRMED"},
    { id:6,trainNo:123, from:"Chennai", to:"Bangalore", status:"WAITING"}
];

function bookTicket(ticketObj){
    //implement logic
}

function cancelTicket(bookingId){
    //implement logic
}

var ticketObj = { id:7,trainNo:123, from:"Chennai", to:"Bangalore"};
console.log(ticketObj);
console.log("Before booking :"  );
console.table(bookedTickets);
//Book ticket
bookTicket(ticketObj);
console.log("After booking :"  );
console.table(bookedTickets);

let bookingId = 3;
cancelTicket(bookingId);
console.log("After cancelling :"  );
console.table(bookedTickets);

