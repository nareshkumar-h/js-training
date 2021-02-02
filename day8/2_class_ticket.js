
class Ticket{

    // Constructor will get called automatically, when we create object for the class
    // Usage: used for initialization.
    constructor(source,destination,journeyDate){
        this.source = source;
        this.destination = destination;
        this.journeyDate = journeyDate;
        
        this.sendMail(); //not recommended. Use constructor for initialization.
    }

    toString(){        
        return "[source:" + this.source + ", destination:" + this.destination + ", journeyDate=" + this.journeyDate + "]";
    }

    sendMail(){
        console.log("Send Ticket Details in Mail");
    }

}

//Object => state(instance variables) + methods


let t1 = new Ticket("MAS","BGL", "2021-02-02");
console.log(t1.toString());