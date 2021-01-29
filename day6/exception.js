function validateTicket_1(source){

    let isValid = true;
    if(source ==null){
        isValid = false;
    }
    return isValid;
}

function validateTicket(source){

    let messages = null;
    if(source ==null){
        messages = "Source cannot be empty";   
    }
    if (source.length > 1)
    {
        message = "Source must be atleast 2 characters"
    }
    if (destination == null){
        
    }
    return messages;
}

function validateTicket(source){

    let messages = null;
    if(source ==null){
        throw new Error("Source cannot be empty");   
    }
    if (source.length > 1)
    {
        throw new Error("Source must be atleast 2 characters"); 
    }
    return messages;
}


function bookTicket(source){

    let isValid = validateTicket(source);
    if (isValid){
        console.log("Successfully Booked Ticket");
        console.log("Booking Process Completed");
    }
    else{
        console.log("Invalid Ticket Details");
    }
    
}

function bookTicket2(source){

    let messages = validateTicket(source);
    if (messages == null){
        console.log("Successfully Booked Ticket");
        console.log("Booking Process Completed");
    }
    else{
        console.log("Invalid Ticket Details");
        console.error(messages);
    }
    
}


bookTicket2("Chennai");
