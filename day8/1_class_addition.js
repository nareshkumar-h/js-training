class Addition{
    constructor(a,b){
        this.a=a;
        this.b=b;
        this.c = a + b; // Don't write logic inside a constructor
    }

    calculate(){
        let c = this.a + this.b;
        return c;
    }
}

let additionObj1 = new Addition(10,20);
let res1 = additionObj1.calculate();