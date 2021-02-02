
// Normal function
function hello(){
    return "hello";
}

function Ticket(source,destination,journeyDate){
    this.source = source;
    this.destination = destination;
    this.journeyDate = journeyDate;

    //Assigning function to a variable
    this.toString = function(){
         return "[source:" + source + ", destination:" + destination + ", journeyDate=" + journeyDate + "]";
    }

    this.toXML = function(){
        return `
        <source>${source}</source>
        <destination>${destination}</destination>
        <journeydate>${journeyDate}</journeydate>
        `;
    }
}

//// Functions as an Object - state, methods( using new keyword, we are creating object)
var t1 = new Ticket("MAS","HYD","2021-02-02");

console.log(t1.toString());
//[source:MAS, destination:HYD, journeyDate=2021-02-02]