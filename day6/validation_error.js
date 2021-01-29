function ValidationError(message){
    this.name = "ValidationError";
    this.message= message;
}

function validate(name){
    if (name == null){
        throw new ValidationError("Invalid Name");
    }
}

try{
    validate(null);
    booking(null);
    console.log("Validation Success");
}
catch(err){
  //  err.captureStackTrace()
    console.log("Validation Error");    
    console.error(err);
    //console.trace(err);
    console.error("Name:" , err.name);
    console.error("Message:" ,err.message);
    if(err.name =="ValidationError"){

    }
    else if (err.name =="BookingError"){
        //sendMail();
    }
}
