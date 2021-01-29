
function validateTicket(source){

    let errors = [];
    if(source == null || source ==""){
        errors.push("Source cannot be empty");   
    }
    if (source.length < 2)
    {
        errors.push("Source must be atleast 2 characters"); 
    } 
    let errorMessage = errors.join(",");
    throw new Error(errorMessage); 
}

function validateTicket_1(source){

    let errors = [];
    if(source == null || source ==""){
        errors.push("Source cannot be empty");   
    }
    if (source.length < 2)
    {
        errors.push("Source must be atleast 2 characters"); 
    } 
    return errors;
}

let errors = validateTicket_1("Chennai");
if (errors.length == 0){
    console.log("All fields are valid");
}
else{
    console.error("Fields are invalid ", errors.join(","));
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
bookTicket("");
console.log("Completed");
