var ticketObj = 
{
  trainNo: "123", from:"MAS", to:"HYD", journeyDate: "2021-01-22",
  ticketType: "TATKAL", noOfTickets:1  
};

ticketObj.hasOwnProperty("from") //true
ticketObj.hasOwnProperty("tatkal"); // false

// Validate the ticket details.

var journeyDate = new Date(ticketObj.journeyDate);
var todayObj = new Date();
//var todayDateStr = new Date().toJSON().substring(0,10);
//var todayDate = new Date(todayDateStr);
var todayDate = new Date(todayObj.getFullYear(), todayObj.getMonth(), todayObj.getDate());
console.log(journeyDate >= todayDate);

// If Valid - then book the ticket 
    // Print - Successfully Booked Ticket
// If Invalid
    // Display Error Message

    function isValidJourneyDate(ticketObj){
      //logic
      return false;
    }

    function isValidTicket(ticketObj){

      if ( isValidTrainNo(ticketObj.trainNo) && isValidJourneyDate(ticketObj.journeyDate)){
        return true;
      }
      return false;
    }

    function isValidTrainNo(trainNo){      
      return  (typeof trainNo == 'number' && trainNo > 0 && String(trainNo).length == 5);
    }

    isValidTrainNo(""); ///false
    isValidTrainNo("123"); ///false
    isValidTrainNo(123); ///true


    function bookTicket(ticketObj){

      if ( !isValidTicket(ticketObj)){
        console.log("Invalid Ticket Details. Please check the input");
      }
      else{
        console.log("Successfully Booked Ticket");
      }

    }



