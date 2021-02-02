class ProductStock{
    
    constructor(productName, quantity){
        this.productName = productName;
        this.quantity = quantity;
    }

    setProductName(productName){
        this.productName =  productName;
    }

    setQuantity(quantity){
        this.quantity = quantity;
    }

    getProductName(){
        return this.productName;
    }

    getQuantity(){
        return this.quantity;
    }
}

// 1. Assign values - using Constructor
let p1 = new ProductStock("iPhone", 5);

// 2. Assign values using Setter/Getters
let p2 = new ProductStock();
p2.setProductName("Samsung");
p2.setQuantity(4);

console.log(p1);
console.log(p2);

console.log(p1.getProductName() + "-" + p1.getQuantity());
