var ticketObj = 
{
  trainNo: "123", from:"MAS", to:"HYD", journeyDate: "2021-01-22",
  ticketType: "TATKAL", noOfTickets:1  
};

function isValidDate(dateStr){
    //logic
    return true;//false
}

function isEquals(dateStr){
///
}

function isAfter(dateStr){
//
}

function isAfterDate( date1, date2 ){
//
}

function addDays(noOfDays){
    let date = new Date( new Date().toJSON().substring(0) );
    date.setDate(date.getDate(),noOfDays);
    return date;
}

const journeyDate = ticketObj.journeyDate;
if ( !isValidDate(journeyDate)){
    return "Invalid Journey date";
}
else {
    if ( isEquals(journeyDate) || isAfter(journeyDate)){

        if ( ticketObj.ticketType == "NORMAL" ){
            console.log("Normal Ticket booked ");
        }
        else if (ticketObj.ticketType == "TATKAL" ){

            const tatkalDate = addDays(2);
            if ( tatkalDate > journeyDate){

            }

        }
    }
}



function Datee(arg1,arg2,arg3){

    if (arg1 == undefined){
        this.date = new Date();
    }
    else if ( typeof arg1 == "string"){
        this.date = new Date(arg1);
    }
    else if ( typeof arg1 =="number" && typeof arg2 =="number" && typeof arg3 =="number" ){

    }
    
    return this.date;
}
new Datee();
new Datee("2020-01-22");