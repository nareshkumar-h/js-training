//non existent propery problem

var ticketObj1 = { source:"Chennai Central"}
ticketObj1.source.toUpperCase();


var ticketObj2 = { destination:"Chennai Central"}
ticketObj2.source.toUpperCase();//throws error
ticketObj2.source?.toUpperCase(); //source property does not exists

let ticketObj3 = { source: "C"};
delete ticketObj3.source;


delete ticketObj3?.source