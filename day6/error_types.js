/*
The JavaScript 1.5 specification defines six primary error types, as follows:
EvalError: Raised when the eval() functions is used in an incorrect manner.
RangeError: Raised when a numeric variable exceeds its allowed range.
ReferenceError: Raised when an invalid reference is used.
SyntaxError: Raised when a syntax error occurs while parsing JavaScript code.
TypeError: Raised when the type of a variable is not as expected.
URIError: Raised when the encodeURI() or decodeURI() functions are used in an incorrect manner.
*/

let price ="20";
if (typeof price != 'number'){
    throw new TypeError("price is not a number");
}

let noOfTickets = -2;
if (noOfTickets < 0){
    throw new RangeError("No of Tickets must be greater than one");
}


console.log("TicketType", ticketType); //variable not declared. ReferenceTypeError
//s+; //SyntaxError
