async function bookTicket(ticketObj){
    console.log("Booked Ticket");
    return "success";
}

let ticketObj = { trainNo:123, source:"MAS", destination:"HYD", journeyDate:"2021-02-05"};

// Approach #1: Promise .then - Pass callback function
bookTicket(ticketObj).then( (response)=>{
    console.log(response);
});
console.log("Completed");

// Approach #2: Using await
let ticketResponse = await bookTicket(ticketObj);
console.log(ticketResponse);
console.log("Completed");

