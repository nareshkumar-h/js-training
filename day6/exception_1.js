
function validateTicket(source){

    if(source ==null){
        throw new Error("Source cannot be empty");   
    }
    if (source.length < 2)
    {
        throw new Error("Source must be atleast 2 characters"); 
    }    
}


function bookTicket(source){

    try{     
        validateTicket(source);
        console.log("Successfully Booked Ticket");            
        //sendSMS(mobileNo, message);
        //sendMail(email,message);
    }
    catch(err){
        console.error(err);
        console.log("Please correct the input ticket details");
        console.error(err.message);
    }    
    finally{
        console.log("Finally");
    }
    console.log("Booking Process Completed");   
    //code here = will get executed 
    
}

bookTicket("Chennai");
bookTicket(null);
console.log("Completed");
