//Encapsulation

class Person {
    constructor(name) {
        var _name = name
        this.setName = function(name) { _name = name; }
        this.getName = function() { return _name; }
    }
}

//getter/setters

let p1 = new Person("Naresh");

//Get the value
p1.getName();

//Update the Value
p1.setName("Suresh");

