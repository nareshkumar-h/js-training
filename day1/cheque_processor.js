
/**
 * This method will return valid cheque numbers
 * @param  cheques 
 */
function validate(cheques){
    console.log("Validating cheques");
    return cheques.filter(c=>c%2==0);
}

function processCheques (cheques){
    console.log("Processing Cheques", cheques);
}


// Step 1: Get All Cheques
let cheques = [ 1,3,4,5];

//Step 2: Validate Cheques
let validCheques = validate(cheques);

// Step 3: Process the cheques
processCheques(validCheques);

let invalidCheques = cheques.filter(c=> validCheques.indexOf(c) == -1);//==-1 : Not
let invalidCheques1 = cheques.filter(c=> !validCheques.includes(c));//
console.log("Invalid Cheques", invalidCheques);
console.log("Cheque processing completed");

//Attention to Detail (ATD)
//List the cheques which are not processed ( odd number invalid)
// Cheques not processed - 3,5

